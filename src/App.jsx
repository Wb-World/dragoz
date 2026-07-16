import React, { useState, useCallback } from 'react';

// Official Dragon Logo component loading the uploaded image.png
const DragozLogo = ({ size = 32 }) => (
  <img 
    src="/logo.png" 
    alt="Dragoz Logo" 
    style={{ width: size, height: size, objectFit: 'contain', display: 'inline-block', verticalAlign: 'middle' }} 
  />
);

// ── SVG Social Icons ───────────────────────────────────────────────────────────
const IconYouTube = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const IconInstagram = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const IconX = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const IconWhatsApp = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const IconDiscord = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.044.032.054a19.9 19.9 0 0 0 5.993 3.03.077.077 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const IconGlobe = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

// ── DATA ──────────────────────────────────────────────────────────────────────

const CORE_PILLARS = [
  {
    title: 'Cyber Security',
    desc: 'Tools, research, and practices that come straight from practitioners defending real systems.'
  },
  {
    title: 'Artificial Intelligence',
    desc: 'Practical AI tooling and automation, not hype.'
  },
  {
    title: 'Tech Product Development',
    desc: 'Turning practitioner know-how into real, usable hardware and software products.'
  },
  {
    title: 'IoT Hardware',
    desc: 'Internet of Things gadgets and embedded hardware built and tested in real environments by engineers.'
  }
];

const WHY_DRAGOZ = [
  {
    title: 'Built by engineers, not marketers',
    desc: 'Every product ships only after real-world testing.'
  },
  {
    title: 'Documentation first',
    desc: 'Clear setup guides, specs, and troubleshooting for every tool.'
  },
  {
    title: 'Community backed',
    desc: 'Supported by a growing open-source, nonprofit community of creators, ethical hackers, and AI builders.'
  },
  {
    title: 'Transparent',
    desc: 'Honest specs, honest pricing, no dark patterns.'
  }
];

const WHAT_WE_DO = [
  { title: 'Cyber Security', desc: 'Practitioner-built security tools, research, and resources drawn from real-world defense and offense work.' },
  { title: 'AI Development', desc: 'Practical, tested AI tooling and automation built for creators and engineers, not hype.' },
  { title: 'Tech Product Development', desc: 'Hardware and software products designed around real-world use cases, from concept to shelf.' },
  { title: 'Documentation and Guides', desc: 'In-depth setup docs, API references, and troubleshooting resources for every product.' },
  { title: 'Open Source and Nonprofit Community', desc: 'The Drago Community operates as a nonprofit, open-source initiative, giving builders free access to tools, research, and collaboration space.' }
];

const VALUES = [
  { name: 'Practitioner-Led', definition: 'Built by people who use the tools themselves, not just sell them.' },
  { name: 'Transparency', definition: 'Clear specs, clear pricing, clear documentation. No surprises.' },
  { name: 'Community-First', definition: 'We grow through an open-source, nonprofit community. Not ad spend.' },
  { name: 'Security by Default', definition: 'Every product is engineered with cybersecurity best practices baked in.' },
  { name: 'AI with Purpose', definition: 'AI is applied where it genuinely saves time or improves security. Not bolted on for buzz.' }
];

const SOCIAL_LINKS = [
  {
    label: 'YouTube — @TheCyberJai',
    url: 'https://www.youtube.com/@TheCyberJai',
    icon: <IconYouTube />,
    colorClass: 'social-btn-youtube'
  },
  {
    label: 'Instagram — @thecyberjai',
    url: 'https://www.instagram.com/thecyberjai',
    icon: <IconInstagram />,
    colorClass: 'social-btn-instagram'
  },
  {
    label: 'Cyber Voyage — YouTube',
    url: 'https://www.youtube.com/@cyber_voyage',
    icon: <IconYouTube />,
    colorClass: 'social-btn-youtube'
  },
  {
    label: 'X — @Dragothetool',
    url: 'https://x.com/Dragothetool',
    icon: <IconX />,
    colorClass: 'social-btn-x'
  },
  {
    label: 'WhatsApp Channel',
    url: 'https://chat.whatsapp.com/JmtUdMv4rdN6j9uQeXrnLN',
    icon: <IconWhatsApp />,
    colorClass: 'social-btn-whatsapp'
  },
  {
    label: 'Discord Community',
    url: 'https://discord.gg/YMDG4xBYmp',
    icon: <IconDiscord />,
    colorClass: 'social-btn-discord'
  },
  {
    label: 'Founder Portfolio — cyberjai.co.in',
    url: 'https://www.cyberjai.co.in/',
    icon: <IconGlobe />,
    colorClass: 'social-btn-portfolio'
  }
];

