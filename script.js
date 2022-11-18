// let width = document.querySelector(".logo");
// var onresize = function() {
//    //your code here
//    //this is just an example
//    width.innerText = document.body.clientWidth;
// }
// window.addEventListener("resize", onresize);
const main = document.querySelector("main");

const observerGenerator = (name) => {
    return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            entry.isIntersecting
                ? entry.target.classList.add(`${name}-show`)
                : entry.target.classList.remove(`${name}-show`);
        });
    });
};

const iconObserver = observerGenerator("icon");
const textObserver = observerGenerator("text");

const hiddenIcons = document.querySelectorAll(".icon-hidden");
hiddenIcons.forEach((icon) => iconObserver.observe(icon));

const hiddenText = document.querySelectorAll(".text-hidden");
hiddenText.forEach((text) => textObserver.observe(text));

document.querySelector(".btn").addEventListener("click", (event) => {
    event.preventDefault();
});

document.querySelector(".nav__toggle").addEventListener("click", () => {
    document.querySelector("header").classList.toggle("open-menu");
});

window.Array.from(document.querySelectorAll(".nav__item")).forEach((navItem) =>
    navItem.addEventListener("click", () => {
        document.querySelector("header").classList.toggle("open-menu");
    })
);

window.addEventListener("mousemove", (event) => {
    console.log(event.clientX);
    console.log(event.clientY);
});
