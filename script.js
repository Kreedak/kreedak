const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {      // если прокрутили больше 50px
    header.style.padding = '5px 0';  // уменьшаем высоту
  } else {
    header.style.padding = '20px 0';  // возвращаем исходную высоту
  }
});
