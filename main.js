// main.js - small helpers for nav, year, and contact form
document.addEventListener('DOMContentLoaded', () => {
  // set year in footer
  const years = document.querySelectorAll('[id^="year"]');
  years.forEach(el => el.textContent = new Date().getFullYear());

  // nav toggle for small screens
  const nav = document.querySelector('.nav');
  const navToggle = document.getElementById('navToggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

  // simple contact form handler (no server)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const msgEl = document.getElementById('formMsg');
      if (!name || !email || !message) {
        msgEl.textContent = 'Please fill all fields.';
        msgEl.style.color = '#ff8b8b';
        return;
      }
      // Here we simply show a success message. Replace with AJAX to your server or email service.
      msgEl.textContent = 'Thanks Your message is sent .';
      msgEl.style.color = '#9ef1b7';
      form.reset();
    });
  }

  // simple reveal animation for elements
  const reveal = () => {
    const items = document.querySelectorAll('.card, .project-card, .about-avatar, .hero-text');
    const windowH = window.innerHeight;
    items.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowH - 80) {
        el.style.transform = 'translateY(0)';
        el.style.opacity = '1';
        el.style.transition = 'all 600ms ease';
      } else {
        el.style.transform = 'translateY(12px)';
        el.style.opacity = '0.0';
      }
    });
  };
  reveal();
  window.addEventListener('scroll', reveal);
  window.addEventListener('resize', reveal);
});
document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".detail-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {

      const box = btn.nextElementSibling;

      box.classList.toggle("show");

      // Change button text
      if (box.classList.contains("show")) {
        btn.textContent = "Hide Details";
      } else {
        btn.textContent = "Details";
      }
    });
  });

});
