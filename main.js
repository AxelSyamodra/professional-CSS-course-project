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

// adding resize observer for better transition between screen size
const resizeObserver = new ResizeObserver((entries) => {
  // adding a class called resizing to element that resize when change screen
  document.body.classList.add("resizing");

  // remove "resizing"
  requestAnimationFrame(() => {
    document.body.classList.remove("resizing");
  });
});

// tell resizeObserver to watch the body
resizeObserver.observe(document.body);
