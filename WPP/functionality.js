const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
let on = false;
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
    
})