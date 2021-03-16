import { smooothScroll } from "./smoothScroll.js";

export function Header() {
  const navbar = document.querySelector(".header");
  const logo = document.querySelector(".header__logo");
  const burger = document.querySelectorAll(".header__menu");
  const overlay = document.querySelector(".overlay");
  const menu = document.querySelector(".header__links");
  const darkmode = document.querySelector(".darkmode__toggle");

  const menuLink = menu.childNodes;

  const burgerClick = () => {
    navbar.classList.toggle("menu-clicked");
    if (!overlay.classList.contains("fade-in")) {
      overlay.classList.add("fade-in");
      overlay.classList.remove("fade-out");
      menu.classList.add("fade-in");
      menu.classList.remove("fade-out");
      darkmode.classList.add("fade-in");
      darkmode.classList.remove("fade-out");
    } else {
      overlay.classList.add("fade-out");
      overlay.classList.remove("fade-in");
      menu.classList.add("fade-out");
      menu.classList.remove("fade-in");
      darkmode.classList.add("fade-out");
      darkmode.classList.remove("fade-in");
    }
    if (!navbar.classList.contains("header--scrolled")) {
      navbar.classList.add("header--scrolled");
    }
  };

  const menuClick = () => {
    if (navbar.classList.contains("menu-clicked")) {
      burger.forEach((btn) => btn.classList.toggle("active"));
      burgerClick();
    }
  };

  menuLink.forEach((link) => {
    link.addEventListener("click", (e) => {
      smooothScroll(e);
      menuClick();
    });
  });

  logo.addEventListener("click", (e) => {
    smooothScroll(e);
    menuClick();
  });

  burger.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      burgerClick();
    });
  });

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("header--scrolled", window.scrollY > 0);
  });
}
