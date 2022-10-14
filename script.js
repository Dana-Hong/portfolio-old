let width = document.querySelector(".logo");
var onresize = function() {
   //your code here
   //this is just an example
   width.innerText = document.body.clientWidth;
}
window.addEventListener("resize", onresize);

document.querySelector(".btn").addEventListener("click", (event) => {
   event.preventDefault();
})

document.querySelector('.nav__toggle').addEventListener('click', () => {
   document.querySelector('header').classList.toggle('open-menu');
});

Array.from(document.querySelectorAll('.nav__item')).forEach(navItem => navItem.addEventListener('click', () => {
   document.querySelector('header').classList.toggle('open-menu');
}));

