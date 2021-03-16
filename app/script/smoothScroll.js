export function smooothScroll(e) {
  e.preventDefault();
  const href = e.target.hash;
  const targetElm = document.querySelector(href);

  targetElm.scrollIntoView({
    behavior: "smooth",
  });
}
