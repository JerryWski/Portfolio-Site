const hamburgerBtn = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__links')
console.log(links);

const toggleButton = () => {
    hamburgerBtn.classList.toggle('is-active');
    navList.classList.toggle('active');
    document.body.classList.toggle('sticky-body');
}

const removeSticky = () => {
    document.body.classList.remove('sticky-body');
    navList.classList.remove('active');
    hamburgerBtn.classList.remove('is-active');
}

// const removeNav = () => {
//     links.forEach(li => {
//       li.classList.remove('active')  
//     });
// }


hamburgerBtn.addEventListener('click', toggleButton);
navList.addEventListener('click', removeSticky);