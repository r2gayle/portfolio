console.log('hi');

const burger = document.querySelector('.burger-menu')
const standardUl = document.querySelector('.standard-ul')
const liEl = document.querySelectorAll('.standard-ul li')

burger.addEventListener('click', () => {
    standardUl.classList.toggle('open')
    liEl.forEach(li => {
        li.classList.toggle('fade');
    });
});