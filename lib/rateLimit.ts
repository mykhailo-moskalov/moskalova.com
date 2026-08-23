type Window = { windowMs: number; max: number; maxKeys: number };

class SlidingWindow {
  private hits = new Map<string, number[]>();
  constructor(private readonly opts: Window) {}

  check(key: string, now = Date.now()) {
    const recent = this.recent(key, now);
    return recent.length < this.opts.max;
  }

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
    for (const [key, ts] of this.hits) {
      if (ts.every((t) => now - t >= this.opts.windowMs)) this.hits.delete(key);
    }
    while (this.hits.size > this.opts.maxKeys) {
      const oldest = this.hits.keys().next().value;
      if (oldest === undefined) break;
      this.hits.delete(oldest);
    }
  }
}

const HOUR = 60 * 60 * 1000;
const DAY = 24 * HOUR;

export const perIp = new SlidingWindow({
  windowMs: HOUR,
  max: 5,
  maxKeys: 5000,
});

export const perRecipient = new SlidingWindow({
  windowMs: DAY,
  max: 3,
  maxKeys: 5000,
});

export const global = new SlidingWindow({
  windowMs: HOUR,
  max: 30,
  maxKeys: 1,
});
