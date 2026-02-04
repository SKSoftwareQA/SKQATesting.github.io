// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu (if you use it)
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// HERO SWIPER
const heroSwiperEl = document.querySelector("#heroSwiper");
if (heroSwiperEl) {
  new Swiper("#heroSwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 16,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: "#heroSwiper .swiper-button-next",
      prevEl: "#heroSwiper .swiper-button-prev",
    },
    pagination: {
      el: "#heroSwiper .swiper-pagination",
      clickable: true,
    },
  });
}

// TESTIMONIALS SWIPER
const testimonialsSwiperEl = document.querySelector("#testimonialsSwiper");
if (testimonialsSwiperEl) {
  new Swiper("#testimonialsSwiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 24,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    pagination: {
      el: "#testimonialsSwiper .testimonials-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: "#testimonialsSwiper .testimonials-next",
      prevEl: "#testimonialsSwiper .testimonials-prev",
    },

    breakpoints: {
      0: { slidesPerView: 1 },
      700: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}
