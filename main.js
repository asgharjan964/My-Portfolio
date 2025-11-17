document.addEventListener('DOMContentLoaded', () => {
  const years = document.querySelectorAll('[id^="year"]');
  years.forEach(el => el.textContent = new Date().getFullYear());

  const nav = document.querySelector('.nav');
  const navToggle = document.getElementById('navToggle');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }

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
      msgEl.textContent = 'Thanks! Your message has been sent.';
      msgEl.style.color = '#9ef1b7';
      form.reset();
      setTimeout(() => {
        msgEl.textContent = '';
      }, 5000);
    });
  }

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
        el.style.opacity = '0';
      }
    });
  };
  reveal();
  window.addEventListener('scroll', reveal);
  window.addEventListener('resize', reveal);

  const buttons = document.querySelectorAll(".detail-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const box = btn.nextElementSibling;
      box.classList.toggle("show");
      btn.textContent = box.classList.contains("show") ? "Hide Details" : "Details";
    });
  });
});
