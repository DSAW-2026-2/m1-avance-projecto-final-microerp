(function () {
  const STORAGE_KEY = 'microerp_products';

  function getProducts() {
    try {
      const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      return Array.isArray(value) ? value : [];
    } catch (_) {
      return [];
    }
  }

  function saveProducts(products) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }

  function money(value) {
    const number = Number(value || 0);
    return `$${number.toFixed(2)}`;
  }

  function applySavedTheme() {
    const saved = localStorage.getItem('color-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', saved === 'dark' || (!saved && prefersDark));
  }

  function wireThemeToggle() {
    const button = document.getElementById('theme-toggle');
    if (!button) return;
    const sync = () => {
      button.textContent = document.documentElement.classList.contains('dark') ? '☀' : '☾';
      button.setAttribute('aria-label', document.documentElement.classList.contains('dark') ? 'Usar modo claro' : 'Usar modo oscuro');
    };
    sync();
    button.addEventListener('click', () => {
      const nextDark = !document.documentElement.classList.contains('dark');
      document.documentElement.classList.toggle('dark', nextDark);
      localStorage.setItem('color-theme', nextDark ? 'dark' : 'light');
      sync();
    });
  }

  window.MicroERP = { getProducts, saveProducts, money, applySavedTheme, wireThemeToggle };
  applySavedTheme();
  document.addEventListener('DOMContentLoaded', wireThemeToggle);
})();
