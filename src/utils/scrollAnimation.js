export function initScrollAnimation() {
  if (!("IntersectionObserver" in window)) return;

  const elements = document.querySelectorAll(
    ".fade-in, .fade-up, .fade-left, .fade-right"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => {
    el.classList.remove("show"); // reset
    observer.observe(el);
  });
}
