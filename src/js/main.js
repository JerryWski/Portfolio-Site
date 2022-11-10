const hamburgerBtn = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');

const toggleButton = () => {
    hamburgerBtn.classList.toggle('is-active');
    navList.classList.toggle('active')
}


hamburgerBtn.addEventListener('click', toggleButton)