// ── Input sanitization helper ──────────────────────────────────────────────────
function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

function isValidEmail(email) {
  // RFC 5322 simplified regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── COMPONENT ─────────────────────────────────────────────────────────────────

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', type: '', message: '' });
  const [contactFeedback, setContactFeedback] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterFeedback, setNewsletterFeedback] = useState('');

  const handleContactChange = useCallback((field, value) => {
    // Limit field lengths to prevent abuse
    const maxLengths = { name: 100, email: 254, type: 50, message: 2000 };
    const trimmed = value.slice(0, maxLengths[field] ?? 500);
    setContactForm(prev => ({ ...prev, [field]: trimmed }));
  }, []);

  const handleContactSubmit = useCallback((e) => {
    e.preventDefault();

    // Validation
    const name = contactForm.name.trim();
    const email = contactForm.email.trim();
    const message = contactForm.message.trim();

    if (!name || !email || !message) {
      setContactFeedback('Error: All required fields must be filled out.');
      return;
    }
    if (!isValidEmail(email)) {
      setContactFeedback('Error: Please enter a valid email address.');
      return;
    }
    if (message.length < 10) {
      setContactFeedback('Error: Please provide a more detailed message.');
      return;
    }

    setContactFeedback('Submitting requirements...');
    setTimeout(() => {
      setContactFeedback('Your inquiry has been sent to Secure Worldz. We respond within 24 business hours.');
      setContactForm({ name: '', email: '', type: '', message: '' });
    }, 1000);
  }, [contactForm]);

  const handleNewsletterSubmit = useCallback((e) => {
    e.preventDefault();
    const email = newsletterEmail.trim();
    if (!email) return;
    if (!isValidEmail(email)) {
      setNewsletterFeedback('Please enter a valid email address.');
      return;
    }
    setNewsletterFeedback('Subscribing...');
    setTimeout(() => {
      setNewsletterFeedback('Welcome to Dragoz updates!');
      setNewsletterEmail('');
    }, 1000);
  }, [newsletterEmail]);

  return (
    <div>

      {/* ===== NAVBAR ===== */}
      <header className="nav-bar">
        <div className="container nav-container">
          <a href="#" className="logo-wrap" aria-label="Dragoz Home">
            <div className="logo-badge">
              <DragozLogo size={20} />
            </div>
            <span style={{ letterSpacing: '0.05em' }}>DRAGOZ</span>
          </a>

          <nav className={`nav-links-wrap ${mobileMenuOpen ? 'active' : ''}`} aria-label="Main navigation">
            <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a>
            <a href="#pillars" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Our Focus</a>
            <a href="#story" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Story</a>
            <a href="#founder" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Founder</a>
            <a href="#community" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Sponsors</a>
            <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="#contact" className="neo-btn neo-btn-sm neo-btn-primary" onClick={() => setMobileMenuOpen(false)}>GET STARTED</a>
          </nav>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
            aria-controls="main-nav"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* ===== HERO ===== */}
      <section className="section" id="hero" style={{ background: 'var(--color-bg)' }}>
        <div className="container hero-layout">
          <div className="hero-content-left">
            <div className="neo-box-accent" style={{ marginBottom: '1.5rem', backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}>
              Powered by Secure Worldz
            </div>

            <h1 className="hero-main-title">
              Dragoz. Real Tools,<br />
              Built by <span style={{ background: 'var(--color-black)', color: 'var(--color-white)', padding: '0 8px', display: 'inline-block' }}>Practitioners</span>
            </h1>

            <p className="hero-main-subtitle">
              Dragoz is a marketplace and knowledge hub for real tech products. IoT gadgets, security tools, and hardware built and vetted by engineers who actually use this stuff every day. No filler, no hype. Just tools that work.
            </p>

            <div className="hero-ctas">
              <a href="#pillars" className="neo-btn neo-btn-primary">Explore Products</a>
              <a href="#founder" className="neo-btn neo-btn-black">Meet Our Founder</a>
            </div>
          </div>

          <div className="hero-visual-right">
            <div className="hero-visual-box">
              <div className="visual-header">
                <div className="visual-dots">
                  <span className="visual-dot red"></span>
                  <span className="visual-dot yellow"></span>
                  <span className="visual-dot green"></span>
                </div>
                <div className="visual-title">dragoz terminal</div>
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: '1.8', color: 'var(--color-black)' }}>
                <p style={{ color: '#666666' }}># Initializing Dragoz environment...</p>
                <p><span style={{ color: 'var(--color-accent)' }}>$</span> dragoz init practitioner</p>
                <p style={{ color: 'var(--color-accent)' }}>[OK] Loaded Cybersecurity toolkits</p>
                <p style={{ color: 'var(--color-accent)' }}>[OK] Loaded Practical AI configurations</p>
                <p style={{ color: 'var(--color-accent)' }}>[OK] Loaded IoT Hardware definitions</p>
                <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>[STATUS] Built by engineers. Ready.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS DRAGOZ ===== */}
      <section className="section" id="about" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="story-layout">
            <div>
              <div className="neo-box-accent" style={{ marginBottom: '1.25rem' }}>01. Overview</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1.5rem' }}>What is Dragoz?</h2>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#333333', marginBottom: '1.5rem' }}>
                Dragoz is a marketplace and documentation hub for tools built by practitioners, for practitioners. Every product featured here is designed, tested, and refined by people working hands-on in cybersecurity, AI, and hardware engineering — not by marketing teams guessing what builders need.
              </p>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#333333', marginBottom: '1.5rem' }}>
                Beyond a platform, Dragoz is focused on product development and student growth, helping creators and learners build real world solutions and gain practical experience through technology.
              </p>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#333333' }}>
                Dragoz is proudly powered by <strong>Secure Worldz</strong>, a multi-domain tech and security company offering cybersecurity services, web and app development, AI development, and training through Proworldz Academy.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="neo-card" style={{ padding: '2rem' }}>
                <h3 style={{ textTransform: 'uppercase', marginBottom: '0.5rem' }}>Vetted by Engineers</h3>
                <p style={{ color: '#555555', fontSize: '0.95rem' }}>Every hardware and software product ships only after hands-on verification.</p>
              </div>
              <div className="neo-card" style={{ padding: '2rem' }}>
                <h3 style={{ textTransform: 'uppercase', marginBottom: '0.5rem' }}>Documentation First</h3>
                <p style={{ color: '#555555', fontSize: '0.95rem' }}>Setup logs, pin layouts, and schemas. No guessing how something operates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR FOCUS ===== */}
      <section className="section" id="pillars" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="neo-box-accent" style={{ marginBottom: '1rem' }}>02. Core Pillars</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>Our Focus</h2>
          </div>

          <div className="pillars-container">
            {CORE_PILLARS.map((pillar, i) => (
              <div key={i} className="pillar-item-card">
                <h3 className="pillar-title-text">{pillar.title}</h3>
                <p style={{ color: '#444444', lineHeight: '1.6' }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY DRAGOZ ===== */}
      <section className="section" id="why" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="neo-box-accent" style={{ marginBottom: '1rem', background: 'var(--color-accent)', color: 'var(--color-white)' }}>03. Selection</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>Why Dragoz</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {WHY_DRAGOZ.map((item, i) => (
              <div key={i} className="neo-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: '#444444', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUICK LINKS ===== */}
      <section className="section" id="quicklinks" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="neo-box-accent" style={{ marginBottom: '1rem' }}>04. Navigation Map</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>Quick Links</h2>
          </div>

          <div className="quicklinks-grid-wrap">
            <a href="#pillars" className="quicklink-item-card">
              <div className="quicklink-header">
                <span className="quicklink-category">PRODUCTS</span>
                <span className="quicklink-arrow">&rarr;</span>
              </div>
              <div className="quicklink-body">
                <h3 className="quicklink-title-text">Product Focus</h3>
                <p className="quicklink-desc">Browse our hardware, IoT, and security lines.</p>
              </div>
            </a>

            <a href="#about" className="quicklink-item-card">
              <div className="quicklink-header">
                <span className="quicklink-category">COMMUNITY</span>
                <span className="quicklink-arrow">&rarr;</span>
              </div>
              <div className="quicklink-body">
                <h3 className="quicklink-title-text">Drago Community</h3>
                <p className="quicklink-desc">Our nonprofit developer and hacker forum.</p>
              </div>
            </a>

            <a href="#community" className="quicklink-item-card">
              <div className="quicklink-header">
                <span className="quicklink-category">PARTNERS</span>
                <span className="quicklink-arrow">&rarr;</span>
              </div>
              <div className="quicklink-body">
                <h3 className="quicklink-title-text">Sponsors &amp; Partner Network</h3>
                <p className="quicklink-desc">Explore sponsorships like Cyber Voyage.</p>
              </div>
            </a>

            <a href="#story" className="quicklink-item-card">
              <div className="quicklink-header">
                <span className="quicklink-category">ABOUT</span>
                <span className="quicklink-arrow">&rarr;</span>
              </div>
              <div className="quicklink-body">
                <h3 className="quicklink-title-text">About Us</h3>
                <p className="quicklink-desc">The story and values driving Secure Worldz.</p>
              </div>
            </a>

            <a href="#contact" className="quicklink-item-card">
              <div className="quicklink-header">
                <span className="quicklink-category">CONTACT</span>
                <span className="quicklink-arrow">&rarr;</span>
              </div>
              <div className="quicklink-body">
                <h3 className="quicklink-title-text">Contact Us</h3>
                <p className="quicklink-desc">Send us your requirements or get support.</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="section" id="story" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="story-layout" style={{ marginBottom: '5rem' }}>
            <div>
              <div className="neo-box-accent" style={{ marginBottom: '1.25rem' }}>05. Background</div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1.5rem' }}>Our Story</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333333', marginBottom: '1.5rem' }}>
                Dragoz started as a simple idea: the best tech products are not designed in boardrooms. They are built by the people who actually break, fix, and rebuild systems for a living. What began as an internal toolkit for practitioners grew into a full marketplace and documentation platform for real, practitioner-built tech.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333333' }}>
                We are part of the <strong>Secure Worldz</strong> family, alongside Proworldz Academy, giving Dragoz direct access to a deep bench of security engineers, red teamers, developers, and AI builders. The same people who create and stress-test every product we release.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="neo-card" style={{ padding: '2.25rem' }}>
                <h3 style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>Our Mission</h3>
                <p style={{ color: '#444444', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  To put honest, well-documented, practitioner-tested tools into the hands of creators, engineers, and hobbyists. Backed by documentation good enough that you never have to guess how something works.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '5rem' }}>
            <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', marginBottom: '1.5rem' }}>What We Do</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              {WHAT_WE_DO.map((item, i) => (
                <div key={i} className="neo-card" style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ color: '#555555', fontSize: '0.9rem', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="neo-card" style={{ padding: '3rem', marginBottom: '5rem' }}>
            <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '1rem' }}>Drago Community. Open Source and Nonprofit</h3>
            <p style={{ fontSize: '1.1rem', color: '#333333', lineHeight: '1.6', marginBottom: '2rem' }}>
              The Drago Community is the nonprofit, open-source arm behind Dragoz. It exists to give cybersecurity researchers, AI builders, and product engineers a free, collaborative space to build, share, and learn. Separate from the commercial side of the business.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem', fontWeight: '700' }}>
              <li>Open-source first. Tools, research, and resources shared openly wherever possible.</li>
              <li>Nonprofit driven. The community is not run for profit; it exists to grow practitioner talent.</li>
              <li>Open collaboration. Anyone working in cybersecurity or AI can contribute or join.</li>
            </ul>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="neo-btn neo-btn-primary">Join the Drago Community</a>
              <a href="#" className="neo-btn">View Open Source Projects</a>
              <a href="#" className="neo-btn neo-btn-black">Contribute</a>
            </div>
          </div>

          <div className="values-table-wrap">
            <h3 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', marginBottom: '1.5rem' }}>Our Values</h3>
            <table className="values-table">
              <thead>
                <tr>
                  <th>Value</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                {VALUES.map((val, i) => (
                  <tr key={i}>
                    <td style={{ fontWeight: '800' }}>{val.name}</td>
                    <td style={{ color: '#333333' }}>{val.definition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== MEET OUR FOUNDER ===== */}
      <section className="section" id="founder" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="neo-box-accent" style={{ marginBottom: '1.5rem', backgroundColor: 'var(--color-accent)', color: 'var(--color-white)' }}>
            06. Leadership
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3rem' }}>Meet Our Founder</h2>

          <div className="founder-layout-card">
            <div className="founder-img-wrapper">
              <img src="/jai.png" alt="Jaiganesh Lakshmanan" className="founder-img" />
            </div>
            <div>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '0.25rem' }}>Jaiganesh Lakshmanan</h3>
              <p style={{ color: 'var(--color-accent)', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Founder and CEO, Secure Worldz | Founder, Drago and Proworldz
              </p>

              <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#333333' }}>
                With over 6 years of experience in technology and cybersecurity, Jaiganesh Lakshmanan has worked with Fortune 10+ companies to strengthen their security infrastructure. He is the founder of both <strong>Drago</strong> (the Dragoz product line) and <strong>Proworldz Academy</strong>, and has personally trained over 1,000 students across cybersecurity, ethical hacking, AI development, and business growth.
              </p>

              <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#333333', marginTop: '1rem' }}>
                Jaiganesh specializes in vulnerability assessment and penetration testing, having discovered critical security flaws in major financial institutions. He is also a technology speaker, ethical hacker, AI developer, and business growth speaker.
              </p>

              <br />
              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="neo-box-accent" style={{ background: '#fff', color: '#000' }}>Technology Speaker</span>
                  <span className="neo-box-accent" style={{ background: '#fff', color: '#000' }}>Ethical Hacker</span>
                  <span className="neo-box-accent" style={{ background: '#fff', color: '#000' }}>AI Developer</span>
                  <span className="neo-box-accent" style={{ background: '#fff', color: '#000' }}>Business Growth Speaker</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a href="https://www.cyberjai.co.in/" target="_blank" rel="noopener noreferrer" className="neo-btn neo-btn-sm neo-btn-primary">View Founder Portfolio</a>
                <a href="https://www.instagram.com/thecyberjai" target="_blank" rel="noopener noreferrer" className="neo-btn neo-btn-sm">Connect on Instagram</a>
                <a href="https://www.youtube.com/@TheCyberJai" target="_blank" rel="noopener noreferrer" className="neo-btn neo-btn-sm neo-btn-black">Connect on YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPONSORS & PARTNERS ===== */}
      <section className="section" id="community" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="neo-box-accent" style={{ marginBottom: '1rem' }}>07. Sponsors</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>Sponsors and Partner Network</h2>
            <p style={{ color: '#555555', marginTop: '0.75rem', fontSize: '1.05rem', lineHeight: '1.5' }}>
              Dragoz exists because of the builders, creators, and security practitioners who test our tools, share feedback, and help shape what we build next.
            </p>
          </div>

          {/* Cyber Voyage — featured sponsor card */}
          <div className="neo-card" style={{ padding: '3.5rem', marginBottom: '3.5rem' }}>
            <div className="sponsor-feature-layout">
              <div className="sponsor-logo-wrapper">
                <img
                  src="/cyber-voyage.png"
                  alt="Cyber Voyage"
                  className="sponsor-logo-img"
                />
              </div>

              <div>
                <div className="neo-box-accent" style={{ marginBottom: '1.25rem' }}>Community Sponsor</div>
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '0.35rem' }}>Cyber Voyage</h3>
                <p style={{ color: 'var(--color-accent)', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.88rem', marginBottom: '1.75rem' }}>
                  Official Community Sponsor of Dragoz
                </p>
                <p style={{ color: '#333333', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  Cyber Voyage is a proud community sponsor of Dragoz, supporting our mission to bring practitioner-built tools and documentation to creators and security enthusiasts worldwide.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                  <div style={{ borderLeft: '4px solid var(--color-accent)', paddingLeft: '1rem' }}>
                    <strong>Partnership focus:</strong> cybersecurity content collaboration, CTF challenges, and community events
                  </div>
                  <div style={{ borderLeft: '4px solid var(--color-black)', paddingLeft: '1rem' }}>
                    <strong>What they bring:</strong> supports practitioner-built tools and documentation globally
                  </div>
                </div>
                <a href="#contact" className="neo-btn neo-btn-primary">Connect with Cyber Voyage</a>
              </div>
            </div>
          </div>

          {/* Powered by Secure Worldz card */}
          <div className="neo-card" style={{ padding: '3.5rem', marginBottom: '3.5rem' }}>
            <div className="sponsor-feature-layout">
              <div className="sponsor-logo-wrapper">
                <img
                  src="/swz.png"
                  alt="Secure Worldz"
                  className="sponsor-logo-img"
                />
              </div>

              <div>
                <div className="neo-box-accent" style={{ marginBottom: '1.25rem' }}>Powered By</div>
                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', marginBottom: '0.35rem' }}>Secure Worldz</h3>
                <p style={{ color: 'var(--color-accent)', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.88rem', marginBottom: '1.75rem' }}>
                  Parent Company and Technology Backbone of Dragoz
                </p>
                <p style={{ color: '#333333', lineHeight: '1.7', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  Secure Worldz is the multi-domain tech and security company behind Dragoz. Offering cybersecurity services, web and app development, AI development, and professional training through Proworldz Academy.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                  <div style={{ borderLeft: '4px solid var(--color-accent)', paddingLeft: '1rem' }}>
                    <strong>Core services:</strong> cybersecurity, AI development, web and app development, training
                  </div>
                  <div style={{ borderLeft: '4px solid var(--color-black)', paddingLeft: '1rem' }}>
                    <strong>Flagship division:</strong> Proworldz Academy, a practitioner-led training and certification platform
                  </div>
                </div>
                <a href="https://secureworldz.pro/" target="_blank" rel="noopener noreferrer" className="neo-btn neo-btn-black">Visit Secure Worldz</a>
              </div>
            </div>
          </div>

          {/* Become a Sponsor CTA */}
          <div style={{ border: 'var(--border-thick)', padding: '3rem', textAlign: 'center', background: 'var(--color-bg)', boxShadow: 'var(--shadow-flat-large)' }}>
            <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', marginBottom: '1rem' }}>Become a Sponsor</h3>
            <p style={{ color: '#444444', maxWidth: '600px', margin: '0 auto 2.5rem', fontSize: '1.05rem', lineHeight: '1.5' }}>
              We work with IoT brands, cybersecurity companies, and creator-focused platforms on co-branded content, product collaborations, and community events.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#contact" className="neo-btn neo-btn-primary">Apply to Sponsor</a>
              <a href="mailto:sponsors@dragotool.shop" className="neo-btn neo-btn-black">Partnership Inquiries</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section className="section" id="contact" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <div className="neo-box-accent" style={{ marginBottom: '1rem' }}>08. Contact Us</div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)' }}>Get in Touch</h2>
            <p style={{ color: '#555555', marginTop: '0.5rem' }}>Have a question about a product, documentation, sponsorship, or partnership? Reach out. We typically respond within 24 business hours.</p>
          </div>

          <div className="contact-layout-grid">
            {/* LEFT column: info cards + find us */}
            <div className="contact-left-col">
              <div className="contact-info-list">
                <div className="contact-info-card">
                  <div className="contact-icon-badge" style={{ fontSize: '1rem', fontWeight: '800' }}>GEN</div>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: '#666666', textTransform: 'uppercase' }}>General Inquiries</h4>
                    <strong>hello@dragotool.shop</strong>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-icon-badge" style={{ fontSize: '1rem', fontWeight: '800' }}>SPO</div>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: '#666666', textTransform: 'uppercase' }}>Sponsorship and Partnerships</h4>
                    <strong>sponsors@dragotool.shop</strong>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-icon-badge" style={{ fontSize: '1rem', fontWeight: '800' }}>SUP</div>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: '#666666', textTransform: 'uppercase' }}>Support and Documentation</h4>
                    <strong>support@dragotool.shop</strong>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-icon-badge" style={{ fontSize: '1rem', fontWeight: '800' }}>HQ</div>
                  <div>
                    <h4 style={{ fontSize: '0.8rem', color: '#666666', textTransform: 'uppercase' }}>HQ Address</h4>
                    <strong>Remote-first, serving clients globally</strong>
                  </div>
                </div>
              </div>

              {/* ── FIND US — separated box ── */}
              <div className="find-us-box">
                <h4 className="find-us-title">Find Us Online</h4>
                <div className="social-icons-grid">
                  {SOCIAL_LINKS.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-icon-btn ${link.colorClass}`}
                      aria-label={link.label}
                    >
                      <span className="social-icon-svg">{link.icon}</span>
                      <span className="social-icon-label">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT column: contact form */}
            <div>
              <div className="neo-card" style={{ padding: '3rem' }}>
                <h3 style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', marginBottom: '2rem' }}>Send Us Your Requirements</h3>

                <form onSubmit={handleContactSubmit} className="form-group-wrap" noValidate>
                  <div className="form-field-group">
                    <label className="form-field-label" htmlFor="contact-name">Name <span aria-hidden="true">*</span></label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Jane Doe"
                      value={contactForm.name}
                      onChange={(e) => handleContactChange('name', e.target.value)}
                      required
                      maxLength={100}
                      autoComplete="name"
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="form-field-label" htmlFor="contact-email">Email <span aria-hidden="true">*</span></label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="jane@example.com"
                      value={contactForm.email}
                      onChange={(e) => handleContactChange('email', e.target.value)}
                      required
                      maxLength={254}
                      autoComplete="email"
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="form-field-label" htmlFor="contact-type">Inquiry Type</label>
                    <select
                      id="contact-type"
                      value={contactForm.type}
                      onChange={(e) => handleContactChange('type', e.target.value)}
                    >
                      <option value="">Select inquiry option</option>
                      <option value="General">General Inquiry</option>
                      <option value="Sponsorship">Sponsorship and Partnerships</option>
                      <option value="Support">Support and Documentation</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label className="form-field-label" htmlFor="contact-message">Message <span aria-hidden="true">*</span></label>
                    <textarea
                      id="contact-message"
                      rows="5"
                      placeholder="Your requirements..."
                      value={contactForm.message}
                      onChange={(e) => handleContactChange('message', e.target.value)}
                      required
                      maxLength={2000}
                    />
                    <span style={{ fontSize: '0.78rem', color: '#888', textAlign: 'right' }}>
                      {contactForm.message.length}/2000
                    </span>
                  </div>

                  <button type="submit" className="neo-btn neo-btn-black" style={{ width: '100%' }}>Send Message</button>
                  {contactFeedback && (
                    <div
                      role="alert"
                      aria-live="polite"
                      style={{
                        marginTop: '1rem',
                        padding: '1rem',
                        background: contactFeedback.startsWith('Error') ? '#ffdddd' : '#ddffdd',
                        border: '2px solid #000',
                        fontWeight: '700'
                      }}
                    >
                      {contactFeedback}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer-section-box">
        <div className="container">
          <div className="footer-layout-grid">
            <div>
              <a href="#" className="logo-wrap" style={{ color: '#fff', background: '#000', border: '2px solid #fff', marginBottom: '1.5rem' }}>
                <div className="logo-badge" style={{ background: '#fff', color: '#000' }}>
                  <DragozLogo size={20} />
                </div>
                <span>DRAGOZ</span>
              </a>
              <p style={{ color: '#bbbbbb', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Marketplace and knowledge hub for real tech products. Vetted by engineers. Powered by Secure Worldz.
              </p>
            </div>

            <div>
              <span className="footer-col-title">Navigation</span>
              <ul className="footer-links-list">
                <li><a href="#about" className="footer-link-item">About Us</a></li>
                <li><a href="#pillars" className="footer-link-item">Focus</a></li>
                <li><a href="#founder" className="footer-link-item">Founder</a></li>
                <li><a href="#community" className="footer-link-item">Sponsors</a></li>
                <li><a href="#contact" className="footer-link-item">Contact</a></li>
              </ul>
            </div>

            <div>
              <span className="footer-col-title">Quick Links</span>
              <ul className="footer-links-list">
                <li><a href="#hero" className="footer-link-item">Getting Started</a></li>
                <li><a href="#community" className="footer-link-item">Drago Open Source</a></li>
                <li><a href="#community" className="footer-link-item">Become a Sponsor</a></li>
              </ul>
            </div>

            <div>
              <span className="footer-col-title">Follow Us</span>
              <ul className="footer-links-list">
                <li><a href="https://www.youtube.com/@TheCyberJai" target="_blank" rel="noopener noreferrer" className="footer-link-item">YouTube</a></li>
                <li><a href="https://www.instagram.com/thecyberjai" target="_blank" rel="noopener noreferrer" className="footer-link-item">Instagram</a></li>
                <li><a href="https://www.youtube.com/@cyber_voyage" target="_blank" rel="noopener noreferrer" className="footer-link-item">Cyber Voyage</a></li>
                <li><a href="https://x.com/Dragothetool" target="_blank" rel="noopener noreferrer" className="footer-link-item">X (Twitter)</a></li>
                <li><a href="https://chat.whatsapp.com/JmtUdMv4rdN6j9uQeXrnLN" target="_blank" rel="noopener noreferrer" className="footer-link-item">WhatsApp Channel</a></li>
                <li><a href="https://discord.gg/YMDG4xBYmp" target="_blank" rel="noopener noreferrer" className="footer-link-item">Discord</a></li>
                <li><a href="https://secureworldz.pro/" target="_blank" rel="noopener noreferrer" className="footer-link-item">Secure Worldz</a></li>
              </ul>
            </div>

            <div>
              <span className="footer-col-title">Stay Updated</span>
              <p style={{ color: '#bbbbbb', fontSize: '0.85rem', marginBottom: '1rem' }}>Get updates on practitioner-built releases.</p>
              <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-box" noValidate>
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  className="newsletter-input-element"
                  placeholder="your@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value.slice(0, 254))}
                  required
                  maxLength={254}
                  autoComplete="email"
                />
                <button type="submit" className="neo-btn neo-btn-primary neo-btn-sm" style={{ padding: '0 1rem' }}>OK</button>
              </form>
              {newsletterFeedback && (
                <div role="alert" aria-live="polite" style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#aaccaa', fontWeight: 'bold' }}>
                  {newsletterFeedback}
                </div>
              )}
            </div>
          </div>

          <div className="footer-bottom-bar">
            <span>&copy; {new Date().getFullYear()} Dragoz. Powered by Secure Worldz. All rights reserved.</span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="#" className="footer-link-item">Privacy Policy</a>
              <a href="#" className="footer-link-item">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
