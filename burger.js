const burgerMenu = document.querySelector('.burger-menu');
const closeBurger = document.querySelector('.close-burger');
const bLink1 = document.querySelector('.bur1');
const bLink2 = document.querySelector('.bur2');
const bLink3 = document.querySelector('.bur3');
const bLink4 = document.querySelector('.bur4');
const bMenu = document.querySelector('.b-menu');
const burgerBtn = document.querySelector('.burger-btn');
burgerBtn.addEventListener('click', ()=>{
    burgerMenu.classList.add('active');
    bMenu.classList.add('active');
});
closeBurger.addEventListener('click', ()=>{
    burgerMenu.classList.remove('active');
    bMenu.classList.remove('active');
});
bLink1.addEventListener('click', ()=>{
    burgerMenu.classList.remove('active');
    bMenu.classList.remove('active');
});
bLink2.addEventListener('click', ()=>{
    burgerMenu.classList.remove('active');
    bMenu.classList.remove('active');
});
bLink3.addEventListener('click', ()=>{
    burgerMenu.classList.remove('active');
    bMenu.classList.remove('active');
});
bLink4.addEventListener('click', ()=>{
    burgerMenu.classList.remove('active');
    bMenu.classList.remove('active');
});
