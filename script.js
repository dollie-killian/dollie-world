const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 24), { passive: true });
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: .14 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-placeholder]').forEach(link => link.addEventListener('click', event => event.preventDefault()));
