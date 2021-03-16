export function DarkMode() {
  let darkModeLS = localStorage.getItem("darkMode");
  const darkmodeInput = document.querySelector(".darkmode__toggle .chk");
  const heroLottie = document.querySelector(".hero__lottie");

  const enableDarkMode = () => {
    document.body.classList.add("dark");
    localStorage.setItem("darkMode", "enabled");
    heroLottie.load("lotties/hero-dark.json");
  };

  const disableDarkMode = () => {
    document.body.classList.remove("dark");
    localStorage.setItem("darkMode", null);
    heroLottie.load("lotties/hero-light.json");
  };

  if (darkModeLS === "enabled") {
    darkmodeInput.checked = true;
    enableDarkMode();
  }

  darkmodeInput.addEventListener("click", () => {
    darkModeLS = localStorage.getItem("darkMode");
    if (darkModeLS !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
}
