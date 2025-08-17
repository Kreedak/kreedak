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
  let nav = document.querySelector("nav");
  //if (window.innerWidth < 600)
    //if (window.scrollY > 150) {
        //nav.style.gap = "0px";
    //} 
    //else {
        //nav.style.gap = "10px"; 
    //}
  //else {
    if (window.scrollY > 150) {
        nav.classList.add("scrolled");
    } 
    else {
        nav.classList.remove("scrolled"); 
    }

  });
