import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(MorphSVGPlugin, ScrollTrigger);

export default class {
  constructor() {
    this.elements = {
      steps: document.querySelectorAll(".home_works_step"),
      svgs: document.querySelectorAll(".home_works_content_svgs svg path"),
      mainSvg: document.querySelector(".home_works_content_icon_item path"),
    };
    this.createTriggers();
  }

  createTriggers() {
    const { mainSvg } = this.elements;

    this.elements.steps.forEach((step, index) => {
      if (index === this.elements.svgs.length - 1) return;

      const target = this.elements.svgs[index];
      const next = this.elements.svgs[index + 1];
      gsap.to(
        mainSvg,

        {
          morphSVG: next,

          scrollTrigger: {
            trigger: step,
            duration: 1,
            immediateRender: false,
            start: "top top",
            scrub: true,
            markers: true,
          },
        }
      );
    });
  }

  // morphSVG(index) {
  //   const target = this.elements.svgs[index].getAttribute("d");
  //   gsap.to(this.elements.mainSvg, {
  //     morphSVG: {
  //       shape: target,
  //     },
  //   });
  // }
}
