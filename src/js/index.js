// main entry point (e.g., src/js/index.js)

import "../styles/index.scss";
import { initPageRouter } from "./utils/pageRouter";

document.addEventListener("DOMContentLoaded", () => {
  initPageRouter();
});

console.log("Hello, Vite!");
