(() => {
  "use strict";

  const Utils = {
    clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    },

    lerp(start, end, amount) {
      return start + (end - start) * amount;
    },

    qs(selector, scope = document) {
      return scope.querySelector(selector);
    },

    qsa(selector, scope = document) {
      return Array.from(scope.querySelectorAll(selector));
    },

    prefersReducedMotion() {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    },

    isMobile() {
      return window.matchMedia("(max-width: 768px)").matches;
    }
  };

  window.HGUtils = Utils;
})();
