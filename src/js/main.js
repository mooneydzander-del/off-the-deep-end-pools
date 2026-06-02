/* ============================================================
   OFF THE DEEP END POOLS — MAIN JS
   ============================================================ */

'use strict';

/* ── Utilities ── */
const qs  = (sel, ctx = document) => ctx.querySelector(sel);
const qsa = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const on  = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);

/* ============================================================
   1. NAVIGATION — scroll class + mobile menu
   ============================================================ */
(function initNav() {
  const nav       = qs('.nav');
  const hamburger = qs('.nav-hamburger');
  const mobileMenu= qs('.nav-mobile');
  const mobileLinks = qsa('.nav-mobile a');

  // Scroll class
  const handleScroll = () => {
    nav && nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  on(window, 'scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile toggle
  on(hamburger, 'click', () => {
    const open = hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close on link click
  mobileLinks.forEach(link => {
    on(link, 'click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ESC key close
  on(document, 'keydown', e => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
})();

/* ============================================================
   2. SCROLL REVEAL — IntersectionObserver
   ============================================================ */
(function initReveal() {
  const pref = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (pref) return; // CSS handles reveal:none for reduced motion

  const items = qsa('[data-reveal]');
  if (!items.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  items.forEach(el => io.observe(el));
})();

/* ============================================================
   3. LAZY VIDEO — transformation video loaded only when near viewport
   ============================================================ */
(function initLazyVideo() {
  const videoWrap = qs('.js-lazy-video');
  if (!videoWrap) return;

  const pref = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const video = qs('video', videoWrap);
      if (!video) return;

      // Swap data-src → src for each source
      qsa('source', video).forEach(source => {
        if (source.dataset.src) {
          source.src = source.dataset.src;
          delete source.dataset.src;
        }
      });

      // Also handle direct src
      if (video.dataset.src) {
        video.src = video.dataset.src;
        delete video.dataset.src;
      }

      video.load();

      if (!pref) {
        video.play().catch(() => {
          // Autoplay blocked — poster is already visible
        });
      }

      io.unobserve(entry.target);
    });
  }, { rootMargin: '200px' });

  io.observe(videoWrap);
})();

/* ============================================================
   4. HERO VIDEO — prefers-reduced-motion guard
   ============================================================ */
(function initHeroVideo() {
  const pref = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const video = qs('.hero-video-wrap video');
  if (!video) return;

  if (pref) {
    video.pause();
    video.removeAttribute('autoplay');
    return;
  }

  video.play().catch(() => {
    // Autoplay blocked in some environments — poster shows
  });
})();

/* ============================================================
   5. FAQ ACCORDION — accessible with aria-expanded
   ============================================================ */
(function initFAQ() {
  const items = qsa('.faq-item');

  items.forEach(item => {
    const question = qs('.faq-question', item);
    const answer   = qs('.faq-answer', item);

    // Initialise aria-expanded
    if (question) question.setAttribute('aria-expanded', 'false');

    on(question, 'click', () => {
      const isOpen = item.classList.contains('open');

      // Close all items
      items.forEach(i => {
        i.classList.remove('open');
        const q = qs('.faq-question', i);
        const a = qs('.faq-answer', i);
        if (q) q.setAttribute('aria-expanded', 'false');
        if (a) a.style.maxHeight = null;
      });

      // Open clicked item if it was closed
      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });

    // Keyboard support
    on(question, 'keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });
})();

/* ============================================================
   6. QUOTE FORM — validation + shake + scroll + success state
   ============================================================ */
(function initQuoteForm() {
  const form    = qs('#quote-form');
  const success = qs('#form-success');
  if (!form) return;

  on(form, 'submit', e => {
    e.preventDefault();

    // Clear previous error states
    qsa('[required]', form).forEach(field => {
      field.style.borderColor = '';
      field.removeAttribute('aria-invalid');
    });

    // Validate required fields
    const required = qsa('[required]', form);
    let firstInvalid = null;
    let valid = true;

    required.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = 'rgba(220,80,80,0.6)';
        field.setAttribute('aria-invalid', 'true');
        if (!firstInvalid) firstInvalid = field;
        valid = false;
      }
    });

    if (!valid) {
      // Shake the form card to signal error
      const card = form.closest('.quote-card') || form;
      card.classList.remove('form-shake');
      // Force reflow so the animation re-triggers
      void card.offsetWidth;
      card.classList.add('form-shake');
      card.addEventListener('animationend', () => {
        card.classList.remove('form-shake');
      }, { once: true });

      // Scroll to the first invalid field
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalid.focus();
      }
      return;
    }

    // Collect lead data
    const data = {
      id:          crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36),
      timestamp:   new Date().toISOString(),
      source:      'quote-form',
      name:        form.name?.value?.trim()        || '',
      phone:       form.phone?.value?.trim()       || '',
      email:       form.email?.value?.trim()       || '',
      projectType: form['project-type']?.value     || '',
      city:        form.city?.value?.trim()        || '',
      message:     form.message?.value?.trim()     || '',
      status:      'new',
    };

    // ──────────────────────────────────────────────────────────
    // TODO: Replace localStorage with a real backend call.
    //
    // Example webhook / API call:
    //   fetch('https://your-backend.com/api/leads', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data),
    //   });
    //
    // Or send to Zapier / Make / n8n webhook:
    //   fetch('https://hooks.zapier.com/hooks/catch/XXXX/YYYY/', {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //   });
    //
    // Or post to Google Sheets via Apps Script:
    //   fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //   });
    // ──────────────────────────────────────────────────────────

    // Temporary: store locally
    try {
      const leads = JSON.parse(localStorage.getItem('otde_leads') || '[]');
      leads.push(data);
      localStorage.setItem('otde_leads', JSON.stringify(leads));
    } catch (_) {}

    // Show success state
    form.style.display = 'none';
    if (success) {
      success.classList.add('active');
      success.setAttribute('aria-live', 'polite');
      // Scroll success state into view
      success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  // Clear error highlight on input
  qsa('[required]', form).forEach(field => {
    on(field, 'input', () => {
      if (field.value.trim()) {
        field.style.borderColor = '';
        field.removeAttribute('aria-invalid');
      }
    });
  });
})();

/* ============================================================
   7. SMOOTH ANCHOR SCROLL (nav links)
   ============================================================ */
(function initAnchorScroll() {
  qsa('a[href^="#"]').forEach(link => {
    on(link, 'click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = 80; // nav height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ============================================================
   8. STICKY CTA BAR — smooth hide when quote form is visible
   ============================================================ */
(function initStickyBar() {
  const bar  = qs('.sticky-cta-bar');
  const form = qs('#quote-form-section');
  if (!bar || !form) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      // Toggle .is-hidden class so CSS transition plays (not display:none)
      bar.classList.toggle('is-hidden', entry.isIntersecting);
    });
  }, { threshold: 0.1 });

  io.observe(form);
})();

/* ============================================================
   9. CINEMATIC UPGRADES (Scroll Progress, Cursor, Mouse Tracking)
   ============================================================ */
(function initCinematicEffects() {
  // Scroll Progress
  const updateScroll = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = winHeightPx > 0 ? `${(scrollPx / winHeightPx) * 100}%` : '0%';
    document.documentElement.style.setProperty('--scroll', scrolled);
  };
  on(window, 'scroll', updateScroll, { passive: true });
  updateScroll();

  // Glassmorphism Mouse Tracking
  const cards = qsa('.service-card, .testi-card, .objection-card, .quote-card');
  cards.forEach(card => {
    on(card, 'mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // Custom Cursor
  const dot = qs('.cursor-dot');
  const ring = qs('.cursor-ring');
  if (dot && ring) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    on(window, 'mousemove', e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot moves instantly
      dot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
    });

    // Smooth inertia loop for ring
    const render = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%))`;
      requestAnimationFrame(render);
    };
    requestAnimationFrame(render);

    // Hover states for interactive elements
    const interactives = qsa('a, button, .showcase-card, input, textarea, select, .faq-question');
    interactives.forEach(el => {
      on(el, 'mouseenter', () => document.body.classList.add('cursor-hover'));
      on(el, 'mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
  }
})();
