// Navbar background on scroll
const nav = document.querySelector('.site-nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Newsletter form (front-end only)
const form = document.getElementById('subscribeForm');
const msg = document.getElementById('subscribeMsg');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = form.querySelector('input');
  if (input.validity.valid && input.value) {
    msg.textContent = 'Thanks for subscribing!';
    form.reset();
  } else {
    msg.textContent = 'Please enter a valid email address.';
  }
});

// ── Hero Slideshow ──────────────────────────────────────────────
(function () {
  const slides = Array.from(document.querySelectorAll('.hero-slide'));
  if (!slides.length) return;

  let current = 0;
  let timer;
  const INTERVAL = 5000; // ms between auto-advances

  function goTo(index) {
    index = (index + slides.length) % slides.length;

    slides[current].classList.remove('active');

    current = index;
    const slide = slides[current];

    // Restart Ken-Burns animation
    slide.style.animation = 'none';
    void slide.offsetWidth; // force reflow
    slide.style.animation = '';
    slide.classList.add('active');
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), INTERVAL);
  }

  startTimer();
}());