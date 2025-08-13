// Fade-in animation for sections
document.addEventListener('DOMContentLoaded', function () {
  // Section fade-in
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

  // Back to Top button logic
  const backToTop = document.getElementById('backToTop') || document.querySelector('.back-to-top');
  if (backToTop) {
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
  }

  // Dark mode toggle functionality
  const darkModeToggle = document.getElementById('darkModeToggle');
  if (darkModeToggle) {
    const icon = darkModeToggle.querySelector('i');
    const root = document.documentElement;
    // Apply stored theme preference
    if (localStorage.getItem('theme') === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (icon) {
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-sun');
      }
    }
    // Toggle on click
    darkModeToggle.addEventListener('click', function () {
      if (root.getAttribute('data-theme') === 'dark') {
        root.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        if (icon) {
          icon.classList.remove('bi-sun');
          icon.classList.add('bi-moon');
        }
      } else {
        root.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        if (icon) {
          icon.classList.remove('bi-moon');
          icon.classList.add('bi-sun');
        }
      }
    });
  }

  // Optional: Keyboard accessibility for skip link (focus main content)
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', function (e) {
      const main = document.getElementById('main-content');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus();
      }
    });
  }
});