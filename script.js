window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 150) {
    header.classList.add("shrink");
  } 
  else {
    header.classList.remove("shrink");
  }
});

window.addEventListener("scroll", function() {
  const nav = document.querySelector("nav");
  if (window.scrollY > 150) {
      nav.classList.add("scrolled");
  } 
  else {
      nav.classList.remove("scrolled"); 
  }
});

