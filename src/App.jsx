import React, { useState, useEffect } from 'react';

// Supabase Credentials - Paste your details here to enable database-backed registrations
const SUPABASE_URL = ""; 
const SUPABASE_ANON_KEY = ""; 

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

const CAREER_TRENDS = [
  {
    category: "Cybersecurity",
    trends: [
      { id: 1, title: "AI-powered threat detection & autonomous SOCs", desc: "AI/ML systems now spot anomalies, triage alerts, and even contain incidents with minimal human intervention, easing analyst burnout." },
      { id: 2, title: "Agentic AI as a new attack surface", desc: "Autonomous AI agents used by employees and developers create fresh, often unmanaged, entry points that security teams must govern." },
      { id: 3, title: "Zero Trust architecture goes mainstream", desc: "\"Never trust, always verify\" is replacing perimeter-based defense, with continuous verification of every user and device." },
      { id: 4, title: "Identity-centric security & passkeys", desc: "Adaptive MFA, passkeys, and continuous risk scoring are becoming the primary defense against credential theft." },
      { id: 5, title: "Deepfake & synthetic media defense", desc: "AI-based content verification (voice, video, metadata analysis) is now essential to confirm the authenticity of communications." },
      { id: 6, title: "Quantum-readiness / post-quantum cryptography", desc: "Organizations are starting migration to quantum-safe encryption ahead of future quantum decryption threats." },
      { id: 7, title: "AI-driven attacks from adversaries", desc: "Attackers use AI to automate vulnerability discovery and scale social engineering, raising the sophistication of threats." },
      { id: 8, title: "Ransomware resilience & automated incident response", desc: "Focus is shifting from prevention alone to real-time detection, containment, and recovery frameworks." },
      { id: 9, title: "Supply chain & multi-cloud security challenges", desc: "Inconsistent controls across AWS, Azure, GCP, and on-prem systems make unified visibility a growing priority." },
      { id: 10, title: "Cybersecurity skills shortage", desc: "A persistent lack of skilled analysts and DevSecOps talent is pushing companies toward managed security services and automation." }
    ]
  },
  {
    category: "Artificial Intelligence (AI)",
    trends: [
      { id: 1, title: "Agentic AI in production", desc: "AI systems are moving from experimental assistants to autonomous agents that plan, decide, and execute multi-step tasks with little human input." },
      { id: 2, title: "Multimodal AI", desc: "Models that understand text, voice, image, and code together are becoming the norm, enabling more natural interactions." },
      { id: 3, title: "AI + IoT (AIoT) convergence", desc: "AI is increasingly embedded directly into connected devices for real-time, on-device decision-making." },
      { id: 4, title: "Edge AI & smaller, efficient models", desc: "Deploying leaner models closer to data sources cuts latency, bandwidth use, and energy costs." },
      { id: 5, title: "AI-augmented software development", desc: "Coding assistants now handle large portions of debugging, testing, and boilerplate work, changing how developers spend their time." },
      { id: 6, title: "Enterprise-wide AI infrastructure (\"AI superfactories\")", desc: "Companies are shifting from siloed servers to coordinated, cloud-distributed AI compute grids." },
      { id: 7, title: "AI in healthcare at scale", desc: "Diagnostic support, predictive analytics, and virtual care assistants are moving from pilots into real, patient-facing use." },
      { id: 8, title: "AI governance & responsible AI practices", desc: "Growing regulatory attention is pushing organizations to build oversight layers and testing for AI misuse." },
      { id: 9, title: "Human-AI collaboration in the workplace", desc: "AI is augmenting roles rather than fully replacing them — drafting content, analyzing sentiment, and flagging risks for human review." },
      { id: 10, title: "Questions around the AI investment bubble", desc: "Analysts are debating whether current AI spending is sustainable, with a growing focus on measurable ROI over hype." }
    ]
  },
  {
    category: "Internet of Things (IoT)",
    trends: [
      { id: 1, title: "AIoT (AI + IoT convergence)", desc: "Devices are shifting from passive data collectors to active, AI-powered decision-makers." },
      { id: 2, title: "Edge computing & on-device intelligence", desc: "Processing data closer to where it's generated reduces latency and reliance on constant cloud connectivity." },
      { id: 3, title: "Digital twins", desc: "Real-time virtual replicas of physical assets now let engineers test changes and predict failures before they happen." },
      { id: 4, title: "Explosive device growth", desc: "The number of connected devices is projected to climb past 30 billion by 2030, driven by industrial and enterprise adoption." },
      { id: 5, title: "IoT security by design", desc: "As attack surfaces grow, security mesh architectures and built-in protections are becoming standard rather than optional." },
      { id: 6, title: "Hybrid & satellite connectivity", desc: "Combining cellular, LPWAN, and satellite links is enabling reliable coverage for remote and mobile IoT fleets." },
      { id: 7, title: "eSIM & unified connectivity management", desc: "New standards let enterprises manage device connectivity remotely across countries and carriers." },
      { id: 8, title: "Computer vision at the edge", desc: "Vision-based IoT is expanding beyond narrow inspection tasks into broader, real-time monitoring roles." },
      { id: 9, title: "Sustainable & energy-efficient IoT", desc: "Energy-harvesting devices and low-power design are gaining priority as device counts scale up." },
      { id: 10, title: "Smart cities & city-scale platforms", desc: "Municipalities are unifying mobility, utilities, and public safety data into shared IoT-driven operating systems." }
    ]
  },
  {
    category: "Development (Software Engineering)",
    trends: [
      { id: 1, title: "AI-assisted coding & agentic developer tools", desc: "AI copilots now handle a large share of code generation, debugging, and testing, letting developers focus on architecture and logic." },
      { id: 2, title: "Low-code / no-code platforms", desc: "These tools are letting non-developers build functional apps, speeding up delivery but raising new governance concerns." },
      { id: 3, title: "Cloud-native & multicloud architectures", desc: "Microservices and multicloud strategies (AWS, Azure, GCP) are now standard for scalability and resilience." },
      { id: 4, title: "DevSecOps", desc: "Security is being built directly into the development pipeline rather than bolted on afterward." },
      { id: 5, title: "Edge computing for apps", desc: "Real-time, low-latency applications are pushing more processing to the edge rather than centralized servers." },
      { id: 6, title: "Zero Trust in application design", desc: "Security principles once reserved for networks are now shaping how software itself is architected." },
      { id: 7, title: "WebAR & immersive web experiences", desc: "Browser-based AR, powered by faster rendering and 5G, is removing friction from immersive experiences." },
      { id: 8, title: "Sustainable / green coding practices", desc: "Developers are optimizing for energy efficiency and choosing eco-friendly cloud providers." },
      { id: 9, title: "Talent shortage in senior/specialized roles", desc: "Demand is outpacing supply for engineers skilled in AI integration, cybersecurity, and cloud-native systems." },
      { id: 10, title: "Quantum computing on the horizon", desc: "Still early-stage, but quantum-aware development practices are starting to enter long-term technical roadmaps." }
    ]
  }
];

