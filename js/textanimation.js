
let mouseTarget = document.querySelector('.slide-hover');

mouseTarget.addEventListener('mouseenter', e => {
  mouseTarget.style.opacity = '1';
});

mouseTarget.addEventListener('mouseleave', e => {
  mouseTarget.style.opacity = '0';
});