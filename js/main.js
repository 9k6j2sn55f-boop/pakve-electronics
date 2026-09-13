(() => {
  function initNav() {
    const toggleBtn = document.getElementById('navToggle');
    const navMenu = document.getElementById('navLinks');

    if (!toggleBtn || !navMenu) return;

    function toggleMenu(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }

      const isOpen = navMenu.classList.toggle('is-open');
      toggleBtn.classList.toggle('is-active', isOpen);
      toggleBtn.setAttribute('aria-expanded', String(isOpen));

      if (isOpen) {
        navMenu.style.cssText = 'display: flex !important; position: fixed !important; top: 60px !important; left: 0 !important; width: 100vw !important; height: auto !important; max-height: calc(100vh - 60px) !important; background: #ffffff !important; flex-direction: column !important; padding: 20px 24px !important; z-index: 99999 !important; box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important; overflow-y: auto !important;';
      } else {
        navMenu.style.cssText = '';
      }
    }

    // Bind click
    toggleBtn.onclick = toggleMenu;

    // Allow normal navigation when clicking a link
    navMenu.querySelectorAll('a').forEach((link) => {
      link.onclick = () => {
        navMenu.classList.remove('is-open');
        toggleBtn.classList.remove('is-active');
        toggleBtn.setAttribute('aria-expanded', 'false');
        navMenu.style.cssText = '';
      };
    });

    // Close when tapping outside
    document.addEventListener('click', (e) => {
      if (!toggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('is-open');
        toggleBtn.classList.remove('is-active');
        toggleBtn.setAttribute('aria-expanded', 'false');
        navMenu.style.cssText = '';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
