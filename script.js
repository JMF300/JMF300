const toggleBtn = document.getElementById('modeToggle');
const body = document.body;

// Load saved theme
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
    if (toggleBtn) toggleBtn.textContent = '☀️';
  }
});

// Toggle theme
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}
