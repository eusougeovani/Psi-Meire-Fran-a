// Scroll suave para os links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute("href"));
    if (alvo) {
      alvo.scrollIntoView({ behavior: "smooth" });
    }

    // Fecha o menu mobile ao clicar em um link
    const menuLinks = document.getElementById('menu-links');
    const toggle = document.querySelector('.menu-toggle i');
    if (menuLinks.classList.contains('open')) {
      menuLinks.classList.remove('open');
      toggle.classList.remove('fa-xmark');
      toggle.classList.add('fa-bars');
      document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
    }
  });
});

// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.getElementById('menu-links');
const toggleIcon = document.querySelector('.menu-toggle i');

menuToggle.addEventListener('click', function () {
  const expanded = menuLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', expanded);
  toggleIcon.classList.toggle('fa-bars');
  toggleIcon.classList.toggle('fa-xmark');
});
