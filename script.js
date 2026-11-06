'use strict';
const toggle = document.getElementById('menu');
const links = document.getElementById('links');
if (toggle && links) {
  function setMenu(open) {
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '✕' : '☰';
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  }
  toggle.addEventListener('click', () => setMenu(!links.classList.contains('open')));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setMenu(false);
  });
  document.addEventListener('click', event => {
    if (!links.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
  });
}
