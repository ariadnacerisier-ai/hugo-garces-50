(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector("#hero");
    if (!hero || window.HGUtils.prefersReducedMotion()) return;

    const parallaxLayers = hero.querySelectorAll("[data-parallax]");

    window.addEventListener(
      "scroll",
      () => {
        const scrollY = window.scrollY;

        parallaxLayers.forEach((layer) => {
          const speed = Number(layer.dataset.parallax || 0.08);
          layer.style.transform = `translateY(${scrollY * speed}px)`;
        });
      },
      { passive: true }
    );
  });
})();
