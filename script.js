const header = document.querySelector('header');

function updateHeader(){
  if (window.scrollY > 50){
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
}
window.addEventListener('scroll', updateHeader);
window.addEventListener('load', updateHeader);
