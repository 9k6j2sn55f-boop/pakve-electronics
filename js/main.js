cat << 'EOF' > js/main.js
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('navToggle');
  const navMenu = document.getElementById('navLinks');

  if (!toggleBtn || !navMenu) return;

  // Toggle dropdown on hamburger click
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.toggle('is-open');
    toggleBtn.classList.toggle('is-active', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen);
  });

  // Ensure taps directly on links navigate immediately
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close when tapping outside the navbar
  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('is-open');
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
});
EOF