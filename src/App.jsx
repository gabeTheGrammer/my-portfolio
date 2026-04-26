import './index.css';

export default function App() {
  function go(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }

  function showTab(t) {
    ['w', 'e', 'a'].forEach(x => {
      document.getElementById('tab-' + x).classList.toggle('hidden', x !== t);
      document.getElementById('btn-' + x).classList.toggle('active', x === t);
    });
  }

  return (
    <div className="pf">
      <nav>
        <span className="nav-logo">
          <span className="logo-dot" /> Gabriel Byrne
        </span>

        <ul className="nav-center">
          <li><a onClick={() => go('hero')}>home</a></li>
          <li><a onClick={() => go('skills')}>skills</a></li>
          <li><a onClick={() => go('experience')}>experience</a></li>
          <li><a onClick={() => go('contact')}>contact</a></li>
        </ul>

        <div className="nav-right">
          <a className="nav-icon-btn" href="https://github.com/gabeTheGrammer" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>
          <a className="nav-icon-btn" href="https://linkedin.com/in/gabrielbyrne-b5a320293" target="_blank" rel="noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <a className="nav-icon-btn resume" href="/resume.pdf" download>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        </div>
      </nav>

      <section className="hero" id="hero">
        <div className="hero-grid" />
        <div className="hero-badge">
          <span className="badge-pulse" /> Available May 2026
        </div>
        <h1>
          I build<br />software that<br />
          <span className="highlight">ships.</span>
        </h1>
        <p className="hero-sub">
          CS student at Miami University with real production experience —
          full-stack systems, RESTful APIs, Docker, CI/CD. Graduating May 2026.
        </p>
        <div className="hero-cta">
          <button className="btn-p" onClick={() => go('contact')}>Let's talk →</button>
          <button className="btn-o" onClick={() => go('experience')}>See my work</button>
        </div>
        <div className="scroll-hint">
          <span className="scroll-line" /> scroll to explore
        </div>
      </section>

      <div className="stats-bar">
        <div className="stat"><span className="stat-num">3.58</span><span className="stat-label">GPA</span></div>
        <div className="stat"><span className="stat-num">5+</span><span className="stat-label">languages</span></div>
        <div className="stat"><span className="stat-num">2</span><span className="stat-label">shipped projects</span></div>
      </div>

      <section id="skills">
        <p className="sec-eyebrow">toolkit</p>
        <h2 className="sec-title">Skills &amp; technologies</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="sk-icon">{ }</div>
            <div className="sk-label">Languages</div>
            <div className="skill-tags">
              <span className="tag">Java</span><span className="tag">JavaScript</span>
              <span className="tag">Golang</span><span className="tag">C++</span><span className="tag">SQL</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="sk-icon">&lt;/&gt;</div>
            <div className="sk-label">Web</div>
            <div className="skill-tags">
              <span className="tag">HTML</span><span className="tag">CSS</span>
              <span className="tag">AJAX</span><span className="tag">ASP.NET Core</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="sk-icon">⚙</div>
            <div className="sk-label">DevOps</div>
            <div className="skill-tags">
              <span className="tag">Git</span><span className="tag">Docker</span>
              <span className="tag">CI/CD</span><span className="tag">Linux</span>
            </div>
          </div>
          <div className="skill-card">
            <div className="sk-icon">◈</div>
            <div className="sk-label">Focus areas</div>
            <div className="skill-tags">
              <span className="tag">REST APIs</span><span className="tag">Machine Learning</span><span className="tag">Systems</span>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" style={{ paddingTop: '1rem' }}>
        <p className="sec-eyebrow">background</p>
        <h2 className="sec-title">Experience &amp; education</h2>
        <div className="exp-tabs">
          <button className="exp-tab active" id="btn-w" onClick={() => showTab('w')}>work</button>
          <button className="exp-tab" id="btn-e" onClick={() => showTab('e')}>education</button>
          <button className="exp-tab" id="btn-a" onClick={() => showTab('a')}>activities</button>
        </div>

        <div className="timeline" id="tab-w">
          <div className="tl-item">
            <div className="tl-date">May 2025<br />Jan 2026</div>
            <div>
              <div className="tl-title">IT Intern</div>
              <div className="tl-org">Will-Burt Company</div>
              <ul className="tl-bullets">
                <li>Built and deployed a full internal house reservation system — Golang, JavaScript, SQL Server, Docker, Git CI/CD.</li>
                <li>Created a RESTful ASP.NET Core API to store, retrieve, and manage engineering schematic files.</li>
                <li>Provided day-to-day IT support and technical troubleshooting across the team.</li>
              </ul>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-date">Jul 2020<br />Jan 2025</div>
            <div>
              <div className="tl-title">Busser / Cook</div>
              <div className="tl-org">Brown Derby</div>
              <ul className="tl-bullets">
                <li>Trained and mentored new hires; covered shifts during low-staffing periods to keep operations running.</li>
                <li>Built strong communication and problem-solving skills in a high-pressure environment.</li>
              </ul>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-date">2023<br />present</div>
            <div>
              <div className="tl-title">Catering Assistant</div>
              <div className="tl-org">Miami University</div>
              <ul className="tl-bullets">
                <li>Coordinated catering logistics for campus events, supporting smooth client-facing operations.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="timeline hidden" id="tab-e">
          <div className="tl-item">
            <div className="tl-date">2022 –<br />May 2026</div>
            <div>
              <div className="tl-title">B.S. Computer Science</div>
              <div className="tl-org">Miami University — Oxford, OH</div>
              <ul className="tl-bullets">
                <li>Minor in Mathematics. Cumulative GPA: 3.58.</li>
                <li>Study abroad in Italy — machine learning &amp; ASP languages program.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="timeline hidden" id="tab-a">
          <div className="tl-item">
            <div className="tl-date">2024</div>
            <div>
              <div className="tl-title">Code Modernization</div>
              <div className="tl-org">Vestige Digital Investigations (Job Shadow)</div>
              <ul className="tl-bullets">
                <li>Reviewed and updated legacy code, helping modernize an older archiving software system.</li>
              </ul>
            </div>
          </div>
          <div className="tl-item">
            <div className="tl-date">ongoing</div>
            <div>
              <div className="tl-title">Volunteer</div>
              <div className="tl-org">Medina City Police Activity League</div>
              <ul className="tl-bullets">
                <li>Gave back to the local community through organized youth programming and events.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" style={{ paddingTop: '1rem' }}>
        <p className="sec-eyebrow">get in touch</p>
        <h2 className="sec-title">Contact</h2>
        <div className="open-badge">
          <span className="open-dot" /> Open to full-time roles — May 2026
        </div>
        <div className="contact-wrap">
          <div className="contact-card-item">
            <div className="cc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg></div>
            <div><div className="cc-label">Email</div><div className="cc-val">byrnegj@miamioh.edu</div></div>
          </div>
          <div className="contact-card-item">
            <div className="cc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.57 3.38 2 2 0 0 1 3.54 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.4a16 16 0 0 0 7.68 7.68l.86-.86a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
            <div><div className="cc-label">Phone</div><div className="cc-val">+1 (330) 461-7727</div></div>
          </div>
          <div className="contact-card-item">
            <div className="cc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg></div>
            <div><div className="cc-label">GitHub</div><div className="cc-val">github.com/gabeTheGrammer</div></div>
          </div>
          <div className="contact-card-item">
            <div className="cc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div>
            <div><div className="cc-label">LinkedIn</div><div className="cc-val">linkedin.com/in/gabrielbyrne-b5a320293</div></div>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2026 Gabriel Byrne</span>
        <span>Built with <span className="footer-mark">React</span> · Hosted on GitHub Pages</span>
      </footer>
    </div>
  );
}