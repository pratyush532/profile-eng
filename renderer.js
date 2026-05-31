// renderer.js — reads CONTENT[lang] and builds the whole page

function render(lang) {
  const c = CONTENT[lang];
  const s = c.sections;

  /* ── Apply saved theme before paint ── */
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  /* ── NAV ── */
  document.getElementById('nav').innerHTML = `
    <a href="#${s.threeD.id}">${c.nav.threeD}</a>
    <a href="#${s.education.id}">${c.nav.education}</a>
    <a href="#${s.experience.id}">${c.nav.experience}</a>
    <a href="#${s.projects.id}">${c.nav.projects}</a>
    <a href="#${s.certifications.id}">${c.nav.certifications}</a>
    <a href="#${s.achievements.id}">${c.nav.achievements}</a>
    <a href="${c.nav.langSwitchHref}" class="lang-switch">${c.nav.langSwitch}</a>
    <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
      <span class="icon-moon">🌙</span>
      <span class="icon-sun">☀️</span>
    </button>
  `;

  /* ── Theme toggle logic ── */
  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  /* ── HEADER ── */
  document.getElementById('header').innerHTML = `
    <div class="avatar-wrap">
      <img src="1682097621086.jpeg" alt="${c.name}">
    </div>
    <h1>${c.name}</h1>
    <p class="tagline">${c.tagline}</p>
    <div class="social-links">
      <a href="${c.social.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
      <a href="${c.social.instagram}" target="_blank" rel="noopener">Instagram</a>
      <a href="${c.social.github}" target="_blank" rel="noopener">GitHub</a>
    </div>
  `;

  /* ── MAIN ── */
  document.getElementById('main').innerHTML = `
    ${renderThreeD(s.threeD, c.nav.threeD)}
    ${renderSection(s.education,      'education',      renderEducationItems,    'grid-2')}
    ${renderSection(s.experience,     'experience',     renderExperienceItems,   'grid-1')}
    ${renderSection(s.projects,       'projects',       renderProjectItems,      'grid-1')}
    ${renderSection(s.certifications, 'certifications', renderCertItems,         'grid-2')}
    ${renderSection(s.achievements,   'achievements',   renderAchievementItems,  'grid-2')}
  `;

  /* ── FOOTER ── */
  document.getElementById('footer').textContent = c.footer;

  /* ── SCROLL REVEAL ── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      e.target.classList.add('visible');
      e.target.querySelectorAll('.card').forEach(card => card.classList.add('visible'));
      io.unobserve(e.target);
    });
  }, { threshold: 0.06 });

  document.querySelectorAll('.reveal, .grid-1, .grid-2').forEach(el => io.observe(el));
}

/* ── Section shell ── */
function sectionShell(id, label, title, subtitle, gridClass, innerHtml) {
  return `
    <section id="${id}">
      <div class="container">
        <span class="section-label reveal">${label}</span>
        <h2 class="reveal">${title}</h2>
        ${subtitle ? `<p class="section-subtitle reveal">${subtitle}</p>` : ''}
        <div class="${gridClass}">${innerHtml}</div>
      </div>
    </section>`;
}

function renderSection(sec, labelKey, itemFn, gridClass) {
  return sectionShell(sec.id, labelKey, sec.title, sec.subtitle || '', gridClass, itemFn(sec.items));
}

/* ── 3D / Game Dev ── */
function renderThreeD(sec, label) {
  const items = sec.items.map(i => `
    <div class="card">
      <div class="card-title">${i.title}</div>
      <p class="card-sub">${i.description}</p>
      <a href="${i.link}" target="_blank" rel="noopener" class="btn">${i.linkText}</a>
    </div>`).join('');
  return sectionShell(sec.id, label, sec.title, sec.subtitle, 'grid-2', items);
}

/* ── Education ── */
function renderEducationItems(items) {
  return items.map(i => `
    <div class="card">
      <div class="card-title">${i.title}</div>
      <div class="card-sub">${i.sub}</div>
      <div class="card-meta">${i.meta}</div>
    </div>`).join('');
}

/* ── Experience ── */
function renderExperienceItems(items) {
  return items.map(i => `
    <div class="card">
      <div class="card-org">${i.org}</div>
      <div class="card-title">${i.title}</div>
      <div class="card-meta">${i.period}</div>
      <ul>${i.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
    </div>`).join('');
}

/* ── Projects ── */
function renderProjectItems(items) {
  return items.map(i => `
    <div class="card">
      <div class="card-title">${i.title}</div>
      <div class="tags">${i.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <ul>${i.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      <a href="${i.link}" target="_blank" rel="noopener" class="btn">${i.linkText}</a>
    </div>`).join('');
}

/* ── Certifications ── */
function renderCertItems(items) {
  return items.map(i => `
    <div class="card">
      <div class="card-title">${i.title}</div>
      <div class="card-meta">${i.meta}</div>
      <a href="${i.link}" target="_blank" rel="noopener" class="btn">View</a>
    </div>`).join('');
}

/* ── Achievements ── */
function renderAchievementItems(items) {
  return items.map(i => `
    <div class="card">
      <div class="card-title">${i.title}</div>
      <div class="card-meta">${i.meta}</div>
      <a href="${i.link}" target="_blank" rel="noopener" class="btn">View</a>
    </div>`).join('');
}