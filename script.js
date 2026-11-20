  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = saved || (prefersDark ? 'dark' : 'light');
  document.getElementById('theme').addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
  });

  const buttons = document.querySelectorAll('.filters button');
  const projects = document.querySelectorAll('.project');
  buttons.forEach(btn => btn.addEventListener('click', () => {
    buttons.forEach(b => b.setAttribute('aria-pressed', b === btn));
    const f = btn.dataset.filter;
    projects.forEach(p => {
      p.hidden = !(f === 'all' || p.dataset.cat.split(' ').includes(f));
    });
  }));

  document.getElementById('year').textContent = new Date().getFullYear();