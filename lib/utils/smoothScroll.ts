export const smoothScrollTo = (target: string | number = 0) => {
  let end: number;
  if (typeof target === "number") {
    end = target;
  } else {
    const el = document.getElementById(target);
    if (!el) return;
    const headerHeight = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--header-height",
      ) || "0",
    );
    end = el.getBoundingClientRect().top + window.scrollY - headerHeight;
  }

  const start = window.scrollY;
  const duration = 1000;
  const startTime = performance.now();

  const easeInOut = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, start + (end - start) * easeInOut(progress));
    if (progress < 1) requestAnimationFrame(animate);
  };

  requestAnimationFrame(animate);
};
