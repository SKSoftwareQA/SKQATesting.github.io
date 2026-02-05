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
   HERO + TESTIMONIAL SWIPERS
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
   Scroll Reveal (safe)
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
document.addEventListener("DOMContentLoaded", onReveal);

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
      setTimeout(() => rocket.classList.add("show"), 200);
    }, 1200);
  });
}

/* =============================
   Sticky CTA Bar
============================= */
const stickyCta = document.getElementById("stickyCta");
const stickyClose = document.getElementById("stickyClose");
const STICKY_KEY = "stickyCtaDismissed";

function updateStickyVisibility() {
  if (!stickyCta) return;
  const dismissed = sessionStorage.getItem(STICKY_KEY) === "1";
  if (dismissed) {
    stickyCta.classList.remove("show");
    return;
  }
  if (window.scrollY > 420) stickyCta.classList.add("show");
  else stickyCta.classList.remove("show");
}

window.addEventListener("scroll", updateStickyVisibility);
window.addEventListener("load", updateStickyVisibility);
document.addEventListener("DOMContentLoaded", updateStickyVisibility);

if (stickyClose && stickyCta) {
  stickyClose.addEventListener("click", () => {
    sessionStorage.setItem(STICKY_KEY, "1");
    stickyCta.classList.remove("show");
  });
}

/* =============================
   Animated Counters (start when visible)
============================= */
function animateCounter(el, target, decimals) {
  const duration = 900;
  const startTime = performance.now();

  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = value.toFixed(decimals);
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

(function initCounters() {
  const counts = document.querySelectorAll(".count");
  const wrap = document.getElementById("counters");
  if (!counts.length || !wrap) return;

  let played = false;

  const io = new IntersectionObserver(
    (entries) => {
      if (played) return;
      for (const entry of entries) {
        if (entry.isIntersecting) {
          played = true;
          counts.forEach((el) => {
            const target = Number(el.dataset.target || "0");
            const decimals = Number(el.dataset.decimals || "0");
            animateCounter(el, target, decimals);
          });
          io.disconnect();
          break;
        }
      }
    },
    { threshold: 0.35 }
  );

  io.observe(wrap);
})();
const rocketBtn = document.getElementById("rocketBtn");

if (rocketBtn) {
  rocketBtn.addEventListener("click", () => {

    rocketBtn.classList.add("rocket-fire");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    setTimeout(() => {
      rocketBtn.classList.remove("rocket-fire");
    }, 800);
  });
}

/* =============================
   Premium Hero Particles
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

    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${p.a})`;
      ctx.fill();
    }

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
  document.addEventListener("DOMContentLoaded", start);
})();

