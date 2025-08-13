// "Back to Top" button logic
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Dark mode toggle logic
const darkModeToggle = document.getElementById('darkModeToggle');
const root = document.documentElement;
const themeKey = 'tyrrell-theme';

// Load theme preference
const savedTheme = localStorage.getItem(themeKey);
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
  updateDarkModeIcon(savedTheme === 'dark');
}

darkModeToggle.addEventListener('click', () => {
  const dark = root.getAttribute('data-theme') === 'dark';
  root.setAttribute('data-theme', dark ? 'light' : 'dark');
  localStorage.setItem(themeKey, dark ? 'light' : 'dark');
  updateDarkModeIcon(!dark);
});
function updateDarkModeIcon(isDark) {
  darkModeToggle.innerHTML = isDark
    ? '<i class="bi bi-sun"></i>'
    : '<i class="bi bi-moon"></i>';
}

// Keyboard navigation helper: focus outline always visible for keyboard users
document.body.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
  }
});
document.body.addEventListener('mousedown', function() {
  document.body.classList.remove('user-is-tabbing');
});