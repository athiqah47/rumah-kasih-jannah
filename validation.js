// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector('.menu-toggle');
  const menu = document.getElementById('menu');

  toggleBtn.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('show');
    menu.classList.toggle('hidden');
  })
});