import React, { useState } from 'react';

// Official Stylized Dragon SVG Logo component based on the user's pinned image
const DragozLogo = ({ className = '', size = 48, color = '#000000' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 512 512" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: 'inline-block', verticalAlign: 'middle' }}
  >
    {/* Stylized dragon head path matching the pinned logo image */}
    <path 
      d="M312.4 75.3C298.2 61.2 278.4 48.3 260.5 42c-15.6-5.5-32.8 1.4-38.3 17-2.3 6.6-2 13.9.8 20.3-4.8-1.5-9.8-2.2-14.8-2-12 .6-23 7.1-30.8 17.5-6-8.2-15.6-13-25.8-13-10.2 0-19.8 4.8-25.8 13 4.1-13 1.8-27.4-6-38.3C111.4 43 97 38 82.5 40.5c-15.3 2.6-27.8 13.2-33.3 28-2.8 7.6-3.2 15.9-1.2 23.7-4.2-2.1-8.9-3.2-13.7-3.2-12.8 0-24.6 7.6-30 19.5-3.3 7.2-3.8 15.3-1.4 22.8-2-2.4-4.8-4.2-8.1-5-15.4-3.8-31 5.6-34.8 21-1.3 5.3-.9 10.9 1 16-3.2-2-7.1-3-11-2.9-12.8.2-23.7 9.8-25 22.6-1 9.8 4.2 19.4 12.8 24 1.5 8.2-1.3 16.7-7.6 22-12.1 10.1-15.2 27.6-7.3 41.2 7.9 13.6 24.3 19 38.6 12.8 2.9 6.2-.2 13.5-6.6 16.3-12.4 5.4-19 19.6-15.5 32.7 3.5 13.1 16.3 21.2 29.5 19 10.2 9.5 25.1 12 37.8 6.3 5.4 12 .3 26.2-11.2 32-12.5 6.3-17.7 21.8-11.8 34.6 5.9 12.8 20.8 18.7 33.6 13.2 18.1-7.8 30.5-25.1 32.4-44.8 13.2 5.1 27.8 3.5 39.5-4.3 16.1-10.7 21.8-31.5 13.2-48.8 6.8 9.5 17.5 15 29.3 15 10.2 0 19.8-4.8 25.8-13-1.8 13.2 4.2 26.2 15.5 33 11.3 6.8 25.5 6.8 36.8 0 13-7.8 19-22.8 15.2-37.4 7.6 7 17.7 10.5 28 9.7 12-.9 22.8-8.2 28.5-19.2 13 8.3 30.1 8 42.8-.8 12.7-8.8 18.2-24.8 13.8-39.7 7 6.2 16.4 9 25.8 7.7 12-1.6 22-9.8 26.5-21.2 14.1 6.8 31 3.5 41.6-8.2 10.6-11.7 11.7-28.7 2.7-41.6 7.6 1.8 15.5-.3 21.6-5.7 11.3-10 13.9-26.7 6.1-39.7-7.8-13-24.1-18.4-38.3-12.8 2.2-13.2-4.2-26.2-15.5-33-11.3-6.8-25.5-6.8-36.8 0-1.8-13.2-11.6-23.7-24.8-26.5-13.2-2.8-26.8 2-34.6 12.2-7.8-10.2-21.4-15-34.6-12.2C318.6 99 308.8 88.5 312.4 75.3Z" 
      fill={color} 
    />
  </svg>
);

// Content array mapped strictly from dragoz-doc.md
const CORE_PILLARS = [
  {
    icon: '🔐',
    title: 'Cyber Security',
    desc: 'Tools, research, and practices that come straight from practitioners defending real systems.',
    tags: ['Offensive Security', 'Defense Systems', 'Pentesting']
  },
  {
    icon: '🤖',
    title: 'Artificial Intelligence',
    desc: 'Practical AI tooling and automation, not hype. Focused on real-world engineering workloads.',
    tags: ['AI Automation', 'LLM Integrations', 'ML Tooling']
  },
  {
    icon: '🛠️',
    title: 'Tech Product Development',
    desc: 'Turning practitioner know-how into real, usable hardware and software products.',
    tags: ['IoT Hardware', 'Firmware Development', 'Software Tools']
  }
];

const WHY_DRAGOZ = [
  {
    title: 'Built by engineers, not marketers',
    desc: 'Every product ships only after real-world testing by engineers who actually use this stuff daily.'
  },
  {
    title: 'Documentation-first',
    desc: 'Clear setup guides, detailed schematics, API references, and troubleshooting logs for every tool.'
  },
  {
    title: 'Community-backed',
    desc: 'Supported by a growing open-source, nonprofit community of creators, ethical hackers, and AI builders.'
  },
  {
    title: 'Transparent pricing & specs',
    desc: 'Honest specifications, clear and fair pricing, open source repositories, and no dark patterns.'
  }
];

const VALUES_DATA = [
  { value: 'Practitioner-Led', definition: 'Built by people who use the tools themselves, not just sell them.' },
  { value: 'Transparency', definition: 'Clear specs, clear pricing, clear documentation — no surprises.' },
  { value: 'Community-First', definition: 'We grow through an open-source, nonprofit community — not ad spend.' },
  { value: 'Security by Default', definition: 'Every product is engineered with cybersecurity best practices baked in.' },
  { value: 'AI with Purpose', definition: 'AI is applied where it genuinely saves time or improves security — not bolted on for buzz.' }
];

const PARTNER_NETWORK = [
  { name: 'Proworldz Academy', desc: 'Our training and certification division' },
  { name: 'Amit University', desc: 'Academic partnership' },
  { name: 'FC Kovalam', desc: 'Sports academy partnership' },
  { name: 'Tekkit', desc: 'Technology partner' }
];

// Product Data inspired by dragotool.shop catalog
const PRODUCTS_DATA = [
  {
    id: 'exploitry',
    title: 'EXPLOITRY',
    category: 'BUG BOUNTY',
    desc: 'Bundle of Tools made for exploitation, not explanation.',
    originalPrice: 49,
    price: 0,
    badge: 'FREE / OPEN SOURCE',
    icon: '⚡'
  },
  {
    id: 'bugatlas',
    title: 'BUGATLAS',
    category: 'BUG BOUNTY',
    desc: 'Checklist mapped to reach real bugs, not random hunting.',
    originalPrice: 49,
    price: 9,
    badge: 'LIFETIME ACCESS',
    icon: '🛡'
  },
  {
    id: 'versage',
    title: 'VERSAGE',
    category: 'DEVELOPMENT',
    desc: 'Reverse engineering grounded in real behavior, not surface descriptions.',
    originalPrice: 49,
    price: 9,
    badge: 'SINGLE LICENSE',
    icon: '🐂'
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  
  // Interactive forms state
  const [contactForm, setContactForm] = useState({ name: '', email: '', type: '', message: '' });
  const [contactFeedback, setContactFeedback] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterFeedback, setNewsletterFeedback] = useState('');

  // Filter logic
  const filteredProducts = PRODUCTS_DATA.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = activeCategory === 'ALL' || p.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setContactFeedback('Error: All required fields must be filled out.');
      return;
    }
    setContactFeedback('Sending inquiry...');
    setTimeout(() => {
      setContactFeedback('Success: Thank you! Secure Worldz team will respond in 24 business hours.');
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
      {/* ===== NAVBAR ===== */}
      <header className="nav-bar">
        <div className="container nav-container">
          <a href="#" className="logo-wrap" aria-label="Dragoz Home">
            <DragozLogo size={42} color="#000000" />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', letterSpacing: '0.05em' }}>DRAGOZ</span>
          </a>

          <nav className={`nav-links-wrap ${mobileMenuOpen ? 'active' : ''}`} style={{ display: mobileMenuOpen ? 'flex' : undefined }}>
            <a href="#about" className="nav-item">About Us</a>
            <a href="#products" className="nav-item">Products</a>
            <a href="#pillars" className="nav-item">Our Focus</a>
            <a href="#founder" className="nav-item">Founder</a>
            <a href="#community" className="nav-item">Sponsors</a>
            <a href="#contact" className="nav-item">Contact Us</a>
            <a href="#products" className="neo-btn neo-btn-sm neo-btn-black">Shop Catalog</a>
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
      <section className="section" id="hero" style={{ background: 'var(--color-bg)', borderBottom: 'var(--border-thick)' }}>
        <div className="container hero-layout">
          <div className="hero-content-left">
            <div className="neo-box-accent" style={{ marginBottom: '1.5rem', backgroundColor: 'var(--color-black)', color: 'var(--color-white)' }}>
              ⚡ Real Tools, Built by Practitioners
            </div>

            <h1 className="hero-main-title" style={{ fontFamily: 'var(--font-heading)', fontWeight: '800' }}>
              Products built by<br />
              <span style={{ background: 'var(--color-black)', color: 'var(--color-white)', padding: '0 10px', display: 'inline-block' }}>PEOPLE</span> who<br />
              build tech
            </h1>

            <p className="hero-main-subtitle">
              Dragoz is a marketplace and knowledge hub for real tech products — IoT gadgets, security tools, and hardware — built and vetted by engineers who actually use this stuff every day. No filler, no hype. Just tools that work.
            </p>

            {/* Interactive Search input filtering the products below */}
            <div className="hero-search-wrap">
              <span className="hero-search-icon">🔍</span>
              <input 
                type="text" 
                className="hero-search-input" 
                placeholder="SEARCH FOR TOOLS..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="hero-ctas">
              <a href="#products" className="neo-btn neo-btn-primary">Explore Products</a>
              <a href="#about" className="neo-btn">Read the Docs</a>
              <a href="#founder" className="neo-btn neo-btn-black">Meet Founder</a>
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
                <div className="visual-title">dragoz-catalog-terminal</div>
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.85rem', lineHeight: '1.6', color: 'var(--color-black)' }}>
                <p style={{ color: '#666666' }}># Authenticated as practitioner-level</p>
                <p><span style={{ color: 'var(--color-accent)' }}>$</span> dragoz init --powered-by "Secure Worldz"</p>
                <p style={{ color: 'var(--color-green)' }}>[SUCCESS] Security modules verified</p>
                <p style={{ color: 'var(--color-green)' }}>[SUCCESS] AI automation modules verified</p>
                <p style={{ color: 'var(--color-green)' }}>[SUCCESS] Tech hardware components loaded</p>
                <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>[STATUS] Vetted by engineers. 0% filler.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS DRAGOZ / ABOUT US ===== */}
      <section className="section" id="about" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="story-layout">
            <div>
              <div className="neo-box-accent" style={{ marginBottom: '1.25rem' }}>01. What is Dragoz?</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Designed by Practitioners, for Practitioners</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333333', marginBottom: '1.5rem' }}>
                Every product listed here has been built, tested, and refined by people working hands-on in cybersecurity, AI, and hardware engineering — not marketing teams guessing what creators need.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#333333', marginBottom: '2rem' }}>
                Dragoz is proudly powered by <strong>Secure Worldz</strong>, a multi-domain tech and security company offering cybersecurity services, web/app development, AI development, and training through Proworldz Academy.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a href="#hero" className="neo-btn neo-btn-sm">Set Up Dragoz Tool</a>
                <a href="#products" className="neo-btn neo-btn-sm neo-btn-primary">Browse Catalog</a>
              </div>
            </div>

            <div>
              <div className="neo-card" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Our Main Goal</h3>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#444444' }}>
                  To build real cybersecurity and AI-driven tech products, and make the knowledge behind them open to the community that helped shape them.
                </p>
                <div style={{ borderLeft: '4px solid var(--color-accent)', paddingLeft: '1rem', marginTop: '1.5rem', fontStyle: 'italic', fontWeight: '600' }}>
                  "To put honest, well-documented, practitioner-tested tools into the hands of creators, engineers, and hobbyists."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS CATALOG ===== */}
      <section className="section" id="products" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div className="neo-box-accent" style={{ marginBottom: '1rem', background: 'var(--color-accent)', color: 'var(--color-white)' }}>02. Products Catalog</div>
              <h2 style={{ fontSize: '2.5rem' }}>Marketplace</h2>
            </div>

            {/* Filter controls matching reference design */}
            <div className="filter-tabs">
              {['ALL', 'BUG BOUNTY', 'DEVELOPMENT'].map((cat) => (
                <button 
                  key={cat} 
                  className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="neo-card" style={{ textAlign: 'center', padding: '4rem' }}>
              <h3>No products found matching filters.</h3>
              <p style={{ marginTop: '1rem' }}>Clear your search query to see the full list.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map((p) => (
                <div key={p.id} className="neo-card product-item-card">
                  <div className="product-logo-badge">{p.icon}</div>
                  <div className="neo-box-accent" style={{ alignSelf: 'flex-start', marginBottom: '1.25rem', fontSize: '0.75rem' }}>
                    {p.badge}
                  </div>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{p.title}</h3>
                  <p style={{ color: '#444444', fontSize: '0.95rem', marginBottom: '2rem', flexGrow: 1 }}>{p.desc}</p>
                  
                  <div className="product-meta-row">
                    <span className="price-striked">${p.originalPrice}</span>
                    <span className="price-box">${p.price}</span>
                  </div>

                  <a href="#contact" className="neo-btn neo-btn-black btn-full" style={{ gap: '0.5rem' }}>
                    <span>BUY</span>
                    <span style={{ fontSize: '1.15rem' }}>🔗</span>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== CORE FOCUS PILLARS ===== */}
      <section className="section" id="pillars" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="neo-box-accent" style={{ marginBottom: '1rem' }}>03. Core Pillars</div>
            <h2 style={{ fontSize: '2.5rem' }}>Our Main Focus</h2>
          </div>

          <div className="pillars-container">
            {CORE_PILLARS.map((pillar, i) => (
              <div key={i} className="pillar-item-card">
                <div className="pillar-icon-box">{pillar.icon}</div>
                <h3 className="pillar-title-text">{pillar.title}</h3>
                <p style={{ color: '#444444', lineHeight: '1.6' }}>{pillar.desc}</p>
                <div className="pillar-tags-list">
                  {pillar.tags.map((t, idx) => (
                    <span key={idx} className="pillar-tag-badge">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY DRAGOZ ===== */}
      <section className="section" id="why" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="neo-box-accent" style={{ marginBottom: '1rem', background: 'var(--color-accent)', color: 'var(--color-white)' }}>04. Why Dragoz</div>
            <h2 style={{ fontSize: '2.5rem' }}>The Practitioner Standard</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {WHY_DRAGOZ.map((item, i) => (
              <div key={i} className="neo-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ color: '#444444', lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR STORY & MISSION ===== */}
      <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="story-layout" style={{ marginBottom: '4rem' }}>
            <div>
              <div className="neo-box-accent" style={{ marginBottom: '1rem' }}>05. About Us</div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Our Story</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#444444', marginBottom: '1.5rem' }}>
                Dragoz started as a simple idea: the best tech products aren't designed in boardrooms — they're built by the people who actually break, fix, and rebuild systems for a living. What began as an internal toolkit for practitioners grew into a full marketplace and documentation platform for real, practitioner-built tech.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#444444' }}>
                We're part of the <strong>Secure Worldz</strong> family, alongside Proworldz Academy, giving Dragoz direct access to a deep bench of security engineers, red teamers, developers, and AI builders — the same people who create and stress-test every product we release.
              </p>
            </div>

            <div>
              <div className="neo-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>What We Do</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontWeight: '600' }}>
                  <li>🔐 Cyber Security — tools, research, and defense</li>
                  <li>🤖 AI Development — automation built for creators</li>
                  <li>🛠️ Tech Product Dev — usable hardware and software</li>
                  <li>📝 Guides &amp; Documentation — clear setups &amp; troubleshooting</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <h3 style={{ marginBottom: '2rem', textTransform: 'uppercase' }}>Our Core Values</h3>
            <div className="neo-card" style={{ padding: '0' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: 'var(--border-thick)', background: 'var(--color-bg)' }}>
                    <th style={{ padding: '1rem 1.5rem', fontWeight: '800' }}>Value</th>
                    <th style={{ padding: '1rem 1.5rem', fontWeight: '800' }}>What it means</th>
                  </tr>
                </thead>
                <tbody>
                  {VALUES_DATA.map((v, i) => (
                    <tr key={i} style={{ borderBottom: i < VALUES_DATA.length - 1 ? 'var(--border-thin)' : 'none' }}>
                      <td style={{ padding: '1.25rem 1.5rem', fontWeight: '700', textTransform: 'uppercase' }}>{v.value}</td>
                      <td style={{ padding: '1.25rem 1.5rem', color: '#444444' }}>{v.definition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOUNDER SECTION ===== */}
      <section className="section" id="founder" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div className="neo-box-accent" style={{ marginBottom: '1.5rem', background: 'var(--color-accent)', color: 'var(--color-white)' }}>06. Meet Our Founder</div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Jaiganesh Lakshmanan</h2>

          <div className="founder-layout-card">
            <div className="founder-avatar-box">
              JL
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Founder &amp; CEO, Secure Worldz</h3>
              <p style={{ color: 'var(--color-accent)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Founder, Drago &amp; Proworldz</p>
              
              <p className="founder-bio-text" style={{ color: '#333333' }}>
                With over 10 years of experience in technology and cybersecurity, Jaiganesh Lakshmanan has worked with Fortune 10+ companies to strengthen their security infrastructure. He is the founder of both <strong>Drago</strong> (the Dragoz product line) and <strong>Proworldz Academy</strong>, and has personally trained over 1,000 students across cybersecurity, ethical hacking, AI development, and business growth.
              </p>

              <div className="founder-quote-box">
                "Security is not a product, but a process. My goal is to teach students how to think like both defender and attacker — and to understand how technology drives real business value."
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                <span className="pillar-tag-badge">Technology Speaker</span>
                <span className="pillar-tag-badge">Ethical Hacker</span>
                <span className="pillar-tag-badge">AI Developer</span>
                <span className="pillar-tag-badge">Business Growth Speaker</span>
              </div>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a href="#" className="neo-btn neo-btn-sm neo-btn-primary">View Founder Portfolio</a>
                <a href="#" className="neo-btn neo-btn-sm">Connect on Instagram</a>
                <a href="#" className="neo-btn neo-btn-sm">Connect on YouTube</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY SPONSORS & PARTNERS ===== */}
      <section className="section" id="community" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="neo-box-accent" style={{ marginBottom: '1rem' }}>07. Sponsors &amp; Partners</div>
            <h2 style={{ fontSize: '2.5rem' }}>Built with our Community</h2>
          </div>

          <div className="neo-card" style={{ marginBottom: '4rem', padding: '3rem' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Drago Community — Open Source &amp; Nonprofit</h3>
            <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: '1.6', marginBottom: '2rem' }}>
              The Drago Community is the nonprofit, open-source arm behind Dragoz. It exists to give cybersecurity researchers, AI builders, and product engineers a free, collaborative space to build, share, and learn — separate from the commercial side of the business.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="neo-btn neo-btn-sm neo-btn-primary">Join the Drago Community</a>
              <a href="#" className="neo-btn neo-btn-sm">View Open Source Projects</a>
              <a href="#" className="neo-btn neo-btn-sm">Contribute</a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h3>Community Sponsor</h3>
              <div className="neo-card" style={{ marginTop: '1.5rem', padding: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', background: '#000', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>CV</div>
                  <h4>Cyber Voyage</h4>
                </div>
                <p style={{ color: '#444444' }}>Supporting our mission to bring practitioner-built tools and documentation to creators and security enthusiasts worldwide.</p>
              </div>
            </div>

            <div>
              <h3>Trusted Partner Network</h3>
              <p style={{ color: '#666666', marginBottom: '1.5rem' }}>Dragoz sits alongside a network of organizations already collaborating with Secure Worldz:</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {PARTNER_NETWORK.map((partner, i) => (
                  <div key={i} className="neo-card" style={{ padding: '1rem', textAlign: 'center' }}>
                    <strong style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.9rem' }}>{partner.name}</strong>
                    <span style={{ fontSize: '0.75rem', color: '#666666' }}>{partner.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="neo-card" style={{ marginTop: '4rem', padding: '3rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Become a Sponsor</h3>
            <p style={{ color: '#444444', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.5' }}>
              Interested in sponsoring or collaborating with Dragoz? We work with IoT brands, cybersecurity companies, and creator-focused platforms on co-branded content, product collaborations, and community events.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="neo-btn neo-btn-primary">Apply to Sponsor</a>
              <a href="mailto:sponsors@dragotool.shop" className="neo-btn">Partnership Inquiries &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="section" id="faq" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="neo-box-accent" style={{ marginBottom: '1rem', background: 'var(--color-accent)', color: 'var(--color-white)' }}>08. FAQ</div>
            <h2 style={{ fontSize: '2.5rem' }}>Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion-container">
            {[
              {
                q: "Who builds the tools on Dragoz?",
                a: "Every product listed here has been built, tested, and refined by practitioners working hands-on in cybersecurity, AI, and hardware engineering under the Secure Worldz family."
              },
              {
                q: "Is the Drago Community open source?",
                a: "Yes. The Drago Community is the nonprofit, open-source arm behind Dragoz, providing builders with free access to collaborative environments, tools, and research repositories."
              },
              {
                q: "What training courses do you support?",
                a: "Through Proworldz Academy, we offer certifications, ethical hacking training, AI systems engineering programs, and client-vetted modules."
              },
              {
                q: "How can I become a sponsor or partner?",
                a: "We welcome partnerships with security tool brands and creator networks. Reach out to our sponsor line at sponsors@dragotool.shop to apply."
              }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="faq-card-item"
                onClick={() => toggleFaq(i)}
              >
                <div className="faq-header">
                  <span>{faq.q}</span>
                  <span className="faq-toggle">{activeFaqIndex === i ? '−' : '+'}</span>
                </div>
                {activeFaqIndex === i && (
                  <div className="faq-body">
                    <p style={{ color: '#444444', lineHeight: '1.6' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="section" id="contact" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div style={{ marginBottom: '4rem' }}>
            <div className="neo-box-accent" style={{ marginBottom: '1rem' }}>09. Contact Us</div>
            <h2 style={{ fontSize: '2.5rem' }}>Get in Touch</h2>
            <p style={{ color: '#666666', marginTop: '0.5rem' }}>Have a question about a product, documentation, sponsorship, or partnership? Reach out — we typically respond within a few business hours.</p>
          </div>

          <div className="contact-layout-grid">
            <div className="contact-info-list">
              <div className="contact-info-card">
                <div className="contact-icon-badge">✉</div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: '#666666', textTransform: 'uppercase' }}>General Inquiries</h4>
                  <strong>hello@dragotool.shop</strong>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-icon-badge">🤝</div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: '#666666', textTransform: 'uppercase' }}>Sponsorships</h4>
                  <strong>sponsors@dragotool.shop</strong>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-icon-badge">⚙</div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: '#666666', textTransform: 'uppercase' }}>Support</h4>
                  <strong>support@dragotool.shop</strong>
                </div>
              </div>
              <div className="contact-info-card">
                <div className="contact-icon-badge">📍</div>
                <div>
                  <h4 style={{ fontSize: '0.85rem', color: '#666666', textTransform: 'uppercase' }}>HQ Address</h4>
                  <strong>Remote-first, serving clients globally</strong>
                </div>
              </div>
            </div>

            <div>
              <div className="neo-card" style={{ padding: '3rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send Us Your Requirements</h3>
                <form onSubmit={handleContactSubmit} className="form-group-wrap">
                  <div className="form-field-group">
                    <label className="form-field-label">Your Name</label>
                    <input 
                      type="text" 
                      className="form-input-element" 
                      placeholder="Jane Doe" 
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                    />
                  </div>
                  
                  <div className="form-field-group">
                    <label className="form-field-label">Your Email</label>
                    <input 
                      type="email" 
                      className="form-input-element" 
                      placeholder="jane@example.com" 
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="form-field-label">Inquiry Type</label>
                    <select 
                      className="form-input-element"
                      value={contactForm.type}
                      onChange={(e) => setContactForm({ ...contactForm, type: e.target.value })}
                    >
                      <option value="">Select Option</option>
                      <option value="General">General Question</option>
                      <option value="Sponsorship">Sponsorship &amp; Partnerships</option>
                      <option value="Support">Product Support</option>
                    </select>
                  </div>

                  <div className="form-field-group">
                    <label className="form-field-label">Message</label>
                    <textarea 
                      className="form-input-element" 
                      rows="4" 
                      placeholder="How can our practitioners help you?"
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

                <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', borderTop: 'var(--border-thin)', paddingTop: '1.5rem' }}>
                  <a href="#" className="footer-link-item" style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Schedule a Call</a>
                  <a href="#" className="footer-link-item" style={{ fontSize: '0.85rem', fontWeight: 'bold' }}>Report a Docs Issue</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER SECTION ===== */}
      <footer className="footer-section-box">
        <div className="container">
          <div className="footer-layout-grid">
            <div>
              <a href="#" className="logo-wrap" style={{ color: '#fff', marginBottom: '1.5rem' }}>
                <DragozLogo size={36} color="#ffffff" />
                <span>DRAGOZ</span>
              </a>
              <p style={{ color: '#888888', fontSize: '0.9rem', lineHeight: '1.6' }}>
                Real tech products created and vetting by hands-on engineering practitioners who work with cybersecurity every day.
              </p>
            </div>

            <div>
              <span className="footer-col-title">Navigation</span>
              <ul className="footer-links-list">
                <li><a href="#about" className="footer-link-item">About Us</a></li>
                <li><a href="#products" className="footer-link-item">Catalog</a></li>
                <li><a href="#founder" className="footer-link-item">Founder</a></li>
                <li><a href="#community" className="footer-link-item">Sponsors</a></li>
                <li><a href="#faq" className="footer-link-item">FAQs</a></li>
              </ul>
            </div>

            <div>
              <span className="footer-col-title">Quick Links</span>
              <ul className="footer-links-list">
                <li><a href="#hero" className="footer-link-item">Getting Started</a></li>
                <li><a href="#community" className="footer-link-item">Open Source Community</a></li>
                <li><a href="#contact" className="footer-link-item">Report Docs Issue</a></li>
              </ul>
            </div>

            <div>
              <span className="footer-col-title">Follow Us</span>
              <ul className="footer-links-list">
                <li><a href="#" className="footer-link-item">Instagram</a></li>
                <li><a href="#" className="footer-link-item">YouTube Channel</a></li>
                <li><a href="#" className="footer-link-item">WhatsApp Channel</a></li>
                <li><a href="https://secureworldz.pro/" target="_blank" rel="noopener noreferrer" className="footer-link-item">Secure Worldz</a></li>
              </ul>
            </div>

            <div>
              <span className="footer-col-title">Stay Updated</span>
              <p style={{ color: '#888888', fontSize: '0.85rem', marginBottom: '1rem' }}>Get verified product releases directly into your inbox.</p>
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
