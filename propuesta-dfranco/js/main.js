/* ============================================================
   D'FRANCO HAIR SALON — Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ============ PRELOADER ============
  window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(() => preloader.classList.add('loaded'), 800);
    }
  });

  // ============ AOS INIT ============
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }

  // ============ NAVBAR SCROLL ============
  const navbar = document.getElementById('navbar');
  const scrollThreshold = 60;

  function handleNavScroll() {
    if (window.scrollY > scrollThreshold) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  // ============ ACTIVE NAV LINK ============
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  function highlightNav() {
    const scrollY = window.scrollY + 200;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach(a => a.classList.remove('active'));
        const match = document.querySelector('.nav-links a[href="#' + id + '"]');
        if (match) match.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });

  // ============ MOBILE NAV TOGGLE ============
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ============ SMOOTH SCROLL ============
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = navbar.offsetHeight + 20;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ============ TESTIMONIALS SLIDER ============
  const track = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const dotsContainer = document.getElementById('testimonialDots');

  if (track && prevBtn && nextBtn && dotsContainer) {
    const cards = track.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    const total = cards.length;

    // Create dots
    cards.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function goTo(index) {
      if (index < 0) index = total - 1;
      if (index >= total) index = 0;
      currentIndex = index;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex));
    }

    prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
    nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

    // Auto-advance every 6 seconds
    let autoSlide = setInterval(() => goTo(currentIndex + 1), 6000);

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(autoSlide));
    track.addEventListener('mouseleave', () => {
      autoSlide = setInterval(() => goTo(currentIndex + 1), 6000);
    });
  }

  // ============ CONTACT FORM ============
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // In production, connect to Formspree, EmailJS, or a backend
      const btn = this.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Message Sent!';
      btn.style.background = '#4CAF50';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.disabled = false;
        this.reset();
      }, 3000);
    });
  }

  // ============ NEWSLETTER FORM ============
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = this.querySelector('input');
      const btn = this.querySelector('button');
      const originalText = btn.textContent;
      btn.textContent = 'Subscribed!';
      btn.style.background = '#4CAF50';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        input.value = '';
      }, 3000);
    });
  }

  // ============ COUNTER ANIMATION ============
  const counters = document.querySelectorAll('.badge-number');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent;
        const match = text.match(/(\d+)/);
        if (match) {
          const target = parseInt(match[1]);
          const suffix = text.replace(match[1], '');
          let current = 0;
          const step = Math.ceil(target / 50);
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            el.textContent = current + suffix;
          }, 30);
        }
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  // ============ BOOKING TOAST (MOBILE) ============
  const bookingToast = document.getElementById('bookingToast');
  const bookingLink = document.getElementById('bookingToastLink');
  const bookingClose = document.getElementById('bookingToastClose');

  if (bookingToast) {
    let toastDismissed = false;
    let toastVisible = false;
    let toastInterval;

    function showToast() {
      if (toastDismissed || toastVisible) return;
      toastVisible = true;
      bookingToast.classList.add('visible');
      // Auto-hide after 6s
      setTimeout(function() {
        hideToast();
      }, 6000);
    }

    function hideToast() {
      bookingToast.classList.remove('visible');
      toastVisible = false;
    }

    // Show first time after 8s of browsing
    setTimeout(function() {
      showToast();
      // Then repeat every 25s
      toastInterval = setInterval(function() {
        if (!toastDismissed) showToast();
      }, 25000);
    }, 8000);

    // Click link → scroll to contact & dismiss permanently
    if (bookingLink) {
      bookingLink.addEventListener('click', function(e) {
        e.preventDefault();
        toastDismissed = true;
        hideToast();
        if (toastInterval) clearInterval(toastInterval);
        var target = document.getElementById('contact');
        if (target) {
          var offset = navbar ? navbar.offsetHeight : 0;
          window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
        }
      });
    }

    // X button → dismiss permanently
    if (bookingClose) {
      bookingClose.addEventListener('click', function() {
        toastDismissed = true;
        hideToast();
        if (toastInterval) clearInterval(toastInterval);
      });
    }
  }

  // ============ PARALLAX ON SCROLL ============
  const parallaxSection = document.querySelector('.parallax-quote');
  if (parallaxSection) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const rect = parallaxSection.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const yPos = (rect.top / window.innerHeight) * 30;
        parallaxSection.style.backgroundPositionY = yPos + 'px';
      }
    }, { passive: true });
  }

});
