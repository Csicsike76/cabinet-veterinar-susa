// SEC-001: Extracted from inline script to remove 'unsafe-inline' from CSP script-src
(function () {
  try {
    var RTL_LANGUAGES = [];
    var savedSettings = localStorage.getItem('settings');
    if (savedSettings) {
      var settings = JSON.parse(savedSettings);
      if (settings.theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      }
      if (settings.language && RTL_LANGUAGES.indexOf(settings.language) !== -1) {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', settings.language);
      } else if (settings.language) {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', settings.language);
      }
    }
  } catch (e) {
    // Silent fail — theme will be applied by React after hydration
  }
})();
