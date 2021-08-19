const burger = document.querySelector('.burger-menu')
const standardUl = document.querySelector('.standard-ul')
const nav = document.querySelector('.nav-container')
const liEl = document.querySelectorAll('.standard-ul li')
const aLink = document.querySelectorAll('.standard-ul li a')
const lineOne = document.querySelector('.line-1')
const lineTwo = document.querySelector('.line-2')
const lineThree = document.querySelector('.line-3')

// Opens mobile nav

burger.addEventListener('click', () => {
    standardUl.classList.toggle('open')
    nav.classList.toggle('padding')
    lineOne.classList.toggle('color')
    lineTwo.classList.toggle('color')
    lineThree.classList.toggle('color')
    liEl.forEach(li => {
        li.classList.toggle('fade');
    });  
    // burger animation
    burger.classList.toggle('toggle')
});

// To remove nav once a link is clicked
const closeNav = () => {
    standardUl.classList.remove("open");
    nav.classList.remove('padding')
    lineOne.classList.toggle('color')
    lineTwo.classList.toggle('color')
    lineThree.classList.toggle('color')
    liEl.forEach(li => {
        li.classList.toggle('fade');
    });
    
}

// when a link clicked menu closes

aLink.forEach((link) => {
    link.addEventListener("click", () => {
        // Remove all classes to state prior to hamburger menu click
        closeNav();
        burger.classList.toggle('toggle')
    })
})