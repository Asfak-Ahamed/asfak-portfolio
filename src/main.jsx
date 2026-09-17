import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const skills = [
  ['React JS', 'Frontend', 90],
  ['JavaScript', 'Frontend', 90],
  ['HTML', 'Frontend', 95],
  ['CSS', 'Frontend', 92],
  ['REST APIs', 'Backend integration', 85],
  ['Java', 'Programming', 87],
  ['SQL', 'Database', 88],
  ['GitHub', 'Version control', 88],
  ['UI/UX', 'Figma', 70],
];

const projects = [
  {
    n: '01',
    title: 'Erupta Symposium Website',
    text: 'A responsive React web application for managing event schedules and registrations, with dynamic event listings, registration forms and smooth navigation across devices.',
    tags: ['React JS', 'JavaScript', 'CSS', 'Responsive Design'],
  },
  {
    n: '02',
    title: 'E-Commerce Website',
    text: 'A responsive React e-commerce application with product listings, product details, shopping cart functionality and user-friendly navigation.',
    tags: ['React JS', 'JavaScript', 'CSS', 'REST APIs'],
  },
  {
  n: '03',
  title: 'React CRUD User Management',
  text: 'A user management application implementing Create, Read, Update and Delete operations with REST API integration and a responsive interface.',
  tags: ['React JS', 'REST APIs', 'CRUD', 'JavaScript'],
  live: 'https://asfak-ahamed.github.io/react-user-management-system/',
},
];

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Journey', 'Contact'];
const OBSERVED_SECTION_IDS = ['home', ...NAV_LINKS];

// ---------------------------------------------------------------------------
// Small presentational components
// ---------------------------------------------------------------------------

function SectionTitle({ num, title, sub }) {
  return (
    <div className="section-title">
      <span>{num} /</span>
      <h2>{title}</h2>
      <p>{sub}</p>
    </div>
  );
}

function Stat({ n, l }) {
  return (
    <div className="stat">
      <strong>{n}</strong>
      <span>{l}</span>
    </div>
  );
}

