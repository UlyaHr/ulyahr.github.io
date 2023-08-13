import Swiper from "https://cdnjs.cloudflare.com/ajax/libs/Swiper/6.8.0/swiper-bundle.esm.browser.min.js";

export function About() {
  const sliderCard = document.querySelector(".blog-slider");
  const swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
  });

  sliderCard.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
  });

  sliderCard.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
  });
}
