// Scroll suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
    // Fecha menu mobile ao clicar em link
    const menuLinks = document.getElementById('menu-links');
    if (menuLinks.classList.contains('open')) {
      menuLinks.classList.remove('open');
      document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
    }
  });
});

// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.getElementById('menu-links');
menuToggle.addEventListener('click', function() {
  menuLinks.classList.toggle('open');
  const expanded = menuLinks.classList.contains('open');
  menuToggle.setAttribute('aria-expanded', expanded);
});
