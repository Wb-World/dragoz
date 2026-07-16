import React, { useState } from 'react';

// Official Dragon Logo component loading the uploaded image.png
const DragozLogo = ({ size = 32 }) => (
  <img 
    src="/logo.png" 
    alt="Dragoz Logo" 
    style={{ width: size, height: size, objectFit: 'contain', display: 'inline-block', verticalAlign: 'middle' }} 
  />
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


const TERMINAL_LOG = [
  { tone: 'muted', text: '# Initializing Dragoz environment...' },
  { tone: 'command', text: '$ dragoz init practitioner' },
  { tone: 'ok', text: '[OK] Loaded Cybersecurity toolkits' },
  { tone: 'ok', text: '[OK] Loaded Practical AI configurations' },
  { tone: 'ok', text: '[OK] Loaded IoT Hardware definitions' },
  { tone: 'event', text: '[EVENT] Ready to append event entries.' }
];

const SOCIAL_LINKS = [
  {
    label: 'YouTube - @TheCyberJai',
    url: 'https://www.youtube.com/@TheCyberJai',
    className: 'social-btn-youtube',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3" y="6" width="18" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10 9.5 15 12l-5 2.5z" fill="currentColor" />
      </svg>
    )
  },
  {
    label: 'Instagram - @thecyberjai',
    url: 'https://www.instagram.com/thecyberjai',
    className: 'social-btn-instagram',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.5" cy="7.5" r="1.2" fill="currentColor" />
      </svg>
    )
  },
  {
    label: 'Founder Portfolio - cyberjai.co.in',
    url: 'https://www.cyberjai.co.in/',
    className: 'social-btn-portfolio',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M9 6h6a2 2 0 0 1 2 2v1h2a1 1 0 0 1 1 1v2H4v-2a1 1 0 0 1 1-1h2V8a2 2 0 0 1 2-2Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M4 12v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 10V8h4v2" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
    )
  },
  {
    label: 'Cyber Voyage - YouTube',
    url: 'https://www.youtube.com/@cyber_voyage',
    className: 'social-btn-youtube',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3" y="6" width="18" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M10 9.5 15 12l-5 2.5z" fill="currentColor" />
      </svg>
    )
  },
  {
    label: 'X - @Dragothetool',
    url: 'https://x.com/Dragothetool',
    className: 'social-btn-x',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M5 5h3.5l3.5 4.5L15.5 5H19l-5.6 7.1L19.5 19H16l-4-5.1L8 19H4.5l5.8-7.4L5 5Z" fill="currentColor" />
      </svg>
    )
  },
  {
    label: 'WhatsApp Channel',
    url: 'https://chat.whatsapp.com/JmtUdMv4rdN6j9uQeXrnLN',
    className: 'social-btn-whatsapp',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 4.5a7.5 7.5 0 0 0-6.3 11.6L5 20l3.9-1.1A7.5 7.5 0 1 0 12 4.5Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9.7 8.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.6-.1.8l-.5.6c.8 1.3 1.8 2.3 3.1 3.1l.6-.5c.2-.2.5-.2.8-.1l1.8.8c.3.1.4.3.4.5v.5c0 .2-.1.5-.4.7-.5.4-1.1.5-1.8.4-3.7-.6-6.8-3.7-7.4-7.4-.1-.7 0-1.3.4-1.8Z" fill="currentColor" />
      </svg>
    )
  },
  {
    label: 'Discord Community',
    url: 'https://discord.gg/YMDG4xBYmp',
    className: 'social-btn-discord',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M7 7.5c2-.9 3.7-1.4 5-1.4s3 .5 5 1.4l1.5 8.4c.1.6-.2 1.1-.8 1.3-.5.1-1.1-.1-1.4-.5l-1.1-1.4H8.8l-1.1 1.4c-.3.4-.9.6-1.4.5-.6-.2-.9-.7-.8-1.3L7 7.5Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="10.1" cy="11.5" r="1" fill="currentColor" />
        <circle cx="13.9" cy="11.5" r="1" fill="currentColor" />
      </svg>
    )
  }
];

