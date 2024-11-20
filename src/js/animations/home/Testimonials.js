import Swiper from "swiper";
import { Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

export default class {
  constructor() {
    this.init();
    this.calculateSvgLengths();
  }

  init() {
    const swiper = new Swiper("[data-testimonial-swiper]", {
      modules: [Navigation, EffectFade],
      direction: "horizontal",
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      speed: 800,
      loop: true,
      loopAdditionalSlides: 2,
      loopedSlides: 2,
      watchSlidesProgress: true,
      navigation: {
        nextEl: "[data-button-next]",
        prevEl: "[data-button-prev]",
      },
      allowTouchMove: false,
      preventInteractionOnTransition: true,
    });
  }

  calculateSvgLengths() {
    const paths = document.querySelectorAll("[data-hover-path]");

    paths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.setProperty("--length", length + 1);
    });
  }
}
