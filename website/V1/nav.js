(function () {
  const header = document.querySelector('.site-header');
  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('.site-header nav a[href^="#"]')];
  if (!header || !sections.length || !links.length) return;

  function update() {
    const headerHeight = header.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--anchor-offset', `${Math.ceil(headerHeight + 16)}px`);
    const threshold = headerHeight + Math.max(90, window.innerHeight * 0.25);
    let currentSectionId = sections[0].id;
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) currentSectionId = section.id;
    }
    for (const link of links) {
      if (link.hash === '#' + currentSectionId) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }

  let queued = false;
  function scheduleUpdate() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      update();
    });
  }
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  window.addEventListener('pageshow', scheduleUpdate);
  update();
})();
