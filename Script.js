/* =============================
   Mobile Menu
============================= */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

/* =============================
   Footer Year
============================= */
document.getElementById("year").textContent = new Date().getFullYear();

/* =============================
   HERO SLIDER
============================= */
new Swiper("#heroSwiper", {
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  pagination: {
    el: "#heroSwiper .swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: "#heroSwiper .swiper-button-next",
    prevEl: "#heroSwiper .swiper-button-prev"
  }
});

/* =============================
   TESTIMONIAL SLIDER (FIXED)
============================= */
new Swiper("#testimonialsSwiper", {
  loop: true,
  autoplay: {
    delay: 4200,
    disableOnInteraction: false
  },
  pagination: {
    el: "#testimonialsSwiper .swiper-pagination",
    clickable: true
  }
});
