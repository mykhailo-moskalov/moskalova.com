const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS = 5;
const MAX_TRACKED_IPS = 5000;

const hits = new Map<string, number[]>();

// Works because the site runs as one long-lived Node process.
// On serverless this would reset on every cold start.
export function rateLimit(ip: string) {
  const now = Date.now();

  if (hits.size > MAX_TRACKED_IPS) {
    for (const [key, timestamps] of hits) {
      if (timestamps.every((time) => now - time >= WINDOW_MS)) hits.delete(key);
    }
  }

  const recent = (hits.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) return false;

  recent.push(now);
  hits.set(ip, recent);
  return true;
}
