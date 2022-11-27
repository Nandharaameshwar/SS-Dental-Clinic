
const sandwich = document.getElementsByClassName('Hamburger')[0];
const nav = document.getElementsByClassName('NavUl')[0];

sandwich.addEventListener('click', () =>{
    nav.classList.toggle('active');
})