console.log('hi');

const burger = document.querySelector('.burger-menu')
const navContainer = document.querySelector('.nav-container')
const liEl = document.querySelectorAll('.standard-ul li')

burger.addEventListener('click', () => {
    navContainer.classList.toggle('open')
    liEl.forEach(li => {
        li.classList.toggle('fade');
    });
});