// Pointer-driven effects. Only on fine pointers (mouse/trackpad) and when motion is allowed;
// everything still looks complete without them.
const canAnimate =
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Close the mobile menu after choosing a link.
document.querySelectorAll<HTMLDetailsElement>('.nav-mobile').forEach((menu) => {
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => (menu.open = false)));
});

/* "Hold the light": the cursor becomes a light that reveals the hero photo. */
function initHero() {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  const orb = hero?.querySelector<HTMLElement>('[data-orb]');
  if (!hero || !orb) return;

  const home = () => {
    const h = hero.getBoundingClientRect();
    const o = orb.getBoundingClientRect();
    hero.style.setProperty('--lx', `${o.left + o.width / 2 - h.left}px`);
    hero.style.setProperty('--ly', `${o.top + o.height / 2 - h.top}px`);
  };
  home();
  window.addEventListener('resize', home, { passive: true });
  if (!canAnimate) return;

  let frame = 0;
  hero.addEventListener('pointermove', (e) => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const r = hero.getBoundingClientRect();
      hero.style.setProperty('--lx', `${e.clientX - r.left}px`);
      hero.style.setProperty('--ly', `${e.clientY - r.top}px`);
    });
  });
  hero.addEventListener('pointerleave', home);
}

/* 3D tilt + spotlight for cards. */
function initTilt() {
  if (!canAnimate) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      el.style.setProperty('--rx', `${((0.5 - y) * 8).toFixed(2)}deg`);
      el.style.setProperty('--ry', `${((x - 0.5) * 10).toFixed(2)}deg`);
      el.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
      el.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--rx', '0deg');
      el.style.setProperty('--ry', '0deg');
    });
  });
}

initHero();
initTilt();
