AOS.init({
    duration: 800
});

console.log('hi');

const burger = document.querySelector('.burger-menu')
const standardUl = document.querySelector('.standard-ul')
const liEl = document.querySelectorAll('.standard-ul li')
const aLink = document.querySelectorAll('.standard-ul li a')
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
    // not working yet 🤔
    // lineOne.classList.toggle('line-1-active');
    // lineTwo.classList.toggle('line-2-active');
    // lineThree.classList.toggle('line-3-active');
});

// To reomve nav once a link is clicked
const closeNav = () => {
    standardUl.classList.remove("open");
    lineOne.classList.toggle('color')
    lineTwo.classList.toggle('color')
    lineThree.classList.toggle('color')
    liEl.forEach(li => {
        li.classList.toggle('fade');
    });
    // navMenu.classList.remove("showMenu");
}

// A link clicked menu closes

aLink.forEach((link) => {
    link.addEventListener("click", () => {
        // Remove showMenu class from navMenu so that it hides when a link is clicked
        // Remove open class from navIcon so that it changes back to hamburger icon
        closeNav();
    })
})