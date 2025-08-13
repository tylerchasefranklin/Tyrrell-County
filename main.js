// Fade-in animation for sections
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
});

// Back to Top functionality
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', function () {
  if (window.scrollY > 250) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
backToTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Mobile nav menu accessibility
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.getElementById('main-nav-list');
menuToggle.addEventListener('click', function () {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', !isOpen);
  navList.classList.toggle('open');
  // Focus trap
  if (!isOpen) {
    navList.querySelector('a').focus();
  } else {
    menuToggle.focus();
  }
});
document.addEventListener('keydown', function (e) {
  if (
    navList.classList.contains('open') &&
    e.key === 'Escape'
  ) {
    menuToggle.setAttribute('aria-expanded', 'false');
    navList.classList.remove('open');
    menuToggle.focus();
  }
});