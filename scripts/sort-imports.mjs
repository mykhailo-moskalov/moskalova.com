import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIRS = ["app", "components", "lib"];
const EXT = new Set([".ts", ".tsx"]);

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== "node_modules") yield* walk(p);
    } else if (EXT.has(path.extname(e.name)) && !e.name.endsWith(".d.ts"))
      yield p;
  }
}

const IMPORT_RE =
  /^(?:[ \t]*\/\/[^\n]*\r?\n)*[ \t]*import\b[^;]*?from\s*["'][^"']+["'];[ \t]*(?:\r?\n|$)|^(?:[ \t]*\/\/[^\n]*\r?\n)*[ \t]*import\s*["'][^"']+["'];[ \t]*(?:\r?\n|$)/gm;

function group(source) {
  if (/\.css$/.test(source)) return 1;
  if (/^next-intl(\/|$)/.test(source)) return 2;
  if (/^@\/components\//.test(source) || /^\.\.?\//.test(source)) return 3;
  if (/^@\//.test(source)) return 5;
  return 4;
}

function localNames(stmt) {
  const head = stmt
    .replace(/\/\/[^\n]*/g, "")
    .replace(/^\s*import\s+(type\s+)?/, "")
    .replace(/\s+from\s*["'][^"']+["'];?\s*$/s, "");
  if (/^["']/.test(head.trim())) return [];
  const names = [];
  const braces = head.match(/\{([^}]*)\}/);
  if (braces) {
    for (const part of braces[1].split(",")) {
      const m = part
        .trim()
        .replace(/^type\s+/, "")
        .match(/(?:\w+\s+as\s+)?(\w+)\s*$/);
      if (m) names.push(m[1]);
    }
  }
  const rest = head.replace(/\{[^}]*\}/, "");
  for (const m of rest.matchAll(/(?:\*\s+as\s+)?(\w+)/g))
    if (m[1] !== "as") names.push(m[1]);
  return names;
}

let changed = 0,
  scanned = 0;
for (const dir of DIRS) {
  if (!fs.existsSync(dir)) continue;
  for (const file of walk(dir)) {
    scanned++;
    const src = fs.readFileSync(file, "utf8");
    const matches = [...src.matchAll(IMPORT_RE)];
    if (matches.length < 2) continue;
    const first = matches[0].index,
      last = matches.at(-1);
    const end = last.index + last[0].length;
    const region = src.slice(first, end);

    const leftover = region
      .replace(IMPORT_RE, "")
      .replace(/\/\/[^\n]*/g, "")
      .trim();
    if (leftover) {
      console.warn("skip (non-import code inside import region):", file);
      continue;
    }

    const body = src.slice(end);
    const items = matches.map((m, i) => {
      const stmt = m[0].replace(/\s+$/, "");
      const source = stmt.match(/["']([^"']+)["'];?\s*$/)[1];
      const names = localNames(stmt);
      let firstUse = Infinity;
      for (const n of names) {
        const re = new RegExp(`(?<![\w$.])${n}(?![\w$])`);
        const idx = body.search(re);
        if (idx !== -1 && idx < firstUse) firstUse = idx;
      }
      const g = group(source);
      const sub = g === 1 ? (/\.module\.css$/.test(source) ? 0 : 1) : 0;
      return { stmt, g, sub, firstUse, i };
    });
    items.sort(
      (a, b) =>
        a.g - b.g || a.sub - b.sub || a.firstUse - b.firstUse || a.i - b.i,
    );
    const out =
      src.slice(0, first) +
      items.map((x) => x.stmt).join("\n") +
      "\n" +
      body.replace(/^\s*\n/, "\n");
    if (out !== src) {
      fs.writeFileSync(file, out);
      changed++;
    }
  }
}
console.log(`scanned ${scanned}, rewrote ${changed}`);
