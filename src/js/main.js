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
   5. FAQ ACCORDION
   ============================================================ */
(function initFAQ() {
  const items = qsa('.faq-item');
  items.forEach(item => {
    const question = qs('.faq-question', item);
    const answer   = qs('.faq-answer', item);

    on(question, 'click', () => {
      const isOpen = item.classList.contains('open');

      // Close all
      items.forEach(i => {
        i.classList.remove('open');
        qs('.faq-answer', i).style.maxHeight = null;
      });

      // Open clicked
      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });

    // Keyboard
    on(question, 'keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });
})();

/* ============================================================
   6. QUOTE FORM — validation + success state
   ============================================================ */
(function initQuoteForm() {
  const form    = qs('#quote-form');
  const success = qs('#form-success');
  if (!form) return;

  on(form, 'submit', e => {
    e.preventDefault();

    // Basic validation
    const required = qsa('[required]', form);
    let valid = true;
    required.forEach(field => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = 'rgba(220,80,80,0.6)';
        valid = false;
      }
    });
    if (!valid) return;

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

    // Show success
    form.style.display = 'none';
    if (success) {
      success.classList.add('active');
      success.setAttribute('aria-live', 'polite');
    }
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
   8. STICKY CTA BAR — hide after form is in view
   ============================================================ */
(function initStickyBar() {
  const bar  = qs('.sticky-cta-bar');
  const form = qs('#quote-form-section');
  if (!bar || !form) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      bar.style.display = e.isIntersecting ? 'none' : '';
    });
  }, { threshold: 0.1 });

  io.observe(form);
})();
