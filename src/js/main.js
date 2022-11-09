const hamburgerBtn = document.querySelector('.nav__hamburger');
const navList = document.querySelector('.nav__list');

const toggleButton = () => {
    navList.classList.toggle('show')
}


hamburgerBtn.addEventListener('click', toggleButton)