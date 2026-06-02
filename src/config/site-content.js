/**
 * ============================================================
 * SITE CONTENT CONFIG — Pool Contractor Landing Page Template
 * ============================================================
 *
 * HOW TO USE THIS FILE:
 * ─────────────────────
 * This file is the single source of truth for all client-specific
 * content on this landing page. When cloning this page for a new
 * pool contractor client:
 *
 *   1. Copy the entire project folder to a new directory
 *   2. Update EVERY value in this config below
 *   3. Replace placeholder images and videos with client media
 *   4. Connect the quote form to the client's backend / CRM
 *   5. Deploy on Vercel (or any static host)
 *
 * This file is a reference map and documentation tool.
 * The rendered HTML is in index.html — look for <!-- CLIENT SWAP -->
 * comments to find each section that maps to the keys below.
 *
 * ============================================================
 */

const SITE_CONFIG = {

  /* ── BRAND ── */
  brand: {
    name:        'Off The Deep End',          // CLIENT SWAP: business name
    tagline:     'Pool Design & Renovation',  // CLIENT SWAP: tagline under logo
    description: 'Premium pool design, renovation, and transformation for homeowners who want a backyard they\'re proud of.', // CLIENT SWAP: footer description
    phone:       '',     // CLIENT SWAP: phone number (add to nav/footer when available)
    email:       '',     // CLIENT SWAP: contact email
    serviceArea: '',     // CLIENT SWAP: city / region
  },

  /* ── SEO ── */
  seo: {
    title:       'Off The Deep End Pools — Resort-Style Backyard Pool Design & Renovation',
    description: 'From custom builds to complete renovations. Turn your backyard into the deep end of luxury. Free quote.',
    ogImage:     '/images/pool-hero-v2-poster.jpg',
  },

  /* ── MEDIA ── */
  media: {
    heroVideo:        '/videos/pool-hero-v2.mp4',          // CLIENT SWAP: hero video
    heroPoster:       '/images/pool-hero-v2-poster.jpg',   // CLIENT SWAP: hero poster (first-frame still)
    transformVideo:   '/videos/dirty-pool-to-clean-transformation.mp4', // CLIENT SWAP: transformation video
    transformPoster:  '/images/dirty-pool-to-clean-poster.jpg',
    // PROJECT SHOWCASE IMAGES — CLIENT SWAP for each client:
    projectImages: [
      '/images/project-1-resort-pool.png',
      '/images/project-2-renovation.png',
      '/images/project-3-resurfacing.png',
      '/images/project-4-outdoor-living.png',
      '/images/project-5-deep-clean.png',
    ],
  },

  /* ── HERO ── */
  hero: {
    eyebrow:   'Premium Pool Design & Renovation', // CLIENT SWAP: small label above headline
    headline:  'Your Backyard Deserves to Feel Like the Deep End of Luxury.', // CLIENT SWAP
    paragraph: 'Off The Deep End Pools helps homeowners create crystal-clear, resort-style pools and backyard escapes built for relaxing, entertaining, and making memories that last all summer long.', // CLIENT SWAP
    ctaPrimary:   'Get a Free Quote',        // CLIENT SWAP: primary button label
    ctaSecondary: 'See a Transformation',   // CLIENT SWAP: secondary button label
  },

  /* ── TRUST STRIP (5 items) ── */
  // CLIENT SWAP: update all 5 trust items per client
  trustStrip: [
    { strong: 'Licensed & Insured',          small: 'Work backed by full coverage' },
    { strong: 'Free Quote Request',           small: 'No commitment, no pressure' },
    { strong: 'Clear Timeline',              small: 'Confirmed before work starts' },
    { strong: 'Local Pool Experts',          small: 'Your neighborhood, your backyard' },
    { strong: 'No-Pressure Consultation',    small: 'We advise, you decide' },
  ],

  /* ── PROBLEM / DESIRE ── */
  problem: {
    eyebrow:    'Sound Familiar?',
    heading:    'Your Pool Should Be a Place You\'re Proud Of.',
    body:       'A neglected, outdated, or uninviting pool doesn\'t just look bad — it keeps you from enjoying the backyard you\'ve worked hard for. You deserve a space that feels clean, clear, and genuinely resort-worthy.',
    // CLIENT SWAP: pain points list
    pains: [
      'Your pool looks dated, dingy, or completely neglected',
      'You\'re not using your backyard the way you should be',
      'You\'re not sure where to start or who to actually trust',
      'You worry about cost surprises, delays, and the wrong contractor',
    ],
    // Desire card
    quote:     '"I just want a pool my family actually wants to use — something clean, beautiful, and worth showing off."',
    desire:    'That\'s exactly what we build. A backyard escape designed around your life — where summer feels longer, weekends feel better, and guests never want to leave.',
    ctaLabel:  'Start With a Free Quote',
  },

  /* ── TRANSFORMATION ── */
  transformation: {
    eyebrow:  'Pool Transformation',
    heading:  'From Murky to Magazine-Worthy.',
    body:     'A dirty, cloudy, or forgotten pool doesn\'t just look bad — it makes your whole backyard feel abandoned. Watch what\'s possible when the right team brings it back to life.',
    urgency:  'Don\'t let another summer pass with a pool you don\'t want to use.',
    // CLIENT SWAP: benefits list
    benefits: [
      'Bring cloudy, neglected pools back to crystal-clear life',
      'Refresh the entire look and feel of your backyard',
      'Make your pool guest-ready and genuinely inviting',
      'Create a space your whole family actually wants to use every day',
    ],
  },

  /* ── SERVICES (6 cards) ── */
  // CLIENT SWAP: update all 6 service cards per client
  services: [
    {
      title:   'Custom Pool Design',
      desc:    'Every backyard is different. We design a pool that fits your space, your style, and your budget — from first sketch to final tile.',
      outcome: 'A pool that feels uniquely yours',
    },
    {
      title:   'Pool Installation',
      desc:    'Full-scale new pool builds — from excavation to water. We handle every step so you show up at the finish line to a stunning result.',
      outcome: 'Your brand-new backyard centerpiece',
    },
    {
      title:   'Pool Renovation',
      desc:    'An old pool isn\'t a lost cause. We renovate from the inside out — new finishes, updated features, and a completely fresh look.',
      outcome: 'Your old pool, completely reimagined',
    },
    {
      title:   'Resurfacing & Upgrades',
      desc:    'Chipped plaster, faded tiles, outdated finishes? We resurface and upgrade pools to look brand new — without full replacement costs.',
      outcome: 'That brand-new pool look, for less',
    },
    {
      title:   'Pool Cleaning & Refresh',
      desc:    'From cloudy green water to sparkling clarity — we deep-clean and refresh pools so they\'re swim-ready, guest-ready, and something to be proud of.',
      outcome: 'Crystal-clear water you can\'t wait to dive into',
    },
    {
      title:   'Outdoor Living',
      desc:    'Decks, lounges, lighting, landscaping — we help build the full backyard experience around your pool so it feels like a true destination.',
      outcome: 'A complete resort escape, right at home',
    },
  ],

  /* ── WHY CHOOSE US (4 points) ── */
  // CLIENT SWAP: update why-points and stats per client
  whyUs: {
    heading: 'Built Around Your Backyard Vision.',
    points: [
      {
        title: 'Vision-Centered Design',
        desc:  'We listen first. Every project starts with understanding what you want your backyard to feel like — not just what your pool looks like.',
      },
      {
        title: 'Clear Communication',
        desc:  'No surprises. From quote to completion, you always know where the project stands, what\'s next, and what it costs.',
      },
      {
        title: 'Premium Results',
        desc:  'We don\'t cut corners. Every finish, every edge, every detail is held to a standard that makes your backyard look like a magazine spread.',
      },
      {
        title: 'Local Experts You Can Trust',
        desc:  'We\'re a local team that takes pride in every job. Your project isn\'t a transaction — it\'s a transformation we\'re proud to put our name on.',
      },
    ],
    stats: [
      { number: '100%', label: 'Satisfaction Focused', featured: true },
      { number: '5★',  label: 'Avg. Review' },
      { number: 'Fast', label: 'Quote Process' },
    ],
  },

  /* ── PROCESS (5 steps) ── */
  // CLIENT SWAP: update step titles and descriptions per client
  process: [
    { num: 1, title: 'Request a Quote',  desc: 'Fill out a quick form — takes less than 2 minutes. No commitment, no pressure.' },
    { num: 2, title: 'Share Your Vision', desc: 'Tell us about your backyard and what you want it to feel like. We listen carefully.' },
    { num: 3, title: 'Get a Clear Plan', desc: 'We put together an honest plan and quote — no vague numbers or hidden costs.' },
    { num: 4, title: 'Watch It Happen',  desc: 'Our team gets to work. We keep you updated so you always know what\'s happening.' },
    { num: 5, title: 'Enjoy Your Escape', desc: 'Dive in. Host friends. Relax all summer. This is the backyard you\'ve always wanted.' },
  ],

  /* ── PROJECT SHOWCASE (5 cards) ── */
  // CLIENT SWAP: replace placeholder images and update titles/tags per client
  showcase: [
    { tag: 'Custom Build',    title: 'Resort-Style Pool Installation',    image: null /* add: /public/images/project-1.jpg */ },
    { tag: 'Renovation',      title: 'Complete Pool Renovation',          image: null /* add: /public/images/project-2.jpg */ },
    { tag: 'Resurfacing',     title: 'Plaster & Tile Refresh',            image: null /* add: /public/images/project-3.jpg */ },
    { tag: 'Outdoor Living',  title: 'Full Backyard Transformation',      image: null /* add: /public/images/project-4.jpg */ },
    { tag: 'Deep Clean',      title: 'Green to Crystal Clear',            image: null /* add: /public/images/project-5.jpg */ },
  ],

  /* ── TESTIMONIALS (3 cards) ── */
  // CLIENT SWAP: replace with verified real reviews per client
  testimonials: [
    {
      projectTag: 'Pool Renovation',
      initials:   'MR',
      name:       'Mike & Rachel T.',
      location:   'Homeowners — Pool Renovation',
      quote:      '"Our pool was an embarrassment — algae, cracked plaster, the whole thing. Off The Deep End completely transformed it. Now we use the pool every weekend. It looks like something out of a luxury resort."',
    },
    {
      projectTag: 'New Pool Build',
      initials:   'JL',
      name:       'Jennifer L.',
      location:   'Homeowner — New Pool Build',
      quote:      '"I was nervous about hiring a contractor. These guys were transparent from day one — the quote was clear, the timeline was honest, and the end result blew us away. Couldn\'t be happier with our new pool."',
    },
    {
      projectTag: 'Pool Refresh',
      initials:   'DK',
      name:       'David K.',
      location:   'Homeowner — Pool Refresh',
      quote:      '"We had a completely neglected pool for years — green water, broken tiles, the works. Off The Deep End did a full refresh and now our whole backyard feels different. It\'s like getting a brand-new house."',
    },
  ],

  /* ── OBJECTIONS (4 cards) ── */
  // CLIENT SWAP: update objection cards per client
  objections: [
    {
      question: '"I don\'t know what my pool actually needs."',
      answer:   'That\'s completely normal. We figure it out with you — just describe what you\'re seeing or what you want, and we\'ll help identify the right solution from there.',
    },
    {
      question: '"I\'m worried about hidden costs."',
      answer:   'We lay out every cost clearly before any work begins. No surprise invoices, no vague line items. You\'ll always know exactly what you\'re paying for.',
    },
    {
      question: '"I don\'t know if I need renovation or replacement."',
      answer:   'We assess your pool honestly and recommend what actually makes sense — not what costs the most. Sometimes a refresh is all you need. We\'ll tell you the truth.',
    },
    {
      question: '"I don\'t want to deal with a stressful contractor."',
      answer:   'Neither do we. We keep you updated, respond fast, and make the whole process as hands-off and stress-free as possible from day one to done.',
    },
  ],

  /* ── FAQ (6 items) ── */
  // CLIENT SWAP: update FAQ questions and answers per client
  faq: [
    {
      question: 'How do I get a quote?',
      answer:   'Fill out the quick quote form below — takes less than 2 minutes. Tell us your name, contact info, what type of project you\'re thinking about, and your location. We\'ll follow up fast to talk through the details.',
    },
    {
      question: 'Do you handle pool renovations or just new builds?',
      answer:   'Both. We specialize in full new pool builds and complete renovations. Whether you have an old pool that needs updating or you want to start from scratch, we can help.',
    },
    {
      question: 'Can you help with a dirty, green, or neglected pool?',
      answer:   'Absolutely — that\'s one of our favorite projects. We take pools that have been abandoned, neglected, or just fallen apart and bring them back to life. We\'ve seen worse than yours, and we\'ve fixed it.',
    },
    {
      question: 'How long does the process take?',
      answer:   'It depends on the project. A cleaning or refresh can happen quickly. Renovations typically take a few weeks. New pool builds depend on size and complexity. We\'ll give you a realistic, honest timeline in your quote — no inflated estimates.',
    },
    {
      question: 'Do I need to know exactly what I want before requesting a quote?',
      answer:   'Not at all. Many homeowners come to us with just a general feeling — "my pool is embarrassing" or "I want my backyard to feel better." That\'s totally fine. We ask the right questions and help you figure out what makes the most sense.',
    },
    {
      question: 'Is the quote request free? Any obligation?',
      answer:   '100% free, zero obligation. Requesting a quote just starts a conversation. You\'re not committing to anything — just taking the first step toward a backyard you love. We\'re here to help you make a smart decision, not pressure you into anything.',
    },
  ],

  /* ── QUOTE FORM ── */
  // CLIENT SWAP: update project type options and form heading per client
  quoteForm: {
    heading:    'Tell Us About Your Pool Project.',
    subheading: 'Fill out the quick form and we\'ll follow up to discuss your project, answer questions, and put together a clear, honest quote — no fluff, no pressure.',
    projectTypes: [
      { value: 'new-pool',         label: 'New Pool Build' },
      { value: 'renovation',       label: 'Pool Renovation' },
      { value: 'resurfacing',      label: 'Resurfacing / Upgrades' },
      { value: 'cleaning-refresh', label: 'Pool Cleaning / Refresh' },
      { value: 'outdoor-living',   label: 'Outdoor Living / Poolside' },
      { value: 'not-sure',         label: 'Not Sure Yet' },
    ],
  },

  /* ── FINAL CTA ── */
  // CLIENT SWAP: update final CTA copy per client
  finalCta: {
    eyebrow:   'Ready When You Are',
    heading:   'Ready to Go Off The Deep End?',
    paragraph: 'Your backyard should be a place you\'re genuinely proud of — somewhere you actually want to spend your summer. Request a quote and take the first step toward a cleaner, brighter, more beautiful pool space.',
    ctaLabel:  'Get a Free Quote',
  },

};

// Export for use in other scripts (if needed)
if (typeof module !== 'undefined') module.exports = SITE_CONFIG;
