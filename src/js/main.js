const hamburgerBtn = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');

const toggleButton = () => {
    hamburgerBtn.classList.toggle('is-active');
}


hamburgerBtn.addEventListener('click', toggleButton)