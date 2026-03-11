const revealItems = document.querySelectorAll('.section, .hero-copy, .hero-panel');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal', 'is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => {
  item.classList.add('reveal');
  revealObserver.observe(item);
});

const syncTopbarState = () => {
  document.body.classList.toggle('menu-scrolled', window.scrollY > 24);
};

const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobileNav');

if (menuToggle && mobileNav) {
  const closeMenu = () => {
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  menuToggle.addEventListener('click', () => {
    const willOpen = !document.body.classList.contains('menu-open');
    document.body.classList.toggle('menu-open', willOpen);
    menuToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 960) {
      closeMenu();
    }
  });
}

window.addEventListener('scroll', syncTopbarState, { passive: true });
syncTopbarState();
