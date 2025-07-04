const navToggle = document.querySelector('[aria-controls="primary-nav"]');
const primaryNav = document.querySelector("#primary-nav");

navToggle.addEventListener("click", () => {
  //   check close or open
  const navOpen = navToggle.getAttribute("aria-expanded");

  //   the value of getAttribute is string not boolean
  if (navOpen === "false") {
    navToggle.setAttribute("aria-expanded", "true");
  } else {
    navToggle.setAttribute("aria-expanded", "false");
  }

  console.log(navOpen);
});
