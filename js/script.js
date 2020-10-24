// MOMENT ANIMATION TO HAPPEN

const product = document.querySelector('.product');
const container = document.querySelector('.container');
const text_3d = document.querySelector('.text-3d');

// ITEMS
const title = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const sizes = document.querySelector('.sizes');
const sneaker = document.querySelector('.sneaker img');
const purchase = document.querySelector('.btn-purchase');


const heading = document.querySelector('.heading');



// text_3d.addEventListener('mousemove', (e) => {
//     let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
//     let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
//     heading.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });


container.addEventListener('mousemove', (e) => {
    console.log(e);
    let xAxis = (window.innerWidth / 2 - e.clientX) / 15;
    let yAxis = (window.innerHeight / 2 - e.clientY) / 15;
    product.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// ANIMATION IN
container.addEventListener('mouseenter', (e) => {
    product.style.transition = `none`;
    title.style.transform = `translateZ(150px)`;
    subtitle.style.transform = `translateZ(100px)`;
    sizes.style.transform = `translateZ(75px)`;
    purchase.style.transform = `translateZ(50px)`;
    sneaker.style.transform = `translateZ(200px) rotateZ(-45deg)`;
});

// STOP ANIMATION
container.addEventListener('mouseleave', (e) => {
    product.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
    product.style.transition = `all 400ms ease`;
    title.style.transform = `translateZ(0px)`;
    subtitle.style.transform = `translateZ(0px)`;
    sizes.style.transform = `translateZ(0px)`;
    purchase.style.transform = `translateZ(0px)`;
    sneaker.style.transform = `translateZ(0px) rotateZ(0deg)`;
});