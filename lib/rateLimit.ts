/**
 * Tiny in-memory sliding-window limiters.
 *
 * Works because the site runs as ONE long-lived Node process. On serverless
 * every instance would have its own (empty) map — use Redis there instead.
 */

type Window = { windowMs: number; max: number; maxKeys: number };

class SlidingWindow {
  private hits = new Map<string, number[]>();
  constructor(private readonly opts: Window) {}

  /** True if `key` is still under the limit (does NOT record a hit). */
  check(key: string, now = Date.now()) {
    const recent = this.recent(key, now);
    return recent.length < this.opts.max;
  }

  /** Records a hit. Returns false if the key is over the limit (hit not recorded). */
  hit(key: string, now = Date.now()) {
    const recent = this.recent(key, now);
    if (recent.length >= this.opts.max) return false;
    recent.push(now);
    this.hits.set(key, recent);
    this.evict(now);
    return true;
  }

  private recent(key: string, now: number) {
    return (this.hits.get(key) ?? []).filter(
      (t) => now - t < this.opts.windowMs,
    );
  }

  private evict(now: number) {
    if (this.hits.size <= this.opts.maxKeys) return;
    // 1) drop fully expired keys
    for (const [key, ts] of this.hits) {
      if (ts.every((t) => now - t >= this.opts.windowMs)) this.hits.delete(key);
    }
    // 2) still too many? drop oldest-inserted (Map keeps insertion order) —
    //    a hard cap so memory/CPU can't be exhausted by many distinct keys.
    while (this.hits.size > this.opts.maxKeys) {
      const oldest = this.hits.keys().next().value;
      if (oldest === undefined) break;
      this.hits.delete(oldest);
    }
  }
}

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;

/** Per client IP: 5 submissions / hour. */
export const perIp = new SlidingWindow({ windowMs: HOUR, max: 5, maxKeys: 5000 });

/** Per visitor email: 1 confirmation / day — the auto-reply must never become
 *  a way to make noreply@moskalova.com repeatedly mail a third party. */
export const perRecipient = new SlidingWindow({ windowMs: DAY, max: 1, maxKeys: 5000 });

/** Whole process: 30 submissions / hour. A burst from a proxy pool can't
 *  drain the Google Workspace sending quota or flood the inbox. */
export const global = new SlidingWindow({ windowMs: HOUR, max: 30, maxKeys: 1 });