const VALUES = [
  { name: 'Practitioner-Led', definition: 'Built by people who use the tools themselves, not just sell them.' },
  { name: 'Transparency', definition: 'Clear specs, clear pricing, clear documentation. No surprises.' },
  { name: 'Community-First', definition: 'We grow through an open-source, nonprofit community. Not ad spend.' },
  { name: 'Security by Default', definition: 'Every product is engineered with cybersecurity best practices baked in.' },
  { name: 'AI with Purpose', definition: 'AI is applied where it genuinely saves time or improves security. Not bolted on for buzz.' }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', type: '', message: '' });
  const [contactFeedback, setContactFeedback] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterFeedback, setNewsletterFeedback] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const sanitizedName = contactForm.name.trim();
    const sanitizedEmail = contactForm.email.trim();
    const sanitizedMessage = contactForm.message.trim();

    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      setContactFeedback('Error: All required fields must be filled out.');
      return;
    }

    setContactFeedback('Submitting requirements...');
    setTimeout(() => {
      setContactFeedback('Your inquiry has been sent to Secure Worldz. We respond within 24 business hours.');
      setContactForm({ name: '', email: '', type: '', message: '' });
    }, 1000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const sanitizedEmail = newsletterEmail.trim();

    if (!sanitizedEmail) return;

    setNewsletterFeedback('Subscribing...');
    setTimeout(() => {
      setNewsletterFeedback('Welcome to Dragoz updates!');
      setNewsletterEmail('');
    }, 1000);
  };

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

          <nav className={`nav-links-wrap ${mobileMenuOpen ? 'active' : ''}`} style={{ display: mobileMenuOpen ? 'flex' : undefined }}>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#pillars" className="nav-link">Our Focus</a>
            <a href="#story" className="nav-link">Story</a>
            <a href="#founder" className="nav-link">Founder</a>
            <a href="#community" className="nav-link">Sponsors</a>
            <a href="#contact" className="nav-link">Contact</a>
            <button type="button" className="nav-link nav-career-btn">Career</button>
            <a href="https://dragotool.shop/" className="neo-btn neo-btn-sm neo-btn-primary">BUY</a>
          </nav>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
            aria-expanded={mobileMenuOpen}
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
              <a href="#community" className="neo-btn">Join Community</a>
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
                            <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: '1.8', color: 'var(--color-black)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                {TERMINAL_LOG.map((entry, index) => (
                  <p
                    key={index}
                    style={{
                      margin: 0,
                      marginTop: entry.tone === 'event' ? '1rem' : 0,
                      color: entry.tone === 'muted' ? '#666666' : entry.tone === 'event' ? '#111111' : 'var(--color-accent)',
                      fontWeight: entry.tone === 'event' ? '800' : entry.tone === 'command' ? '700' : '400',
                      wordBreak: 'break-word'
                    }}
                  >
                    {entry.text}
                  </p>
                ))}
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
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>What is Dragoz?</h2>
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
            <h2 style={{ fontSize: '2.5rem' }}>Our Focus</h2>
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
            <h2 style={{ fontSize: '2.5rem' }}>Why Dragoz</h2>
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
            <h2 style={{ fontSize: '2.5rem' }}>Quick Links</h2>
          </div>

          <div className="quicklinks-grid-wrap">
            <a href="#community" className="quicklink-item-card">
              <div className="quicklink-header">
                <span className="quicklink-category">COMMUNITY</span>
                <span className="quicklink-arrow">&rarr;</span>
              </div>
              <div className="quicklink-body">
                <h3 className="quicklink-title-text">Open Source</h3>
                <p className="quicklink-desc">Explore the Drago community, sponsors, and events.</p>
              </div>
            </a>

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
                <h3 className="quicklink-title-text">Sponsors & Partner Network</h3>
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
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Story</h2>
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
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>What We Do</h3>
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
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Drago Community. Open Source and Nonprofit</h3>
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
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Our Values</h3>
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
          <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Meet Our Founder</h2>

          <div className="founder-layout-card">
            <div className="founder-img-wrapper">
              <img src="/jai.png" alt="Jaiganesh Lakshmanan" className="founder-img" />
            </div>
            <div>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Jaiganesh Lakshmanan</h3>
              <p style={{ color: 'var(--color-accent)', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                Founder and CEO, Secure Worldz | Founder, Drago and Proworldz
              </p>

              <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#333333' }}>
                With over 6 years of experience in technology and cybersecurity, Jaiganesh Lakshmanan has worked with Fortune 10+ companies to strengthen their security infrastructure. He is the founder of both <strong>Drago</strong> (the Dragoz product line) and <strong>Proworldz Academy</strong>, and has personally trained over 1,000 students across cybersecurity, ethical hacking, AI development, and business growth.
              </p>

              <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#333333', marginTop: '1rem' }}>
                Jaiganesh specializes in vulnerability assessment and penetration testing, having discovered critical security flaws in major financial institutions. He is also a technology speaker, ethical hacker, AI developer, and business growth speaker.
              </p>

              {/* <blockquote className="founder-quote-box">
                "Security is not a product, but a process. My goal is to teach students how to think like both defender and attacker and to understand how technology drives real business value."
              </blockquote> */}
              <br />
              <div style={{ marginBottom: '2.5rem' }}>
                {/* <h4 style={{ fontSize: '0.85rem', color: '#666666', marginBottom: '0.75rem', textTransform: 'uppercase' }}>Roles at a glance</h4> */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="neo-box-accent" style={{ background: '#fff', color: '#000' }}>Technology Speaker</span>
                  <span className="neo-box-accent" style={{ background: '#fff', color: '#000' }}>Ethical Hacker</span>
                  <span className="neo-box-accent" style={{ background: '#fff', color: '#000' }}>AI Developer</span>
                  <span className="neo-box-accent" style={{ background: '#fff', color: '#000' }}>Business Growth Speaker</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a href="https://www.cyberjai.co.in/" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="neo-btn neo-btn-sm neo-btn-primary">View Founder Portfolio</a>
                <a href="https://www.instagram.com/thecyberjai" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="neo-btn neo-btn-sm">Connect on Instagram</a>
                <a href="https://www.youtube.com/@TheCyberJai" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="neo-btn neo-btn-sm neo-btn-black">Connect on YouTube</a>
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
            <h2 style={{ fontSize: '2.5rem' }}>Sponsors and Partner Network</h2>
            <p style={{ color: '#555555', marginTop: '0.75rem', fontSize: '1.05rem', lineHeight: '1.5' }}>
              Dragoz exists because of the builders, creators, and security practitioners who test our tools, share feedback, and help shape what we build next.
            </p>
          </div>

          {/* Cyber Voyage — featured sponsor card (mirrors founder layout) */}
          <div className="neo-card" style={{ padding: '3.5rem', marginBottom: '3.5rem' }}>
            <div className="sponsor-feature-layout">
              {/* Logo image block — styled exactly like founder-img-wrapper */}
              <div className="sponsor-logo-wrapper">
                <img
                  src="/cyber-voyage.png"
                  alt="Cyber Voyage"
                  className="sponsor-logo-img"
                />
              </div>

              {/* Content block */}
              <div>
                <div className="neo-box-accent" style={{ marginBottom: '1.25rem' }}>Community Sponsor</div>
                <h3 style={{ fontSize: '2.25rem', marginBottom: '0.35rem' }}>Cyber Voyage</h3>
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
                <a href="https://www.youtube.com/@cyber_voyage" className="neo-btn neo-btn-primary">Connect with Cyber Voyage</a>
              </div>
            </div>
          </div>

          {/* Powered by Secure Worldz card */}
          <div className="neo-card" style={{ padding: '3.5rem', marginBottom: '3.5rem' }}>
            <div className="sponsor-feature-layout">
              {/* SWZ Logo */}
              <div className="sponsor-logo-wrapper">
                <img
                  src="/swz.png"
                  alt="Secure Worldz"
                  className="sponsor-logo-img"
                />
              </div>

              {/* Content block */}
              <div>
                <div className="neo-box-accent" style={{ marginBottom: '1.25rem' }}>Powered By</div>
                <h3 style={{ fontSize: '2.25rem', marginBottom: '0.35rem' }}>Secure Worldz</h3>
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
                <a href="https://secureworldz.pro/" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="neo-btn neo-btn-black">Visit Secure Worldz</a>
              </div>
            </div>
          </div>

          {/* Become a Sponsor CTA */}
          <div style={{ border: 'var(--border-thick)', padding: '3rem', textAlign: 'center', background: 'var(--color-bg)', boxShadow: 'var(--shadow-flat-large)' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Become a Sponsor</h3>
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
      <section className="section contact-section" id="contact" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <div className="neo-box-accent" style={{ marginBottom: '1rem' }}>08. Contact Us</div>
            <h2 style={{ fontSize: '2.5rem' }}>Get in Touch</h2>
            <p style={{ color: '#555555', marginTop: '0.5rem' }}>Have a question about a product, support, sponsorship, or partnership? Reach out. We typically respond within 24 business hours.</p>
          </div>

          <div className="contact-layout-grid">
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

              <div className="find-us-box">
                <h4 className="find-us-title">Find Us Online</h4>
                <div className="social-icons-grid">
                  {SOCIAL_LINKS.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      referrerPolicy="no-referrer"
                      className={'social-icon-btn ' + link.className}
                      aria-label={link.label}
                      title={link.label}
                    >
                      <span className="social-icon-svg">{link.icon}</span>
                      <span className="social-icon-label">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="neo-card contact-requirements-card" style={{ padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>Send Us Your Requirements</h3>

              <form onSubmit={handleContactSubmit} className="form-group-wrap">
                <div className="form-field-group">
                  <label className="form-field-label" htmlFor="contact-name">Name <span aria-hidden="true">*</span></label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Jane Doe"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
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
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
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
                    onChange={(e) => setContactForm({ ...contactForm, type: e.target.value })}
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
                    rows="4"
                    placeholder="Your requirements..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    required
                    maxLength={2000}
                  />
                </div>

                <button type="submit" className="neo-btn neo-btn-black">Send Message</button>
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
                <li><a href="#hero" className="footer-link-item">Home</a></li>
                <li><a href="#about" className="footer-link-item">About Us</a></li>
                <li><a href="#community" className="footer-link-item">Open Source</a></li>
                <li><a href="#contact" className="footer-link-item">Contact</a></li>
              </ul>
            </div>

            <div>
              <span className="footer-col-title">Follow Us</span>
              <ul className="footer-links-list">
                <li><a href="https://www.youtube.com/@TheCyberJai" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="footer-link-item">YouTube</a></li>
                <li><a href="https://www.instagram.com/thecyberjai" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="footer-link-item">Instagram</a></li>
                <li><a href="https://www.youtube.com/@cyber_voyage" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="footer-link-item">Cyber Voyage</a></li>
                <li><a href="https://x.com/Dragothetool" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="footer-link-item">X (Twitter)</a></li>
                <li><a href="https://chat.whatsapp.com/JmtUdMv4rdN6j9uQeXrnLN" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="footer-link-item">WhatsApp Channel</a></li>
                <li><a href="https://discord.gg/YMDG4xBYmp" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="footer-link-item">Discord</a></li>
                <li><a href="https://secureworldz.pro/" target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="footer-link-item">Secure Worldz</a></li>
              </ul>
            </div>

            <div>
              <span className="footer-col-title">Stay Updated</span>
              <p style={{ color: '#bbbbbb', fontSize: '0.85rem', marginBottom: '1rem' }}>Get updates on practitioner-built releases.</p>
              <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-box">
                <input
                  type="email"
                  className="newsletter-input-element"
                  placeholder="your@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
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
