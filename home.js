// const hamburger = document.getElementById('hamburger');
// const navList = document.querySelector('.nav-list');

// hamburger.addEventListener('click', () => {
//   navList.classList.toggle('active');
// });

const hamburger = document.getElementById('hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navList.classList.toggle('active');
});