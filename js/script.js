document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  if (themeToggleBtn) {
    const updateIcon = (theme) => {
      themeToggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
    };

    // Set initial icon
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    updateIcon(currentTheme);

    // Toggle event listener
    themeToggleBtn.addEventListener('click', () => {
      let currentTheme = document.documentElement.getAttribute('data-theme');
      let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateIcon(newTheme);
    });
  }

  // Intersection Observer for professional scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Run animation only once
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.scroll-animate');
  animatedElements.forEach(el => observer.observe(el));
});