function Timeline({ year, title, text }) {
  return (
    <div className="timeline-item">
      <div className="dot" />
      <div>
        <span>{year}</span>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Header / navigation
// ---------------------------------------------------------------------------

function Header({ active, menuOpen, onToggleMenu, onCloseMenu }) {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="brand" onClick={onCloseMenu}>
          Asfak<span>.Dev</span>
        </a>

        <button className="menu" onClick={onToggleMenu} aria-label="Toggle navigation">
          {menuOpen ? '×' : '☰'}
        </button>

        <div className={`navlinks ${menuOpen ? 'show' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={'#' + link}
              className={active === link ? 'active' : ''}
              onClick={onCloseMenu}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

// ---------------------------------------------------------------------------
// Sections
// ---------------------------------------------------------------------------

function HeroSection() {
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <div className="status">
          <i />
          Open to frontend developer roles
        </div>

        <p className="kicker">Hello, I'm</p>

        <h1>
          Asfak <span>Ahamed</span>
          <br />
          <strong>Frontend Developer.</strong>
        </h1>

        <p className="hero-text">
          A Computer Science graduate focused on building responsive, user-friendly web
          applications with React.js, JavaScript and modern frontend technologies.
        </p>

        <div className="actions">
          <a className="btn primary" href="#Projects">
            View Projects <b>↗</b>
          </a>
         <a className="btn" href="/asfak-portfolio/Asfak_Ahamed_CV.pdf" download>
  Download Resume ↓
     </a>
          <a
            className="btn"
            href="https://linkedin.com/in/asfak-ahamed7"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>

        <div className="quick">
          <span>📍 Madurai, Tamil Nadu</span>
          <span>🎓 B.E. CSE · 7.8 CGPA</span>
        </div>
      </div>

      <div className="hero-card">
        <div className="orb orb1" />
        <div className="orb orb2" />

        <div className="code-window">
          <div className="window-top">
            <span />
            <span />
            <span />
            <em>developer.js</em>
          </div>
          <pre>
            {/* NOTE: kept as a single JSX text run — the "\n" sequences here are
                literal characters (not real newlines), matching the original
                source exactly, so reformatting this across lines is avoided
                to prevent JSX whitespace collapsing from changing the output. */}
            <code>
              <b>const</b> developer = {'{'}<br />
              &nbsp;&nbsp;name: <mark>"Asfak Ahamed A"</mark>,<br />
              &nbsp;&nbsp;role: <mark>"Frontend Developer"</mark>,<br />
              &nbsp;&nbsp;stack: [<mark>"React"</mark>, <mark>"JavaScript"</mark>],<br />
              &nbsp;&nbsp;focus: <mark>"Clean UI + UX"</mark>,<br />
              &nbsp;&nbsp;mindset: <mark>"Build. Learn. Improve."</mark><br />
              {'}'}
            </code>
          </pre>
        </div>

        <div className="floating-card">
          <span>React.js</span>
          <small>building interfaces</small>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const [aboutTab, setAboutTab] = useState("technical");

  return (
    <section id="About" className="section container">
      <SectionTitle
        num="01"
        title="About me"
        sub="A quick look at the developer behind the code."
      />

      <div className="about-hud">
        <article className="about-profile-card">
          <div className="about-card-top">
            <span className="about-card-label">PROFILE // 001</span>
            <span className="about-live"><i /> ONLINE</span>
          </div>

          <div className="about-identity">
            <div className="about-avatar">AA</div>
            <div>
              <h3>Asfak Ahamed</h3>
              <span>Frontend Developer</span>
            </div>
          </div>

          <div className="about-intro">
            <span className="about-command">&gt; Who Am I</span>
            <p>
              I recently completed my B.E. in Computer Science and Engineering from
              Sethu Institute of Technology. I'm focused on frontend development and
              enjoy creating responsive interfaces that are simple to use and easy to maintain.
            </p>
          </div>

          <div className="about-details">
            <div>
              <small>EDUCATION</small>
              <strong>B.E. Computer Science</strong>
            </div>
            <div>
              <small>STATUS</small>
              <strong>Open to Opportunities</strong>
            </div>
          </div>

          <div className="about-tags">
            <span>React</span>
            <span>REST APIs</span>
            <span>Git & GitHub</span>
            <span>UI/UX</span>
          </div>
        </article>

        <article className="about-console">
          <div className="about-console-head">
            <div className="about-tabs">
              <button
                type="button"
                className={`about-tab ${aboutTab === "technical" ? "active" : ""}`}
                data-active={aboutTab === "technical"}
                onClick={() => setAboutTab("technical")}
              >
                &lt;/&gt; Technical Skills
              </button>
              <button
                type="button"
                className={`about-tab ${aboutTab === "soft" ? "active" : ""}`}
                data-active={aboutTab === "soft"}
                onClick={() => setAboutTab("soft")}
              >
                ✦ Soft Skills
              </button>
            </div>
            <span className="about-console-dots">● ● ●</span>
          </div>

          <div className="about-console-body">
            {aboutTab === "technical" ? (
              <>
                <div className="about-terminal-line">
                  <span className="prompt">$</span> developer.profile --skills
                </div>

                <div className="about-skill-matrix">
                  <div className="about-skill-item">
                    <div><span>React JS</span><b>90%</b></div>
                    <i><em style={{ width: "90%" }} /></i>
                  </div>
                  <div className="about-skill-item">
                    <div><span>JavaScript</span><b>90%</b></div>
                    <i><em style={{ width: "90%" }} /></i>
                  </div>
                  <div className="about-skill-item">
                    <div><span>HTML / CSS</span><b>94%</b></div>
                    <i><em style={{ width: "94%" }} /></i>
                  </div>
                  <div className="about-skill-item">
                    <div><span>Java / SQL</span><b>88%</b></div>
                    <i><em style={{ width: "88%" }} /></i>
                  </div>
                  <div className="about-skill-item">
                    <div><span>REST APIs</span><b>85%</b></div>
                    <i><em style={{ width: "85%" }} /></i>
                  </div>
                  <div className="about-skill-item">
                    <div><span>UI / UX</span><b>70%</b></div>
                    <i><em style={{ width: "70%" }} /></i>
                  </div>
                </div>

                <div className="about-code-note">
                  <span>01</span>
                  <p>
                    Practical work includes React applications, REST API integration,
                    e-commerce functionality and CRUD operations.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="about-terminal-line">
                  <span className="prompt">$</span> developer.profile --soft-skills
                </div>

                <div className="about-soft-grid">
                  <div className="about-soft-card">
                    <span className="about-soft-icon">⌁</span>
                    <div>
                      <small>01 // STRENGTH</small>
                      <h3>Problem Solving</h3>
                      <p>Break problems into clear, practical steps.</p>
                    </div>
                  </div>

                  <div className="about-soft-card">
                    <span className="about-soft-icon">↯</span>
                    <div>
                      <small>02 // STRENGTH</small>
                      <h3>Quick Learner</h3>
                      <p>Adapt quickly to new tools and technologies.</p>
                    </div>
                  </div>

                  <div className="about-soft-card">
                    <span className="about-soft-icon">◎</span>
                    <div>
                      <small>03 // STRENGTH</small>
                      <h3>Team Collaboration</h3>
                      <p>Communicate, contribute and work well with a team.</p>
                    </div>
                  </div>

                  <div className="about-soft-card">
                    <span className="about-soft-icon">◉</span>
                    <div>
                      <small>04 // STRENGTH</small>
                      <h3>Attention to Detail</h3>
                      <p>Care about clean interfaces and polished results.</p>
                    </div>
                  </div>
                </div>

                <div className="about-code-note soft-note">
                  <span>02</span>
                  <p>
                    Mindset: stay curious, communicate clearly, and keep improving
                    through practical projects.
                  </p>
                </div>
              </>
            )}
          </div>
        </article>
      </div>

      <div className="about-bottom-grid">
        <div className="about-mini-card">
          <span className="about-mini-icon">01</span>
          <div>
            <small>FOCUS</small>
            <strong>Clean UI + UX</strong>
          </div>
        </div>

        <div className="about-mini-card">
          <span className="about-mini-icon">02</span>
          <div>
            <small>MINDSET</small>
            <strong>Build · Learn · Improve</strong>
          </div>
        </div>

        <div className="about-mini-card">
          <span className="about-mini-icon">03</span>
          <div>
            <small>LEADERSHIP</small>
            <strong>Class Lead · Rotaract Club</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="Skills" className="section alt">
      <div className="container">
        <SectionTitle
          num="02"
          title="Skills & tools"
          sub="Technologies I use to build and learn."
        />

        <div className="skill-grid">
          {skills.map(([name, type, percentage]) => (
            <div
              className="skill"
              key={name}
              style={{ '--skill-level': `${percentage}%` }}
            >
              <div className="skill-main">
                <strong>{name}</strong>
                <small>{type}</small>
              </div>

              <div className="skill-meter">
                <div className="skill-meter-top">
                  <span>PROFICIENCY</span>
                  <b>{percentage}%</b>
                </div>
                <div className="skill-bar">
                  <i />
                </div>
              </div>

              <span className="skill-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="Projects" className="section container">
      <SectionTitle
        num="03"
        title="Featured projects"
        sub="A few things I've built with React and web technologies."
      />

      <div className="projects">
        {projects.map((p) => (
          <article className="project" key={p.n}>
            <div className="project-no">{p.n}</div>
            <div className="project-body">
            <div className="project-top">
  <h3>{p.title}</h3>

  {p.live && (
    <a
      href={p.live}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${p.title} live`}
    >
      ↗
    </a>
  )}
</div>
              <p>{p.text}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function JourneySection() {
  return (
    <section id="Journey" className="section alt">
      <div className="container">
        <SectionTitle
          num="04"
          title="Education & journey"
          sub="The experiences that shaped my development path."
        />

        <div className="journey-hub">
          <article className="journey-feature">
            <div className="journey-feature-top">
              <span className="journey-badge">ACADEMIC FOUNDATION</span>
              <span className="journey-index">01</span>
            </div>

            <div className="journey-feature-grid">
              <div>
                <span className="journey-kicker">2022 — 2026</span>
                <h3>B.E. Computer Science & Engineering</h3>
                <p>
                  Sethu Institute of Technology · CGPA 7.8
                </p>
              </div>

              <div className="journey-degree">
                <span>DEGREE</span>
                <strong>B.E.</strong>
                <small>Computer Science</small>
              </div>
            </div>

            <div className="journey-progress">
              <div>
                <span>EDUCATION PATH</span>
                <b>COMPLETED</b>
              </div>
              <i><em /></i>
            </div>
          </article>

          <div className="journey-grid">
            <article className="journey-mini">
              <div className="journey-mini-icon">⌘</div>
              <div className="journey-mini-head">
                <span>TRAINING // 02</span>
                <b>01</b>
              </div>
              <h3>Full Stack Web Development</h3>
              <p>OCTANET · Novitech R&D Pvt Ltd</p>
              <span className="journey-chip">WEB DEVELOPMENT</span>
            </article>

            <article className="journey-mini">
              <div className="journey-mini-icon">◇</div>
              <div className="journey-mini-head">
                <span>TRAINING // 03</span>
                <b>02</b>
              </div>
              <h3>UI/UX Design</h3>
              <p>Novitech R&D Pvt Ltd</p>
              <span className="journey-chip">DESIGN</span>
            </article>

            <article className="journey-mini">
              <div className="journey-mini-icon">&lt;/&gt;</div>
              <div className="journey-mini-head">
                <span>CERTIFICATIONS // 04</span>
                <b>03</b>
              </div>
              <h3>Full Stack · Cloud · Core Java</h3>
              <p>Udemy & NPTEL</p>
              <span className="journey-chip">CERTIFIED</span>
            </article>

            <article className="journey-mini">
              <div className="journey-mini-icon">✦</div>
              <div className="journey-mini-head">
                <span>LEADERSHIP // 05</span>
                <b>04</b>
              </div>
              <h3>Class Lead · Rotaract Club</h3>
              <p>Coordinated members and supported event execution.</p>
              <span className="journey-chip">LEADERSHIP</span>
            </article>
          </div>

          <div className="journey-status">
            <div className="journey-status-left">
              <span className="journey-status-dot" />
              <div>
                <small>CURRENT STATUS</small>
                <strong>Open to Work — Actively Seeking Opportunities</strong>
              </div>
            </div>

            <div className="journey-status-tags">
              <span>Full-Time</span>
              <span>Internship</span>
              <span>Remote / On-Site</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="Contact" className="section container">
      <div className="contact-card">
        <div>
          <span className="eyebrow">05 / Contact</span>
          <h2>
            Let's build something
            <br />
            <span>useful together.</span>
          </h2>
          <p>
            I'm currently looking for frontend developer opportunities where I can
            contribute, learn and grow.
          </p>
        </div>

        <div className="contact-actions">
          <a className="contact-link" href="mailto:asfak18102004@gmail.com">
            <small>Email</small>
            <b>asfak18102004@gmail.com ↗</b>
          </a>
          <a className="contact-link" href="tel:+917418685512">
            <small>Phone</small>
            <b>+91 74186 85512 ↗</b>
          </a>
          <a
            className="contact-link"
            href="https://linkedin.com/in/asfak-ahamed7"
            target="_blank"
            rel="noreferrer"
          >
            <small>LinkedIn</small>
            <b>linkedin.com/in/asfak-ahamed7 ↗</b>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        <span>© 2026 Asfak Ahamed A</span>
        <span>Built with React · Madurai, India</span>
      </div>
    </footer>
  );
}

// ---------------------------------------------------------------------------
// App
// ---------------------------------------------------------------------------

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    OBSERVED_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((open) => !open);

  return (
    <>
      <div className="noise" />

      <Header
        active={active}
        menuOpen={menuOpen}
        onToggleMenu={toggleMenu}
        onCloseMenu={closeMenu}
      />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
