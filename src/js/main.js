const hamburgerBtn = document.querySelector('.hamburger');
console.log(hamburgerBtn);
const navList = document.querySelector('.nav__list');

const toggleButton = () => {
    hamburgerBtn.classList.toggle('is-active');
    navList.classList.toggle('active')
}


hamburgerBtn.addEventListener('click', toggleButton)