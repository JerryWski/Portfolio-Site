const hamburgerBtn = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');


const toggleButton = () => {
    hamburgerBtn.classList.toggle('is-active');
    navList.classList.toggle('active');
    document.body.classList.toggle('sticky-body');
}
//this func removes above parameters so that's why page is again scrollable
const removeSticky = () => {
    document.body.classList.remove('sticky-body');
    navList.classList.remove('active');
    hamburgerBtn.classList.remove('is-active');
}

hamburgerBtn.addEventListener('click', toggleButton);
navList.addEventListener('click', removeSticky);