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
    this.elements.steps.forEach((step, index) => {
      ScrollTrigger.create({
        trigger: step,
        start: "top 20%",
        end: "bottom top",
        // markers: true,
        onEnter: () => {
          this.morphSVG(index);
        },
        onEnterBack: () => {
          this.morphSVG(index);
        },
      });
    });
  }

  morphSVG(index) {
    const target = this.elements.svgs[index].getAttribute("d");
    gsap.to(this.elements.mainSvg, {
      morphSVG: {
        shape: target,
      },
    });
  }
}
