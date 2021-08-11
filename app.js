console.log('hi');

const burger = document.querySelector('.burger-menu')
const standardUl = document.querySelector('.standard-ul')
const liEl = document.querySelectorAll('.standard-ul li')
const lineOne = document.querySelector('.line-1')
const lineTwo = document.querySelector('.line-2')
const lineThree = document.querySelector('.line-3')

burger.addEventListener('click', () => {
    standardUl.classList.toggle('open')
    lineOne.classList.toggle('color')
    lineTwo.classList.toggle('color')
    lineThree.classList.toggle('color')
    liEl.forEach(li => {
        li.classList.toggle('fade');
    });
});