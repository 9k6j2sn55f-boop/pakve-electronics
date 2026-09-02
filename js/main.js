document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('navToggle');
  const navMenu = document.getElementById('navLinks');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.toggle('is-open');
    toggleBtn.classList.toggle('is-active', isOpen);
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      toggleBtn.classList.remove('is-active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('is-open');
      toggleBtn.classList.remove('is-active');
    }
  });
});
