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

