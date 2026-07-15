import React, { useState } from 'react';

// Official Dragon Logo component loading the uploaded image.png
const DragozLogo = ({ size = 32 }) => (
  <img 
    src="/logo.png" 
    alt="Dragoz Logo" 
    style={{ width: size, height: size, objectFit: 'contain', display: 'inline-block', verticalAlign: 'middle' }} 
  />
);

const CORE_PILLARS = [
  {
    icon: '🔐',
    title: 'Cyber Security',
    desc: 'Tools, research, and practices that come straight from practitioners defending real systems.'
  },
  {
    icon: '🤖',
    title: 'Artificial Intelligence',
    desc: 'Practical AI tooling and automation, not hype.'
  },
  {
    icon: '🛠️',
    title: 'Tech Product Development',
    desc: 'Turning practitioner know-how into real, usable hardware and software products.'
  }
];

const WHY_DRAGOZ = [
  {
    title: 'Built by engineers, not marketers',
    desc: 'Every product ships only after real-world testing.'
  },
  {
    title: 'Documentation-first',
    desc: 'Clear setup guides, specs, and troubleshooting for every tool.'
  },
  {
    title: 'Community-backed',
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
  { title: 'Documentation & Guides', desc: 'In-depth setup docs, API references, and troubleshooting resources for every product.' },
  { title: 'Open-Source & Nonprofit Community', desc: 'The Drago Community operates as a nonprofit, open-source initiative, giving builders free access to tools, research, and collaboration space.' }
];

const VALUES = [
  { name: 'Practitioner-Led', definition: 'Built by people who use the tools themselves, not just sell them.' },
  { name: 'Transparency', definition: 'Clear specs, clear pricing, clear documentation — no surprises.' },
  { name: 'Community-First', definition: 'We grow through an open-source, nonprofit community — not ad spend.' },
  { name: 'Security by Default', definition: 'Every product is engineered with cybersecurity best practices baked in.' },
  { name: 'AI with Purpose', definition: 'AI is applied where it genuinely saves time or improves security — not bolted on for buzz.' }
];

const PARTNER_NETWORK = [
  { name: 'Proworldz Academy', desc: 'Our training and certification division' },
  { name: 'Amit University', desc: 'Academic partnership' },
  { name: 'FC Kovalam', desc: 'Sports academy partnership' },
  { name: 'Tekkit', desc: 'Technology partner' }
];

const DOCS_DATA = {
  'getting-started': {
    title: 'Getting Started',
    desc: 'Set up your first Dragoz tool in minutes.',
    content: (
      <div>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          Dragoz tools are designed for creators, engineers, and hobbyists. To get started, refer to our detailed setup configurations, transparent specifications, and community documentation.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Our main goal is to build real cybersecurity and AI-driven tech products, and make the knowledge behind them open to the community that helped shape them.
        </p>
      </div>
    )
  },
  'product-guides': {
    title: 'Product Guides',
    desc: 'Browse the full lineup and catalog guidelines.',
    content: (
      <div>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          Vetted walkthroughs and specifications are provided for every cybersecurity, artificial intelligence, and hardware tech product in our catalog.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Our main focus spans three core pillars:
        </p>
        <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', lineHeight: '1.6', listStyle: 'square' }}>
          <li>🔐 Cyber Security — tools, research, and practices.</li>
          <li>🤖 Artificial Intelligence — practical AI tooling and automation.</li>
          <li>🛠️ Tech Product Development — turning practitioner know-how into products.</li>
        </ul>
      </div>
    )
  },
  'api-reference': {
    title: 'API / Hardware Reference',
    desc: 'API specifications and hardware schematics.',
    content: (
      <div>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1rem' }}>
          Every product is engineered with cybersecurity best practices baked in, ensuring purpose-driven AI integration and transparent documentation.
        </p>
        <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
          Please refer to the setup logs and specifications inside individual documentation folders for clear specifications, pin details, and interface options.
        </p>
      </div>
    )
  },
  'troubleshooting': {
    title: 'Troubleshooting',
    desc: 'Troubleshooting guides and docs issue logging.',
    content: (
      <div>
        <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
          Our documentation-first standard ensures you have clear setup guides and troubleshooting resources so you never have to guess how something works.
        </p>
        <div className="neo-card" style={{ padding: '1.5rem', background: 'var(--color-bg)' }}>
          <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Need support or have questions?</h4>
          <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>Get in touch with our security and engineering divisions. We respond within a few business hours.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="neo-btn neo-btn-sm">Report a Docs Issue</a>
            <button onClick={() => alert('Call scheduling module loaded.')} className="neo-btn neo-btn-sm neo-btn-primary">Schedule a Call</button>
          </div>
        </div>
      </div>
    )
  }
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDocTab, setActiveDocTab] = useState('getting-started');

  // Contact form state
  const [contactForm, setContactForm] = useState({ name: '', email: '', type: '', message: '' });
  const [contactFeedback, setContactFeedback] = useState('');

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterFeedback, setNewsletterFeedback] = useState('');

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setContactFeedback('Error: All required fields must be filled out.');
      return;
    }
    setContactFeedback('Submitting requirements...');
    setTimeout(() => {
      setContactFeedback('Success: Your inquiry has been sent to Secure Worldz. We respond within 24 business hours.');
      setContactForm({ name: '', email: '', type: '', message: '' });
    }, 1000);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterFeedback('Subscribing...');
    setTimeout(() => {
      setNewsletterFeedback('Success: Welcome to Dragoz updates!');
      setNewsletterEmail('');
    }, 1000);
  };

  return (
    <div>
      {/* ===== HEADER / NAVBAR ===== */}
      <header className="nav-bar">
        <div className="container nav-container">
          <a href="#" className="logo-wrap" aria-label="Dragoz Home">
            <div className="logo-badge">
              <DragozLogo size={20} color="#ffffff" />
            </div>
            <span style={{ letterSpacing: '0.05em' }}>DRAGOZ</span>
          </a>

          <nav className={`nav-links-wrap ${mobileMenuOpen ? 'active' : ''}`} style={{ display: mobileMenuOpen ? 'flex' : undefined }}>
            <a href="#about" className="nav-link">About Us</a>
            <a href="#pillars" className="nav-link">Our Focus</a>
            <a href="#story" className="nav-link">Story</a>
            <a href="#founder" className="nav-link">Founder</a>
            <a href="#docs" className="nav-link">Docs</a>
            <a href="#community" className="nav-link">Sponsors</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="#contact" className="neo-btn neo-btn-sm neo-btn-primary">GET STARTED</a>
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

      {/* ===== HERO SECTION ===== */}
      <section className="section" id="hero" style={{ background: 'var(--color-bg)' }}>
        <div className="container hero-layout">
          <div className="hero-content-left">
            <div className="neo-box-accent" style={{ marginBottom: '1.5rem', backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}>
              ⚡ Powered by Secure Worldz
            </div>
            
            <h1 className="hero-main-title">
              Dragoz — Real Tools,<br />
              Built by <span style={{ background: 'var(--color-black)', color: 'var(--color-white)', padding: '0 8px', display: 'inline-block' }}>Practitioners</span>
            </h1>

            <p className="hero-main-subtitle">
              Dragoz is a marketplace and knowledge hub for real tech products — IoT gadgets, security tools, and hardware — built and vetted by engineers who actually use this stuff every day. No filler, no hype. Just tools that work.
            </p>

            <div className="hero-ctas">
              <a href="#pillars" className="neo-btn neo-btn-primary">Explore Products</a>
              <a href="#docs" className="neo-btn">Read the Docs</a>
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
                <div className="visual-title">dragoz-terminal</div>
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--color-black)' }}>
                <p style={{ color: '#666666' }}># Initializing Dragoz environment...</p>
                <p><span style={{ color: 'var(--color-accent)' }}>$</span> dragoz init --practitioner</p>
                <p style={{ color: 'var(--color-green)' }}>[OK] Loaded 🔐 Cybersecurity toolkits</p>
                <p style={{ color: 'var(--color-green)' }}>[OK] Loaded 🤖 Practical AI configurations</p>
                <p style={{ color: 'var(--color-green)' }}>[OK] Loaded 🛠️ IoT Hardware definitions</p>
                <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>[STATUS] Built by engineers. Ready.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS DRAGOZ? ===== */}
      <section className="section" id="about" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="story-layout">
            <div>
              <div className="neo-box-accent" style={{ marginBottom: '1.25rem' }}>01. Overview</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>What is Dragoz?</h2>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#333333', marginBottom: '1.5rem' }}>
                Dragoz is the product and documentation home for tools designed by practitioners, for practitioners. Every product listed here has been built, tested, and refined by people working hands-on in cybersecurity, AI, and hardware engineering — not marketing teams guessing what creators need.
              </p>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#333333' }}>
                Dragoz is proudly powered by <strong>Secure Worldz</strong>, a multi-domain tech and security company offering cybersecurity services, web/app development, AI development, and training through Proworldz Academy.
              </p>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="neo-card" style={{ padding: '2rem' }}>
                <h3 style={{ textTransform: 'uppercase' }}>🔧 Vetted by Engineers</h3>
                <p style={{ color: '#555555', marginTop: '0.5rem', fontSize: '0.95rem' }}>Every hardware and software product ships only after hands-on verification.</p>
              </div>
              <div className="neo-card" style={{ padding: '2rem' }}>
                <h3 style={{ textTransform: 'uppercase' }}>📖 Documentation First</h3>
                <p style={{ color: '#555555', marginTop: '0.5rem', fontSize: '0.95rem' }}>Setup logs, pins layouts, and schemas. No guessing how something operates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR FOCUS PILLARS ===== */}
      <section className="section" id="pillars" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="neo-box-accent" style={{ marginBottom: '1rem' }}>02. Core Pillars</div>
            <h2 style={{ fontSize: '2.5rem' }}>Our Focus</h2>
          </div>

          <div className="pillars-container">
            {CORE_PILLARS.map((pillar, i) => (
              <div key={i} className="pillar-item-card">
                <div className="pillar-icon-box">{pillar.icon}</div>
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

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {WHY_DRAGOZ.map((item, i) => (
              <div key={i} className="neo-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>{item.title}</h3>
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
            <a href="#docs" onClick={() => setActiveDocTab('getting-started')} className="quicklink-item-card">
              <div>
                <h3 className="quicklink-title-text">Getting Started</h3>
                <p style={{ color: '#555555', fontSize: '0.9rem' }}>Set up your first Dragoz tool in minutes.</p>
              </div>
              <span className="quicklink-arrow">&rarr;</span>
            </a>

            <a href="#pillars" className="quicklink-item-card">
              <div>
                <h3 className="quicklink-title-text">Product Catalog</h3>
                <p style={{ color: '#555555', fontSize: '0.9rem' }}>Browse the full focus line.</p>
              </div>
              <span className="quicklink-arrow">&rarr;</span>
            </a>

            <a href="#community" className="quicklink-item-card">
              <div>
                <h3 className="quicklink-title-text">Drago Community</h3>
                <p style={{ color: '#555555', fontSize: '0.9rem' }}>Our nonprofit builder community.</p>
              </div>
              <span className="quicklink-arrow">&rarr;</span>
            </a>

            <a href="#community" className="quicklink-item-card">
              <div>
                <h3 className="quicklink-title-text">Community &amp; Sponsors</h3>
                <p style={{ color: '#555555', fontSize: '0.9rem' }}>Cyber Voyage and partner network.</p>
              </div>
              <span className="quicklink-arrow">&rarr;</span>
            </a>

            <a href="#story" className="quicklink-item-card">
              <div>
                <h3 className="quicklink-title-text">About Us</h3>
                <p style={{ color: '#555555', fontSize: '0.9rem' }}>The story behind Dragoz.</p>
              </div>
              <span className="quicklink-arrow">&rarr;</span>
            </a>

            <a href="#contact" className="quicklink-item-card">
              <div>
                <h3 className="quicklink-title-text">Contact Us</h3>
                <p style={{ color: '#555555', fontSize: '0.9rem' }}>Get in touch with the team.</p>
              </div>
              <span className="quicklink-arrow">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===== ABOUT US - STORY & MISSION ===== */}
      <section className="section" id="story" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="story-layout" style={{ marginBottom: '5rem' }}>
            <div>
              <div className="neo-box-accent" style={{ marginBottom: '1.25rem' }}>05. Background</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Story</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333333', marginBottom: '1.5rem' }}>
                Dragoz started as a simple idea: the best tech products aren't designed in boardrooms — they're built by the people who actually break, fix, and rebuild systems for a living. What began as an internal toolkit for practitioners grew into a full marketplace and documentation platform for real, practitioner-built tech.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333333' }}>
                We're part of the <strong>Secure Worldz</strong> family, alongside Proworldz Academy, giving Dragoz direct access to a deep bench of security engineers, red teamers, developers, and AI builders — the same people who create and stress-test every product we release.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="neo-card" style={{ padding: '2.25rem' }}>
                <h3 style={{ marginBottom: '1rem', textTransform: 'uppercase' }}>Our Mission</h3>
                <p style={{ color: '#444444', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  To put honest, well-documented, practitioner-tested tools into the hands of creators, engineers, and hobbyists — backed by documentation good enough that you never have to guess how something works.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '5rem' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>What We Do</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {WHAT_WE_DO.map((item, i) => (
                <div key={i} className="neo-card" style={{ padding: '2rem' }}>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{item.title}</h4>
                  <p style={{ color: '#555555', fontSize: '0.9rem', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="neo-card" style={{ padding: '3rem', marginBottom: '5rem' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Drago Community — Open Source &amp; Nonprofit</h3>
            <p style={{ fontSize: '1.1rem', color: '#333333', lineHeight: '1.6', marginBottom: '2rem' }}>
              The Drago Community is the nonprofit, open-source arm behind Dragoz. It exists to give cybersecurity researchers, AI builders, and product engineers a free, collaborative space to build, share, and learn — separate from the commercial side of the business.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem', fontWeight: '700' }}>
              <li>🔓 Open-source first — tools, research, and resources shared openly wherever possible.</li>
              <li>🌱 Nonprofit-driven — the community isn't run for profit; it exists to grow practitioner talent.</li>
              <li>🤝 Open collaboration — anyone working in cybersecurity or AI can contribute or join.</li>
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
                    <td>{val.name}</td>
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
                Founder &amp; CEO, Secure Worldz | Founder, Drago &amp; Proworldz
              </p>

              <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#333333' }}>
                With over 10 years of experience in technology and cybersecurity, Jaiganesh Lakshmanan has worked with Fortune 10+ companies to strengthen their security infrastructure. He is the founder of both <strong>Drago</strong> (the Dragoz product line) and <strong>Proworldz Academy</strong>, and has personally trained over 1,000 students across cybersecurity, ethical hacking, AI development, and business growth.
              </p>
              
              <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#333333', marginTop: '1rem' }}>
                Jaiganesh specializes in vulnerability assessment and penetration testing, having discovered critical security flaws in major financial institutions. He's also a technology speaker, ethical hacker, AI developer, and business growth speaker.
              </p>

              <blockquote className="founder-quote-box">
                "Security is not a product, but a process. My goal is to teach students how to think like both defender and attacker — and to understand how technology drives real business value."
              </blockquote>

              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontSize: '0.85rem', color: '#666666', marginBottom: '0.75rem', textTransform: 'uppercase' }}>Roles at a glance:</h4>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <span className="neo-box-accent" style={{ background: '#fff', color: '#000' }}>Technology Speaker</span>
                  <span className="neo-box-accent" style={{ background: '#fff', color: '#000' }}>Ethical Hacker</span>
                  <span className="neo-box-accent" style={{ background: '#fff', color: '#000' }}>AI Developer</span>
                  <span className="neo-box-accent" style={{ background: '#fff', color: '#000' }}>Business Growth Speaker</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a href="#" className="neo-btn neo-btn-sm neo-btn-primary">View Founder Portfolio</a>
                <a href="#" className="neo-btn neo-btn-sm">Connect on Instagram</a>
                <a href="#" className="neo-btn neo-btn-sm neo-btn-black">Connect on YouTube</a>
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
            <h2 style={{ fontSize: '2.5rem' }}>Sponsors &amp; Partner Network</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '4rem', alignItems: 'flex-start' }}>
            <div>
              <h3>Community Sponsor</h3>
              <div className="sponsor-card-block">
                <h4 style={{ fontSize: '1.5rem', color: 'var(--color-accent)', marginBottom: '1rem' }}>Cyber Voyage</h4>
                <p style={{ color: '#333333', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                  Cyber Voyage is a proud community sponsor of Dragoz, supporting our mission to bring practitioner-built tools and documentation to creators and security enthusiasts worldwide.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                  <li>🔗 Partnership focus: cybersecurity content collaboration, CTF challenges, community events</li>
                  <li>💡 What they bring: supports practitioner-built tools and documentation globally</li>
                </ul>
              </div>
            </div>

            <div>
              <h3>Trusted Partner Network</h3>
              <p style={{ color: '#555555', marginBottom: '1.5rem' }}>Dragoz sits alongside a network of organizations already collaborating with Secure Worldz:</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {PARTNER_NETWORK.map((item, i) => (
                  <div key={i} className="partner-box-item">
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{item.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#666666' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="neo-card" style={{ marginTop: '5rem', padding: '3.5rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Become a Sponsor</h3>
            <p style={{ color: '#444444', maxWidth: '650px', margin: '0 auto 2.5rem', fontSize: '1.1rem', lineHeight: '1.5' }}>
              We work with IoT brands, cybersecurity companies, and creator-focused platforms on co-branded content, product collaborations, and community events.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#contact" className="neo-btn neo-btn-primary">Apply to Sponsor</a>
              <a href="mailto:sponsors@dragotool.shop" className="neo-btn neo-btn-black">Partnership Inquiries &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DOCS SECTION ===== */}
      <section className="section" id="docs" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <div className="neo-box-accent" style={{ marginBottom: '1rem' }}>08. Documentation</div>
            <h2 style={{ fontSize: '2.5rem' }}>Developer Guides &amp; References</h2>
            <p style={{ color: '#555555', marginTop: '0.5rem' }}>Explore in-depth setup documentation, API references, and troubleshooting setups.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '3rem', alignItems: 'flex-start' }}>
            {/* Sidebar navigation */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {Object.keys(DOCS_DATA).map((key) => (
                <button 
                  key={key}
                  onClick={() => setActiveDocTab(key)}
                  className="neo-btn"
                  style={{ 
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    backgroundColor: activeDocTab === key ? 'var(--color-black)' : 'var(--color-white)',
                    color: activeDocTab === key ? 'var(--color-white)' : 'var(--color-black)',
                    boxShadow: activeDocTab === key ? 'none' : 'var(--shadow-flat-small)',
                    transform: activeDocTab === key ? 'translate(2px, 2px)' : 'none'
                  }}
                >
                  {DOCS_DATA[key].title}
                </button>
              ))}
            </div>

            {/* Document display board */}
            <div className="neo-card" style={{ padding: '3rem', minHeight: '340px' }}>
              <div className="neo-box-accent" style={{ marginBottom: '1rem', background: 'var(--color-accent)' }}>
                {DOCS_DATA[activeDocTab].title}
              </div>
              <p style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '2rem' }}>
                {DOCS_DATA[activeDocTab].desc}
              </p>
              <div style={{ borderTop: 'var(--border-thin)', paddingTop: '2rem' }}>
                {DOCS_DATA[activeDocTab].content}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT US ===== */}
      <section className="section" id="contact" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <div className="neo-box-accent" style={{ marginBottom: '1rem' }}>09. Contact Us</div>
            <h2 style={{ fontSize: '2.5rem' }}>Get in Touch</h2>
            <p style={{ color: '#555555', marginTop: '0.5rem' }}>Have a question about a product, documentation, sponsorship, or partnership? Reach out — we typically respond within 24 business hours.</p>
          </div>

          <div className="contact-layout-grid">
            <div className="contact-info-list">
              <div className="contact-info-card">
                <div className="contact-icon-badge">✉</div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: '#666666', textTransform: 'uppercase' }}>General Inquiries</h4>
                  <strong>hello@dragotool.shop</strong>
                </div>
              </div>
              
              <div className="contact-info-card">
                <div className="contact-icon-badge">🤝</div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: '#666666', textTransform: 'uppercase' }}>Sponsorship &amp; Partnerships</h4>
                  <strong>sponsors@dragotool.shop</strong>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-badge">🔧</div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: '#666666', textTransform: 'uppercase' }}>Support &amp; Documentation</h4>
                  <strong>support@dragotool.shop</strong>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon-badge">📍</div>
                <div>
                  <h4 style={{ fontSize: '0.8rem', color: '#666666', textTransform: 'uppercase' }}>HQ Address</h4>
                  <strong>Remote-first, serving clients globally</strong>
                </div>
              </div>
            </div>

            <div>
              <div className="neo-card" style={{ padding: '3rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send Us Your Requirements</h3>
                
                <form onSubmit={handleContactSubmit} className="form-group-wrap">
                  <div className="form-field-group">
                    <label className="form-field-label">Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe" 
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="form-field-label">Email</label>
                    <input 
                      type="email" 
                      placeholder="jane@example.com" 
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="form-field-label">Inquiry Type</label>
                    <select 
                      value={contactForm.type}
                      onChange={(e) => setContactForm({ ...contactForm, type: e.target.value })}
                    >
                      <option value="">Select inquiry option</option>
                      <option value="General">General Inquiry</option>
                      <option value="Sponsorship">Sponsorship &amp; Partnerships</option>
                      <option value="Support">Support &amp; Documentation</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label className="form-field-label">Message</label>
                    <textarea 
                      rows="4" 
                      placeholder="Your requirements..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                    />
                  </div>

                  <button type="submit" className="neo-btn neo-btn-black">Send Message</button>
                  {contactFeedback && (
                    <div style={{ 
                      marginTop: '1rem', 
                      padding: '1rem', 
                      background: contactFeedback.startsWith('Error') ? '#ffdddd' : '#ddffdd', 
                      border: '2px solid #000',
                      fontWeight: '700' 
                    }}>
                      {contactFeedback}
                    </div>
                  )}
                </form>

                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem', borderTop: 'var(--border-thin)', paddingTop: '1.5rem' }}>
                  <button onClick={() => alert('Call scheduling module loaded.')} className="neo-btn neo-btn-sm">Schedule a Call</button>
                  <button onClick={() => alert('Docs issue ticket generated.')} className="neo-btn neo-btn-sm neo-btn-primary">Report a Docs Issue</button>
                </div>
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
                  <DragozLogo size={20} color="#000000" />
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
                <li><a href="#docs" className="footer-link-item">Product Catalog</a></li>
                <li><a href="#community" className="footer-link-item">Drago Open Source</a></li>
                <li><a href="#community" className="footer-link-item">Become a Sponsor</a></li>
              </ul>
            </div>

            <div>
              <span className="footer-col-title">Follow Us</span>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link-item">Instagram</a></li>
                <li><a href="#" className="footer-link-item">YouTube</a></li>
                <li><a href="#" className="footer-link-item">WhatsApp Channel</a></li>
                <li><a href="https://secureworldz.pro/" target="_blank" rel="noopener noreferrer" className="footer-link-item">Secure Worldz</a></li>
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
                />
                <button type="submit" className="neo-btn neo-btn-primary neo-btn-sm" style={{ padding: '0 1rem' }}>✓</button>
              </form>
              {newsletterFeedback && (
                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#ff7b7b', fontWeight: 'bold' }}>
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
