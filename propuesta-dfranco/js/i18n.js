/* =========================================================
   D'Franco Hair Salon — i18n (Internationalization)
   Auto-detects browser language: Spanish (default) / English
   ========================================================= */

(function () {
  'use strict';

  // English translations — Spanish lives in the HTML as default text
  var en = {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.gallery": "Gallery",
    "nav.team": "Team",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.book": "Book Now",

    // Hero
    "hero.subtitle": "We Elevate & Accentuate Your Beauty",
    "hero.description": "Full Service Salon & Master Colorist — Where artistry meets elegance",
    "hero.cta1": "Book Appointment",
    "hero.cta2": "View Services",
    "hero.rating": "4.3 Stars — 58 Google Reviews",
    "hero.scroll": "Explore",

    // Marquee
    "m.color": "Color Specialists",
    "m.highlights": "Highlights",
    "m.cuts": "Haircuts",
    "m.facials": "Facials",
    "m.lashes": "Lash Extensions",
    "m.bridal": "Bridal",
    "m.color2": "Color Specialists",
    "m.highlights2": "Highlights",
    "m.cuts2": "Haircuts",
    "m.facials2": "Facials",
    "m.lashes2": "Lash Extensions",
    "m.bridal2": "Bridal",

    // About
    "about.label": "Our Story",
    "about.title": "Where Beauty<br>Becomes Art",
    "about.badge": "Years of<br>Excellence",
    "about.text1": "At D'Franco Hair Salon, we believe everyone deserves to feel extraordinary. Located in the heart of Woodside, Queens, our salon has been a trusted destination for those seeking flawless color, precision cuts, and rejuvenating beauty treatments.",
    "about.text2": "Led by Master Colorist <strong>Henry Franco</strong>, our team of professionals combines artistry with the latest techniques to elevate and accentuate your natural beauty. From subtle highlights to bold transformations, we craft every look with precision and passion.",
    "about.f1t": "Master Colorist",
    "about.f1d": "Expert color formulation & application",
    "about.f2t": "Full Service",
    "about.f2d": "Hair, skin, lashes & more",
    "about.f3t": "Personal Touch",
    "about.f3d": "Every client is unique to us",

    // Services
    "svc.label": "What We Offer",
    "svc.title": "Our Services",
    "svc.sub": "Comprehensive beauty services tailored to your unique style",
    "svc.popular": "Most Popular",

    "svc.c.t": "Hair Color",
    "svc.c.d": "Full color, root touch-up, color correction — our master colorist creates the perfect shade for you.",
    "svc.c.1": "Single Process Color",
    "svc.c.2": "Double Process",
    "svc.c.3": "Color Correction",
    "svc.c.4": "Gray Coverage",

    "svc.h.t": "Highlights & Blonding",
    "svc.h.d": "From natural sun-kissed highlights to stunning platinum transformations.",
    "svc.h.1": "Full Highlights",
    "svc.h.2": "Partial Highlights",
    "svc.h.3": "Balayage & Ombré",
    "svc.h.4": "Platinum Blonding",

    "svc.ct.t": "Cuts & Styling",
    "svc.ct.d": "Precision cuts and styles for women and men, designed to complement your features.",
    "svc.ct.1": "Women's Cuts",
    "svc.ct.2": "Men's Cuts",
    "svc.ct.3": "Blowouts & Styling",
    "svc.ct.4": "Special Occasions",

    "svc.tr.t": "Hair Treatments",
    "svc.tr.d": "Restore, strengthen, and protect your hair with professional-grade treatments.",
    "svc.tr.1": "Keratin Treatment",
    "svc.tr.2": "Deep Conditioning",
    "svc.tr.3": "Bond Repair",
    "svc.tr.4": "Scalp Treatments",

    "svc.f.t": "Facials & Skincare",
    "svc.f.d": "Rejuvenate your skin with our professional facial treatments and LED therapy.",
    "svc.f.1": "Deep Cleansing Facial",
    "svc.f.2": "LED Light Therapy",
    "svc.f.3": "Anti-Aging Treatment",
    "svc.f.4": "Hydrating Facial",

    "svc.l.t": "Lash Extensions",
    "svc.l.d": "Beautiful, natural-looking lash extensions to enhance your eyes effortlessly.",
    "svc.l.1": "Classic Lashes",
    "svc.l.2": "Volume Lashes",
    "svc.l.3": "Hybrid Set",
    "svc.l.4": "Lash Lift & Tint",

    "svc.cta.t": "Ready to transform your look?",
    "svc.cta.b": "Call to Book — (718) 651-2190",

    // Gallery
    "gal.label": "Our Work",
    "gal.title": "Hair Inspiration <span class=\"gold\">@dfrancohairsalon</span>",
    "gal.sub": "Every head of hair tells a story — here are some of ours",
    "gal.1": "Balayage Transformation",
    "gal.2": "Platinum Blonde",
    "gal.3": "Natural Highlights",
    "gal.4": "Color Correction",
    "gal.5": "Dimensional Color",
    "gal.6": "Bridal Styling",
    "gal.7": "Men's Cut",
    "gal.8": "Facial Treatment",
    "gal.cta": "Follow Us on Instagram",

    // Parallax Quote
    "quote.text": "\u201CYour hair is the crown you never take off — let us make it shine.\u201D",
    "quote.cite": "— Henry Franco, Master Colorist",

    // Team
    "team.label": "The Experts",
    "team.title": "Meet Our Team",
    "team.sub": "Passionate professionals dedicated to your beauty",
    "team.1r": "Founder & Master Colorist",
    "team.1d": "With 15+ years of experience, Henry is known for his expert color formulations and transformative artistry.",
    "team.2n": "Professional Stylist",
    "team.2r": "Senior Stylist",
    "team.2d": "Specializing in precision cuts and modern styling techniques for a look that's uniquely yours.",
    "team.3n": "Beauty Specialist",
    "team.3r": "Esthetician",
    "team.3d": "Expert in facials, LED therapy, and lash extensions — bringing out the best in your natural beauty.",

    // Testimonials
    "rev.label": "Client Love",
    "rev.title": "What Our Clients Say",
    "rev.1t": "\u201CThese beautiful nails were done by Stephanie! The salon is amazing and the team truly cares about their clients. Highly recommended!\u201D",
    "rev.1n": "Happy Client",
    "rev.src": "Google Review",
    "rev.2t": "\u201CHenry is the best colorist in Queens! He completely transformed my hair from a disaster to the most beautiful blonde. A true artist.\u201D",
    "rev.2n": "Loyal Client",
    "rev.src2": "Google Review",
    "rev.3t": "\u201CI\u2019ve been coming here for years. The quality of color work is outstanding. My highlights always look natural and perfectly blended.\u201D",
    "rev.3n": "Regular Client",
    "rev.src3": "Google Review",
    "rev.4t": "\u201CWonderful experience from start to finish! The salon is clean, the staff is professional, and my hair looks amazing. Will definitely be back!\u201D",
    "rev.4n": "New Client",
    "rev.src4": "Google Review",
    "rev.tg": "Google Reviews",
    "rev.ti": "Instagram Posts",
    "rev.tc": "Happy Clients",

    // Contact
    "ct.label": "Get in Touch",
    "ct.title": "Visit Us",
    "ct.desc": "We'd love to welcome you at D'Franco Hair Salon. Walk-ins are welcome, but we recommend booking ahead for the best experience.",
    "ct.loc": "Location",
    "ct.phone": "Phone",
    "ct.hours": "Hours",
    "ct.hd": "Monday – Saturday: 10:00 AM – 7:00 PM<br>Sunday: Closed",
    "ct.ft": "Send Us a Message",
    "ct.fn": "Your Name",
    "ct.fe": "Your Email",
    "ct.fp": "Your Phone",
    "ct.fs": "Select a Service",
    "ct.o1": "Hair Color",
    "ct.o2": "Highlights & Blonding",
    "ct.o3": "Haircut & Styling",
    "ct.o4": "Hair Treatments",
    "ct.o5": "Facials & Skincare",
    "ct.o6": "Lash Extensions",
    "ct.o7": "Other",
    "ct.fm": "Your Message",
    "ct.fb": "Send Message",

    // Newsletter
    "nl.title": "Your Best Look Awaits",
    "nl.sub": "Subscribe for exclusive deals, style tips, and salon news",
    "nl.ph": "Enter your email",
    "nl.btn": "Subscribe",

    // Mobile Nav
    "mnav.home": "Home",
    "mnav.svc": "Services",
    "mnav.gal": "Gallery",
    "mnav.team": "Team",
    "mnav.ct": "Contact",

    // Booking Toast
    "toast.title": "Book your appointment!",
    "toast.sub": "Tap here to schedule",

    // Footer
    "ft.desc": "Full Service Salon & Master Colorist. Elevating beauty in Woodside, Queens since day one.",
    "ft.quick": "Quick Links",
    "ft.about": "About",
    "ft.svc": "Services",
    "ft.gal": "Gallery",
    "ft.rev": "Reviews",
    "ft.ct": "Contact",
    "ft.svct": "Services",
    "ft.s1": "Hair Color",
    "ft.s2": "Highlights & Blonding",
    "ft.s3": "Cuts & Styling",
    "ft.s4": "Hair Treatments",
    "ft.s5": "Facials & Lashes",
    "ft.ctt": "Contact Info",
    "ft.hrs": "Mon–Sat: 10AM–7PM",
    "ft.copy": "\u00A9 2026 D'Franco Hair Salon NY. All rights reserved.",
    "ft.credit": "Created by <a href=\"https://erosdigitalteam.com\" target=\"_blank\" rel=\"noopener noreferrer\">Eros Digital Team</a>"
  };

  var translations = { en: en };

  // ---- Detect language ----
  function detectLanguage() {
    // 1. Check localStorage preference
    var saved = localStorage.getItem('dfLang');
    if (saved === 'en' || saved === 'es') return saved;

    // 2. Check browser language
    var browserLang = (navigator.language || navigator.userLanguage || 'es').toLowerCase();
    // If anything starting with "es" → Spanish, otherwise English
    return browserLang.startsWith('es') ? 'es' : 'en';
  }

  // ---- Apply translations ----
  function setLanguage(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('dfLang', lang);

    // Update toggle button display
    var flagEl = document.getElementById('langFlag');
    var codeEl = document.getElementById('langCode');
    if (flagEl) flagEl.textContent = lang === 'es' ? '🇺🇸' : '🇪🇸';
    if (codeEl) codeEl.textContent = lang === 'es' ? 'EN' : 'ES';

    if (lang === 'es') {
      // Spanish is the HTML default — restore original text from data attributes
      restoreSpanish();
      return;
    }

    // Apply English
    var dict = translations[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] === undefined) return;

      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = dict[key];
      } else if (el.tagName === 'OPTION') {
        el.textContent = dict[key];
      } else {
        el.textContent = dict[key];
      }
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.placeholder = dict[key];
    });
  }

  // ---- Save & restore original Spanish text ----
  var spanishCache = {};

  function cacheSpanish() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (el.getAttribute('data-i18n-html') === 'true') {
        spanishCache[key] = { html: el.innerHTML };
      } else if (el.tagName === 'OPTION') {
        spanishCache[key] = { text: el.textContent };
      } else {
        spanishCache[key] = { text: el.textContent };
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      spanishCache['_ph_' + key] = { placeholder: el.placeholder };
    });
  }

  function restoreSpanish() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var cached = spanishCache[key];
      if (!cached) return;
      if (cached.html !== undefined) {
        el.innerHTML = cached.html;
      } else {
        el.textContent = cached.text;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var cached = spanishCache['_ph_' + key];
      if (cached) el.placeholder = cached.placeholder;
    });
  }

  // ---- Init ----
  function init() {
    cacheSpanish();

    var lang = detectLanguage();
    setLanguage(lang);

    // Toggle button
    var toggleBtn = document.getElementById('langToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function () {
        var current = document.documentElement.lang || 'es';
        var next = current === 'es' ? 'en' : 'es';
        setLanguage(next);
      });
    }
  }

  // Run when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
