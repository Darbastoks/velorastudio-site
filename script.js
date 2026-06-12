const email = 'rokas.razmas.work@gmail.com';

const revealItems = document.querySelectorAll('[data-reveal]');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
revealItems.forEach((item) => observer.observe(item));

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? 'Uždaryti' : 'Meniu';
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = 'Meniu';
    });
  });
}

const copyBtn = document.getElementById('copyEmail');
const copyStatus = document.getElementById('copyStatus');
if (copyBtn && copyStatus) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = 'El. paštas nukopijuotas.';
    } catch (error) {
      copyStatus.textContent = email;
    }
  });
}

const stickyCta = document.querySelector('.mobile-sticky-cta');
const stickyClose = document.querySelector('.mobile-sticky-close');
if (stickyCta && stickyClose) {
  const wasClosed = sessionStorage.getItem('veloraStickyClosed') === '1';
  if (wasClosed) {
    stickyCta.classList.add('is-hidden');
  }
  stickyClose.addEventListener('click', () => {
    stickyCta.classList.add('is-hidden');
    sessionStorage.setItem('veloraStickyClosed', '1');
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

const glow = document.querySelector('.cursor-glow');
if (glow && window.matchMedia('(pointer: fine)').matches) {
  window.addEventListener('pointermove', (event) => {
    glow.style.left = `${event.clientX}px`;
    glow.style.top = `${event.clientY}px`;
  }, { passive: true });
}
