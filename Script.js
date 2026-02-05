/* =============================
   Mobile Menu
============================= */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

/* =============================
   Footer Year
============================= */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* =============================
   HERO SLIDER
============================= */
document.addEventListener("DOMContentLoaded", () => {
  const heroSwiperEl = document.querySelector("#heroSwiper");
  if (heroSwiperEl) {
    new Swiper("#heroSwiper", {
      loop: true,
      grabCursor: true,
      spaceBetween: 18,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: "#heroSwiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#heroSwiper .swiper-button-next",
        prevEl: "#heroSwiper .swiper-button-prev",
      },
    });
  }

  /* =============================
     TESTIMONIAL SLIDER (PRO)
  ============================= */
  const testimonialsEl = document.querySelector("#testimonialsSwiper");
  if (testimonialsEl) {
    new Swiper("#testimonialsSwiper", {
      loop: true,
      grabCursor: true,
      spaceBetween: 18,
      autoplay: {
        delay: 4200,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: "#testimonialsSwiper .swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#testimonialsSwiper .swiper-button-next",
        prevEl: "#testimonialsSwiper .swiper-button-prev",
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        720: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
  }
});

/* =============================
   Scroll Reveal
============================= */
const revealEls = document.querySelectorAll(".reveal");

function onReveal() {
  revealEls.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 120) el.classList.add("active");
  });
}

window.addEventListener("scroll", onReveal);
window.addEventListener("load", onReveal);

/* =============================
   Rocket Scroll To Top
============================= */
const rocket = document.getElementById("rocketBtn");

if (rocket) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) rocket.classList.add("show");
    else rocket.classList.remove("show");
  });

  rocket.addEventListener("click", () => {
    rocket.classList.add("launch");

    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      rocket.classList.remove("launch");
      // re-show button after returning (optional)
      setTimeout(() => rocket.classList.add("show"), 200);
    }, 1200);
  });
}

/* =============================
   Premium SaaS Hero Particles (Lightweight)
============================= */
(function heroParticles() {
  const canvas = document.getElementById("heroParticles");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let w = 0, h = 0;

  const DPR = Math.min(2, window.devicePixelRatio || 1);
  const particles = [];
  const COUNT = 42;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    w = Math.floor(rect.width);
    h = Math.floor(rect.height);
    canvas.width = Math.floor(w * DPR);
    canvas.height = Math.floor(h * DPR);
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  }

  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

  function init() {
    particles.length = 0;
    for (let i = 0; i < COUNT; i++) {
      particles.push({
        x: rand(0, w),
        y: rand(0, h),
        r: rand(1.2, 2.6),
        vx: rand(-0.25, 0.25),
        vy: rand(-0.18, 0.18),
        a: rand(0.25, 0.75),
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // dots
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      // wrap
      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.a})`;
      ctx.fill();
    }

    // connect nearby points (subtle)
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const alpha = (1 - dist / 120) * 0.18;
          ctx.strokeStyle = `rgba(200,210,255,${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(draw);
  }

  function start() {
    resize();
    init();
    draw();
  }

  window.addEventListener("resize", () => {
    resize();
    init();
  });

  window.addEventListener("load", start);
})();
