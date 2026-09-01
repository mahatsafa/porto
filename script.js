const root = document.documentElement;
  const themeBtn = document.getElementById('themeBtn');
  const langBtn = document.getElementById('langBtn');

  function applyTheme(t) {
    root.setAttribute('data-theme', t);
    themeBtn.textContent = t === 'dark' ? '☀' : '☾';
    localStorage.setItem('theme', t);
  }
  function applyLang(l) {
    root.setAttribute('data-lang', l);
    langBtn.textContent = l === 'id' ? 'EN' : 'ID';
    localStorage.setItem('lang', l);
  }

  themeBtn.addEventListener('click', () => {
    applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
  langBtn.addEventListener('click', () => {
    applyLang(root.getAttribute('data-lang') === 'id' ? 'en' : 'id');
  });

  applyTheme(localStorage.getItem('theme') || 'dark');
  applyLang(localStorage.getItem('lang') || 'id');

  /* ---------- render achievements dari data.js ---------- */
  function renderAchievements() {
    const list = document.getElementById('achList');
    if (!list || typeof ACHIEVEMENTS === 'undefined') return;
    list.innerHTML = ACHIEVEMENTS.map(a => `
      <div class="ach-row">
        <div class="medal ${a.medal}"><span data-lang-id>${a.medalLabelId}</span><span data-lang-en>${a.medalLabelEn}</span></div>
        <div class="ach-info">
          <b><span data-lang-id>${a.titleId}</span><span data-lang-en>${a.titleEn || a.titleId}</span></b>
          <span data-lang-id>${a.descId}</span><span data-lang-en>${a.descEn}</span>
        </div>
        <div class="ach-date">${a.date}</div>
      </div>
    `).join('');
  }

  /* ---------- render certificates dari data.js ---------- */
  function renderCertificates() {
    const grid = document.getElementById('certGrid');
    if (!grid || typeof CERTIFICATES === 'undefined') return;
    grid.innerHTML = CERTIFICATES.map(c => `
      <div class="cert-card">
        <div class="cat mono"><span data-lang-id>${c.catId}</span><span data-lang-en>${c.catEn || c.catId}</span></div>
        <h4><span data-lang-id>${c.title}</span><span data-lang-en>${c.titleEn || c.title}</span></h4>
        <p><span data-lang-id>${c.descId}</span><span data-lang-en>${c.descEn}</span></p>
      </div>
    `).join('');
  }

  /* ---------- render projects dari data.js ---------- */
  function renderProjects() {
    const list = document.getElementById('projectList');
    if (!list || typeof PROJECTS === 'undefined') return;
    list.innerHTML = PROJECTS.map(p => `
      <div class="project-card">
        <span class="tag mono">${p.tag}</span>
        <h3>${p.title}</h3>
        <p>
          <span data-lang-id>${p.descId}</span><span data-lang-en>${p.descEn}</span>
        </p>
        ${p.repoUrl ? `
        <a class="repo" href="${p.repoUrl}" target="_blank" rel="noopener">
          ${p.repoLabel} &rarr;
        </a>` : ''}
      </div>
    `).join('');
  }

  /* ---------- hitung & isi stat-row otomatis dari data.js ---------- */
  function renderStats() {
    if (typeof ACHIEVEMENTS === 'undefined') return;

    const goldEl = document.getElementById('statGold');
    const silverEl = document.getElementById('statSilver');
    const ciscoEl = document.getElementById('statCisco');
    const projEl = document.getElementById('statProjects');

    if (goldEl) goldEl.textContent = ACHIEVEMENTS.filter(a => a.medal === 'gold').length;
    if (silverEl) silverEl.textContent = ACHIEVEMENTS.filter(a => a.medal === 'silver').length;

    if (ciscoEl && typeof CERTIFICATES !== 'undefined') {
      ciscoEl.textContent = CERTIFICATES.filter(c =>
        (c.catId || '').toLowerCase().includes('cisco')
      ).length;
    }

    if (projEl && typeof PROJECTS !== 'undefined') {
      projEl.textContent = PROJECTS.length;
    }
  }

  renderStats();
  renderAchievements();
  renderCertificates();
  renderProjects();