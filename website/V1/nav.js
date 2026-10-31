(function () {
  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('.site-header nav a[href^="#"]')];
  let queued = false;
  function update() {
    const threshold = Math.max(180, window.innerHeight * 0.4);
    let current = sections[0]?.id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) current = section.id;
    }
    for (const link of links) {
      if (link.hash === '#' + current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    queued = false;
  }
  window.addEventListener('scroll', () => {
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