// Dragon Loader — uses the real brand logo with a professional fire glow
function DragonLoader() {
  return (
    <div className="dragon-loader-overlay">
      <div className="loader-content-wrap">

        {/* Glow ring + logo */}
        <div className="dragon-logo-ring">
          <div className="dragon-logo-glow-outer" />
          <div className="dragon-logo-glow-inner" />
          <img
            src="/logo.png"
            alt="Dragoz"
            className="dragon-logo-img"
          />
          {/* Fire embers bursting from the bottom of the logo */}
          <div className="fire-embers">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="ember"
                style={{
                  '--tx': `${(Math.random() - 0.5) * 160}px`,
                  '--ty': `${40 + Math.random() * 80}px`,
                  '--size': `${6 + Math.random() * 10}px`,
                  animationDelay: `${(i * 0.12).toFixed(2)}s`,
                  animationDuration: `${(1.2 + Math.random() * 0.8).toFixed(2)}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Wordmark */}
        <div className="loader-wordmark">
          <span className="loader-wordmark-text">DRAGOZ</span>
          <span className="loader-wordmark-sub">by Secure Worldz</span>
        </div>

        {/* Progress bar */}
        <div className="loader-bar-wrap">
          <div className="loader-bar-fill" />
        </div>

      </div>
    </div>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [loading, setLoading] = useState(true);
  const [contactForm, setContactForm] = useState({ name: '', email: '', type: '', message: '' });
  const [contactFeedback, setContactFeedback] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterFeedback, setNewsletterFeedback] = useState('');

  // Event Registration States
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registrationForm, setRegistrationForm] = useState({ name: '', email: '', college: '', department: '' });
  const [registrationFeedback, setRegistrationFeedback] = useState({ type: '', message: '' });
  const [isSubmittingRegister, setIsSubmittingRegister] = useState(false);

  // Admin Panel States
  const [registrations, setRegistrations] = useState([]);
  const [adminSearch, setAdminSearch] = useState('');
  const [isLoadingRegistrations, setIsLoadingRegistrations] = useState(false);
  const [adminFeedback, setAdminFeedback] = useState('');

  // Page Loader Animation duration
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Simple client-side router matching URLs on load
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/admin') || window.location.hash === '#admin') {
      setCurrentPage('admin');
    } else if (path.startsWith('/career') || window.location.hash === '#career') {
      setCurrentPage('career');
    } else if (path.startsWith('/event') || window.location.hash === '#event') {
      setCurrentPage('event');
    }
  }, []);

  // Fetch registrations automatically on admin page mount
  useEffect(() => {
    if (currentPage === 'admin') {
      fetchRegistrations();
    }
  }, [currentPage]);

  const navigateToSection = (targetId) => {
    setCurrentPage('home');
    setMobileMenuOpen(false);
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const navigateToPage = (pageName) => {
    setCurrentPage(pageName);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (pageName === 'admin') {
      window.history.pushState({}, '', '/admin/');
    } else if (pageName === 'career') {
      window.history.pushState({}, '', '/career/');
    } else if (pageName === 'event') {
      window.history.pushState({}, '', '/event/');
    } else {
      window.history.pushState({}, '', '/');
    }
  };

  // Fetch registrations from Supabase REST API & LocalStorage fallback
  const fetchRegistrations = async () => {
    setIsLoadingRegistrations(true);
    setAdminFeedback('');
    let allRegs = [];

    // 1. Get from localStorage
    try {
      const local = localStorage.getItem('drago_registrations');
      if (local) {
        allRegs = JSON.parse(local);
      }
    } catch (e) {
      console.error(e);
    }

    // 2. Get from Supabase if keys exist
    if (SUPABASE_URL && SUPABASE_ANON_KEY) {
      try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/event_registrations?select=*`, {
          method: 'GET',
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json'
          }
        });
        if (res.ok) {
          const supabaseRegs = await res.json();
          // Merge unique supabase items with local items (based on email + event_name or id)
          const merged = [...supabaseRegs];
          allRegs.forEach(localItem => {
            const exists = supabaseRegs.some(sbItem => 
              sbItem.email === localItem.email && sbItem.event_name === localItem.event_name
            );
            if (!exists) {
              merged.push(localItem);
            }
          });
          allRegs = merged;
        } else {
          setAdminFeedback('Note: Connected to Supabase API but failed to fetch. Showing local storage data.');
        }
      } catch (err) {
        console.error(err);
        setAdminFeedback('Note: Supabase connection failed. Showing local storage data.');
      }
    } else {
      setAdminFeedback('Note: Running in offline local fallback mode. Fill your Supabase keys at the top of App.jsx to sync.');
    }

    // Sort by date/id descending
    allRegs.sort((a, b) => new Date(b.created_at || b.id) - new Date(a.created_at || a.id));
    setRegistrations(allRegs);
    setIsLoadingRegistrations(false);
  };

  // Handle Event registration submission
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const { name, email, college, department } = registrationForm;
    if (!name.trim() || !email.trim() || !college.trim() || !department.trim() || !selectedEvent) {
      setRegistrationFeedback({ type: 'error', message: 'All fields are required.' });
      return;
    }

    setIsSubmittingRegister(true);
    setRegistrationFeedback({ type: '', message: '' });

    const newRecord = {
      name: name.trim(),
      email: email.trim(),
      college: college.trim(),
      department: department.trim(),
      event_name: selectedEvent.name,
      created_at: new Date().toISOString()
    };

    let savedLocally = false;
    // 1. Save to local storage first
    try {
      const local = localStorage.getItem('drago_registrations');
      const localList = local ? JSON.parse(local) : [];
      localList.push({ ...newRecord, id: Date.now() });
      localStorage.setItem('drago_registrations', JSON.stringify(localList));
      savedLocally = true;
    } catch (err) {
      console.error(err);
    }

    // 2. POST to Supabase REST API if keys exist
    let supabaseSuccess = false;
    if (SUPABASE_URL && SUPABASE_ANON_KEY) {
      try {
        const res = await fetch(`${SUPABASE_URL}/rest/v1/event_registrations`, {
          method: 'POST',
          headers: {
            'apikey': SUPABASE_ANON_KEY,
            'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
          },
          body: JSON.stringify(newRecord)
        });
        if (res.ok) {
          supabaseSuccess = true;
        }
      } catch (err) {
        console.error(err);
      }
    }

    setIsSubmittingRegister(false);
    if (supabaseSuccess) {
      setRegistrationFeedback({ type: 'success', message: `Registration successful! You have registered for ${selectedEvent.name}.` });
      setRegistrationForm({ name: '', email: '', college: '', department: '' });
      setTimeout(() => setRegisterModalOpen(false), 2000);
    } else if (savedLocally) {
      setRegistrationFeedback({ 
        type: 'success', 
        message: `Registration saved to local storage! (Complete setup by pasting Supabase keys in App.jsx).` 
      });
      setRegistrationForm({ name: '', email: '', college: '', department: '' });
      setTimeout(() => setRegisterModalOpen(false), 2500);
    } else {
      setRegistrationFeedback({ type: 'error', message: 'Failed to submit registration. Please try again.' });
    }
  };

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
      {loading && <DragonLoader />}

      {/* ===== NAVBAR ===== */}
      <header className="nav-bar">
        <div className="container nav-container">
          <a href="#" onClick={(e) => { e.preventDefault(); navigateToSection('hero'); }} className="logo-wrap" aria-label="Dragoz Home">
            <div className="logo-badge">
              <DragozLogo size={20} />
            </div>
            <span style={{ letterSpacing: '0.05em' }}>DRAGOZ</span>
          </a>

          <nav className={`nav-links-wrap ${mobileMenuOpen ? 'active' : ''}`} style={{ display: mobileMenuOpen ? 'flex' : undefined }}>
            <a href="#about" onClick={(e) => { e.preventDefault(); navigateToSection('about'); }} className="nav-link">About Us</a>
            <a href="#pillars" onClick={(e) => { e.preventDefault(); navigateToSection('pillars'); }} className="nav-link">Our Focus</a>
            <button type="button" onClick={() => navigateToPage('event')} className="nav-link">Event</button>
            <a href="#founder" onClick={(e) => { e.preventDefault(); navigateToSection('founder'); }} className="nav-link">Founder</a>
            <a href="#community" onClick={(e) => { e.preventDefault(); navigateToSection('community'); }} className="nav-link">Sponsors</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); navigateToSection('contact'); }} className="nav-link">Contact</a>
            <button type="button" onClick={() => navigateToPage('career')} className="nav-link nav-career-btn">Career</button>
            <a href="https://dragotool.shop/" target="_blank" rel="noopener noreferrer" className="neo-btn neo-btn-sm neo-btn-primary">BUY</a>
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

      {currentPage === 'home' ? (
        <>
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
              <a href="#founder" onClick={(e) => { e.preventDefault(); navigateToSection('founder'); }} className="neo-btn neo-btn-primary">Meet Our Founder</a>
              <a href="#social-media" onClick={(e) => { e.preventDefault(); navigateToSection('social-media'); }} className="neo-btn">Join Community</a>
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
                Dragoz is a marketplace and documentation hub for tools built by practitioners, for practitioners. Every product featured here is designed, tested, and refined by people working hands-on in cybersecurity, AI, and hardware engineering not by marketing teams guessing what builders need.
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
                <h3 style={{ textTransform: 'uppercase', marginBottom: '1rem', borderBottom: 'var(--border-thin)', paddingBottom: '0.5rem' }}>Vetted by Engineers</h3>
                <p style={{ color: '#333333', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                  Every hardware component, IoT tool, and software utility undergoes rigorous hands-on testing by experienced practitioners before listing. We assess security resilience, hardware build quality, and integration capability in active environment labs.
                </p>
                <ul style={{ paddingLeft: '1.25rem', color: '#555555', fontSize: '0.9rem', lineHeight: '1.5', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <li><strong>Security Audits:</strong> Full static and dynamic analysis to prevent backdoors or firmware flaws.</li>
                  <li><strong>Physical Stress Tests:</strong> Checked against heat, latency, and power fluctuations.</li>
                  <li><strong>Field-Verified:</strong> Validated by active red teamers and IoT developers in the field.</li>
                </ul>
              </div>
              <div className="neo-card" style={{ padding: '2rem' }}>
                <h3 style={{ textTransform: 'uppercase', marginBottom: '1rem', borderBottom: 'var(--border-thin)', paddingBottom: '0.5rem' }}>Documentation First</h3>
                <p style={{ color: '#333333', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                  Comprehensive, developer-friendly documentation is a core requirement, not an afterthought. We provide complete setup logs, precise wiring schematics, and interactive API references for every tool to minimize time-to-value.
                </p>
                <ul style={{ paddingLeft: '1.25rem', color: '#555555', fontSize: '0.9rem', lineHeight: '1.5', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <li><strong>Wiring Schematics:</strong> Complete layouts, pin configurations, and connection diagrams.</li>
                  <li><strong>Command Logs:</strong> Preconfigured terminal runs, dependencies, and environment guides.</li>
                  <li><strong>Troubleshooting:</strong> Step-by-step resolution scripts for common hardware and setup errors.</li>
                </ul>
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
                <h3 style={{ marginBottom: '1.25rem', textTransform: 'uppercase', borderBottom: 'var(--border-thin)', paddingBottom: '0.5rem' }}>Our Mission</h3>
                <p style={{ color: '#333333', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                  To democratize access to premium, practitioner-validated security and IoT hardware. We aim to empower the global developer and hacker community by bridging the gap between theoretical knowledge and real-world execution.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: '#555555', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  <div style={{ borderLeft: '3px solid var(--color-accent)', paddingLeft: '0.75rem' }}>
                    <strong>Empowering Builders:</strong> Accelerating skill development and deployment readiness for students and seasoned pros alike.
                  </div>
                  <div style={{ borderLeft: '3px solid var(--color-black)', paddingLeft: '0.75rem' }}>
                    <strong>Security-First Approach:</strong> Demystifying cyber defense by offering accessible, high-fidelity security research gear.
                  </div>
                  <div style={{ borderLeft: '3px solid var(--color-accent)', paddingLeft: '0.75rem' }}>
                    <strong>Community Acceleration:</strong> Backing a nonprofit ecosystem where collaboration, shared knowledge, and code prevail.
                  </div>
                </div>
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
              <a href="#social-media" onClick={(e) => { e.preventDefault(); navigateToSection('social-media'); }} className="neo-btn neo-btn-primary">Join the Drago Community</a>
              <a href="#" className="neo-btn">View Open Source Projects</a>
              <a href="#" className="neo-btn neo-btn-black">Contribute</a>
            </div>
          </div>

          <div style={{ marginTop: '4rem' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Our Values</h3>
            <div className="values-table-wrap" style={{ marginTop: '1.25rem' }}>
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

              <div className="find-us-box" id="social-media">
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
        </>
      ) : currentPage === 'career' ? (
        <section className="section" id="career-page" style={{ background: 'var(--color-bg)', paddingTop: '6rem', minHeight: '60vh' }}>
          <div className="container">
            <button 
              onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className="neo-btn neo-btn-sm" 
              style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              &larr; Back to Home
            </button>

            <div style={{ marginBottom: '3rem' }}>
              <div className="neo-box-accent" style={{ marginBottom: '1rem', backgroundColor: 'var(--color-accent)', color: 'var(--color-white)' }}>Careers & Industry Trends</div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                Top 10 Trends — 2026
              </h1>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#333333', maxWidth: '800px' }}>
                A quick-reference content list for Cybersecurity, AI, IoT, and Development. Check out these key trends to shape your career roadmap and align with modern engineering priorities.
              </p>
            </div>

            <div className="career-grid">
              {CAREER_TRENDS.map((cat, idx) => (
                <div key={idx} className="neo-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', height: 'auto' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: 'var(--border-thin)', paddingBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.4rem', margin: 0, textTransform: 'uppercase' }}>{cat.category}</h3>
                    <span className="neo-box-accent" style={{ fontSize: '0.8rem', background: 'var(--color-accent)', color: '#fff' }}>10 Trends</span>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {cat.trends.map((trend) => (
                      <div key={trend.id} className="trend-item">
                        <div className="trend-number">{trend.id}</div>
                        <div className="trend-content">
                          <h4 className="trend-title">{trend.title}</h4>
                          <p className="trend-desc">{trend.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : currentPage === 'event' ? (
        <section className="section" id="event-page" style={{ background: 'var(--color-bg)', paddingTop: '6rem', minHeight: '60vh' }}>
          <div className="container">
            <button 
              onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
              className="neo-btn neo-btn-sm" 
              style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              &larr; Back to Home
            </button>

            <div style={{ marginBottom: '3rem' }}>
              <div className="neo-box-accent" style={{ marginBottom: '1rem', backgroundColor: 'var(--color-accent)', color: '#fff' }}>Official Events</div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                Dragoz Technology Events
              </h1>
              <p style={{ fontSize: '1.15rem', lineHeight: '1.6', color: '#333333', maxWidth: '800px' }}>
                Join our practitioner-led hackathons, summits, and physical workshops. Select your college event below to register and secure your pass.
              </p>
            </div>

            <div style={{ maxWidth: '650px', margin: '0 auto' }}>
              {[
                {
                  id: 1,
                  name: 'Prathyusha Engineering College Event Registration',
                  college: 'Prathyusha Engineering College',
                  date: 'September 2026',
                  desc: 'Prathyusha Engineering College is a premier autonomous institution affiliated with Anna University, Chennai, accredited with an "A" Grade by NAAC and accredited by the NBA. As a technical and innovation partner with Secure Worldz, the campus plays host to advanced technology seminars, practical cybersecurity workshops, and developer coding camps. Registration is now open to secure candidate/visitor credentials for local campus sessions.'
                }
              ].map(event => (
                <div key={event.id} className="neo-card" style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div>
                    <div style={{ borderBottom: 'var(--border-thin)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                      <h3 style={{ fontSize: '1.8rem', margin: '0 0 0.75rem', textTransform: 'none', lineHeight: '1.2' }}>
                        {event.college}
                      </h3>
                      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <span className="neo-box-accent" style={{ fontSize: '0.8rem', background: 'var(--color-accent)', color: '#fff', padding: '0.25rem 0.6rem' }}>
                          Autonomous Institution
                        </span>
                        <span className="neo-box-accent" style={{ fontSize: '0.8rem', background: 'var(--color-black)', color: '#fff', padding: '0.25rem 0.6rem' }}>
                          NAAC Accredited 'A' Grade
                        </span>
                        <span className="neo-box-accent" style={{ fontSize: '0.8rem', background: '#eeeeee', color: '#000', padding: '0.25rem 0.6rem', border: '1px solid #000' }}>
                          NBA Accredited
                        </span>
                      </div>
                    </div>
                    <p style={{ color: '#333333', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '1rem' }}>
                      {event.desc}
                    </p>
                  </div>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid #e0e0e0', paddingTop: '1.5rem' }}>
                      <span style={{ fontSize: '0.9rem', fontWeight: '800', color: '#555555' }}>📍 Venue: Chennai, India</span>
                      <button 
                        onClick={() => {
                          setSelectedEvent(event);
                          setRegistrationForm({ name: '', email: '', college: event.college, department: '' });
                          setRegistrationFeedback({ type: '', message: '' });
                          setRegisterModalOpen(true);
                        }} 
                        className="neo-btn neo-btn-primary"
                        style={{ padding: '0.75rem 1.5rem' }}
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Calling Vercel site banner */}
            <div style={{ 
              marginTop: '4rem', 
              padding: '2.5rem', 
              border: 'var(--border-thick)', 
              background: 'var(--color-white)', 
              boxShadow: 'var(--shadow-flat-large)',
              textAlign: 'center' 
            }}>
              <h3 style={{ marginBottom: '0.75rem', textTransform: 'uppercase' }}>Looking for more events?</h3>
              <p style={{ color: '#555555', marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                Discover, search, and book tickets for all Secure Worldz summits, red team camps, and technical workshops on our booking portal.
              </p>
              <a href="https://dragoevent.vercel.app/" target="_blank" rel="noopener noreferrer" className="neo-btn neo-btn-black">
                Go to Drago Event Booking Site &rarr;
              </a>
            </div>
          </div>
        </section>
      ) : currentPage === 'admin' ? (
        <section className="section" id="admin-page" style={{ background: 'var(--color-bg)', paddingTop: '6rem', minHeight: '60vh' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <div>
                <div className="neo-box-accent" style={{ marginBottom: '0.5rem', background: 'var(--color-accent)', color: '#fff' }}>Admin Dashboard</div>
                <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Event Registrations</h1>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button 
                  onClick={() => {
                    // Export CSV
                    if (registrations.length === 0) return;
                    const headers = ['ID', 'Name', 'Email', 'College', 'Department', 'Event', 'Date Registered'];
                    const rows = registrations.map((r, index) => [
                      r.id || index + 1,
                      `"${r.name.replace(/"/g, '""')}"`,
                      `"${r.email.replace(/"/g, '""')}"`,
                      `"${r.college.replace(/"/g, '""')}"`,
                      `"${r.department.replace(/"/g, '""')}"`,
                      `"${r.event_name.replace(/"/g, '""')}"`,
                      r.created_at
                    ]);
                    const csvContent = "data:text/csv;charset=utf-8," 
                      + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
                    const encodedUri = encodeURI(csvContent);
                    const link = document.createElement("a");
                    link.setAttribute("href", encodedUri);
                    link.setAttribute("download", `dragoz_event_registrations_${new Date().toISOString().split('T')[0]}.csv`);
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="neo-btn neo-btn-sm"
                  disabled={registrations.length === 0}
                  style={{ opacity: registrations.length === 0 ? 0.6 : 1 }}
                >
                  Export CSV
                </button>
                <button 
                  onClick={fetchRegistrations} 
                  className="neo-btn neo-btn-sm neo-btn-primary"
                >
                  Refresh Data
                </button>
              </div>
            </div>

            {adminFeedback && (
              <div className="neo-box-accent" style={{ width: '100%', marginBottom: '1.5rem', background: '#ffeebb', color: '#664400', border: '2px solid #664400', padding: '0.75rem 1rem' }}>
                {adminFeedback}
              </div>
            )}

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div className="neo-card" style={{ padding: '1.5rem', height: 'auto' }}>
                <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: '800', textTransform: 'uppercase' }}>Total Registrations</span>
                <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0 0' }}>{registrations.length}</h2>
              </div>
              <div className="neo-card" style={{ padding: '1.5rem', height: 'auto' }}>
                <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: '800', textTransform: 'uppercase' }}>Supabase Connection</span>
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  margin: '0.75rem 0 0', 
                  color: SUPABASE_URL ? 'var(--color-accent)' : '#ff5555',
                  textTransform: 'none'
                }}>
                  {SUPABASE_URL ? 'CONNECTED (Online)' : 'OFFLINE (Local Fallback)'}
                </h3>
              </div>
              <div className="neo-card" style={{ padding: '1.5rem', height: 'auto' }}>
                <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: '800', textTransform: 'uppercase' }}>Unique Colleges</span>
                <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0 0' }}>
                  {new Set(registrations.map(r => r.college.toLowerCase())).size}
                </h2>
              </div>
            </div>

            {/* Filter controls */}
            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="text"
                placeholder="Search registrations by name, email, event, or college..."
                value={adminSearch}
                onChange={(e) => setAdminSearch(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>

            {/* Table */}
            <div className="values-table-wrap" style={{ marginTop: '0' }}>
              {isLoadingRegistrations ? (
                <div style={{ padding: '3rem', textAlign: 'center', fontWeight: 'bold' }}>Loading registrations data...</div>
              ) : registrations.length === 0 ? (
                <div style={{ padding: '3rem', textAlign: 'center', fontWeight: 'bold' }}>
                  No registrations found. Run the fetch, register for an event, or setup your database!
                </div>
              ) : (
                <table className="values-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>College</th>
                      <th>Department</th>
                      <th>Event</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {registrations
                      .filter(r => {
                        const search = adminSearch.toLowerCase();
                        return (
                          r.name.toLowerCase().includes(search) ||
                          r.email.toLowerCase().includes(search) ||
                          r.college.toLowerCase().includes(search) ||
                          r.department.toLowerCase().includes(search) ||
                          r.event_name.toLowerCase().includes(search)
                        );
                      })
                      .map((reg, i) => (
                        <tr key={reg.id || i}>
                          <td style={{ fontWeight: '800' }}>{reg.name}</td>
                          <td>{reg.email}</td>
                          <td>{reg.college}</td>
                          <td>{reg.department}</td>
                          <td>
                            <span className="neo-box-accent" style={{ fontSize: '0.75rem', background: '#e0e0e0', color: '#000' }}>
                              {reg.event_name}
                            </span>
                          </td>
                          <td style={{ fontSize: '0.8rem', color: '#666' }}>
                            {new Date(reg.created_at).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
            </div>

            {/* Supabase connection guide */}
            <div className="neo-card" style={{ marginTop: '4rem', padding: '2.5rem', height: 'auto' }}>
              <h3 style={{ marginBottom: '1rem', borderBottom: 'var(--border-thin)', paddingBottom: '0.5rem' }}>Database Configuration Setup</h3>
              <p style={{ color: '#444444', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                To link this project with your Supabase backend database, execute the SQL code below in your Supabase SQL Editor. Then, paste your credentials at the top of <code>src/App.jsx</code>.
              </p>
              
              <pre style={{ 
                background: '#222', 
                color: '#fff', 
                padding: '1.5rem', 
                overflowX: 'auto', 
                fontSize: '0.85rem',
                fontFamily: 'monospace',
                border: '2px solid #000',
                marginBottom: '1.5rem'
              }}>
{`CREATE TABLE IF NOT EXISTS event_registrations (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    college TEXT NOT NULL,
    department TEXT NOT NULL,
    event_name TEXT NOT NULL
);

-- Enable Row Level Security
ALTER TABLE event_registrations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public submissions (Insert)
CREATE POLICY "Allow public insert registrations" 
ON event_registrations FOR INSERT WITH CHECK (true);

-- Create policy to allow admin selects (Select)
CREATE POLICY "Allow public select registrations" 
ON event_registrations FOR SELECT USING (true);`}
              </pre>
            </div>
          </div>
        </section>
      ) : null}

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
                <li><a href="#about" onClick={(e) => { e.preventDefault(); navigateToSection('about'); }} className="footer-link-item">About Us</a></li>
                <li><a href="#pillars" onClick={(e) => { e.preventDefault(); navigateToSection('pillars'); }} className="footer-link-item">Focus</a></li>
                <li><a href="#founder" onClick={(e) => { e.preventDefault(); navigateToSection('founder'); }} className="footer-link-item">Founder</a></li>
                <li><a href="#community" onClick={(e) => { e.preventDefault(); navigateToSection('community'); }} className="footer-link-item">Sponsors</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateToSection('contact'); }} className="footer-link-item">Contact</a></li>
              </ul>
            </div>

            <div>
              <span className="footer-col-title">Quick Links</span>
              <ul className="footer-links-list">
                <li><a href="#hero" onClick={(e) => { e.preventDefault(); navigateToSection('hero'); }} className="footer-link-item">Home</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); navigateToSection('about'); }} className="footer-link-item">About Us</a></li>
                <li><a href="https://dragoevent.vercel.app/" target="_blank" rel="noopener noreferrer" className="footer-link-item">Event Booking Site</a></li>
                <li><a href="#community" onClick={(e) => { e.preventDefault(); navigateToSection('community'); }} className="footer-link-item">Open Source</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); navigateToSection('contact'); }} className="footer-link-item">Contact</a></li>
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

          <div style={{
            borderTop: '2px solid #333',
            paddingTop: '2rem',
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.9rem',
            color: '#bbbbbb'
          }}>
            <span>Official Event Booking Site: <a href="https://dragoevent.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', fontWeight: 'bold', textDecoration: 'underline' }}>https://dragoevent.vercel.app/</a></span>
            <span>Powered by Secure Worldz</span>
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

      {/* ===== REGISTRATION MODAL ===== */}
      {registerModalOpen && selectedEvent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-btn" onClick={() => setRegisterModalOpen(false)}>X</button>
            <div style={{ borderBottom: 'var(--border-thin)', paddingBottom: '0.75rem' }}>
              <div className="neo-box-accent" style={{ fontSize: '0.75rem', marginBottom: '0.5rem', background: 'var(--color-accent)', color: '#fff' }}>College Registration</div>
              <h3 style={{ fontSize: '1.5rem', margin: '0 0 0.5rem', textTransform: 'none', lineHeight: '1.2' }}>{selectedEvent.college}</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', color: '#555555', fontWeight: '600' }}>📍 Chennai, India — Campus Technology Session</p>
            </div>
            
            <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div className="form-field-group">
                <label className="form-field-label" htmlFor="reg-name">Full Name *</label>
                <input
                  id="reg-name"
                  type="text"
                  placeholder="Jane Doe"
                  value={registrationForm.name}
                  onChange={(e) => setRegistrationForm({ ...registrationForm, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-field-group">
                <label className="form-field-label" htmlFor="reg-email">Email Address *</label>
                <input
                  id="reg-email"
                  type="email"
                  placeholder="jane@example.com"
                  value={registrationForm.email}
                  onChange={(e) => setRegistrationForm({ ...registrationForm, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-field-group">
                <label className="form-field-label" htmlFor="reg-college">College / Institution *</label>
                <input
                  id="reg-college"
                  type="text"
                  placeholder="College Name"
                  value={registrationForm.college}
                  onChange={(e) => setRegistrationForm({ ...registrationForm, college: e.target.value })}
                  required
                />
              </div>

              <div className="form-field-group">
                <label className="form-field-label" htmlFor="reg-dept">Department / Major *</label>
                <input
                  id="reg-dept"
                  type="text"
                  placeholder="e.g. Computer Science"
                  value={registrationForm.department}
                  onChange={(e) => setRegistrationForm({ ...registrationForm, department: e.target.value })}
                  required
                />
              </div>

              <button type="submit" disabled={isSubmittingRegister} className="neo-btn neo-btn-black" style={{ marginTop: '0.5rem' }}>
                {isSubmittingRegister ? 'Submitting...' : 'Submit Registration'}
              </button>

              {registrationFeedback.message && (
                <div
                  role="alert"
                  aria-live="polite"
                  style={{
                    padding: '1rem',
                    background: registrationFeedback.type === 'error' ? '#ffdddd' : '#ddffdd',
                    border: '2px solid #000',
                    fontWeight: '700',
                    fontSize: '0.9rem',
                    textAlign: 'center'
                  }}
                >
                  {registrationFeedback.message}
                </div>
              )}
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
