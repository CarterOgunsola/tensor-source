import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';



export default class {
  constructor() {

    this.init();
    this.calculateSvgLengths()
  }

  init() {
    const swiper = new Swiper('[data-testimonial-swiper]', {
      modules: [Navigation],
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '[data-button-next]',
        prevEl: '[data-button-prev]',
      },
    });
  }

  calculateSvgLengths() {
    const paths = document.querySelectorAll("[data-hover-path]");

    paths.forEach(path => {
      const length = path.getTotalLength();

      path.style.setProperty("--length", length + 1)

    })
  }
}