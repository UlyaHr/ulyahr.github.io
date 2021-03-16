export function SectionObs() {
  const sections = document.querySelectorAll("section");
  const bubble = document.querySelector(".header__links--active");

  const option = {
    threshold: 0.3,
    rootMargin: "80px",
  };

  const navCheck = (entries) => {
    entries.forEach((entry) => {
      const className = entry.target.className;
      const activeLink = document.querySelector(`[data-page=${className}]`);
      const linkPosition = activeLink.getBoundingClientRect();
      const direction = {
        width: linkPosition.width,
        left: linkPosition.left,
      };

      if (entry.isIntersecting) {
        bubble.style.setProperty("width", `${direction.width}px`);
        bubble.style.setProperty("height", "4px");
        bubble.style.setProperty("top", "53px");
        bubble.style.setProperty("left", `${direction.left}px`);
      }
    });
  };

  let observer = new IntersectionObserver(navCheck, option);

  sections.forEach((section) => {
    observer.observe(section);
  });
}
