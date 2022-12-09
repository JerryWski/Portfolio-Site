const hamburgerBtn = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
const arrowBtns = document.querySelectorAll(".card__button");
const footerYear = document.querySelector('.footer__year');
const navLinks = document.querySelectorAll('.links');
const linksArr = Array.from(navLinks);
const hiddenElements = document.querySelectorAll('.hide');
const audio = document.querySelector('.audio');
const playPauseBtn = document.querySelector('.play-button');
const musicOnOff = document.querySelector('.music-on-off');
const speakerImg = document.querySelector('.speaker-img')
console.log(speakerImg.attributes.fill);
let count = 0;

const playPause = () => {
  if(count== 0) {
    count = 1
    audio.play();
    musicOnOff.innerHTML = "OFF";
    musicOnOff.style.color= "hsl(342, 98%, 53%)";
    speakerImg.setAttribute('fill', 'hsl(342, 98%, 53%)');
  }else {
    count = 0;
    audio.pause();
    musicOnOff.innerHTML = "ON";
    musicOnOff.style.color= "var(--second-lime)";
    speakerImg.setAttribute('fill', 'var(--second-lime)');
  }
}

playPauseBtn.addEventListener('click', playPause)

//iobserver
const observer = new IntersectionObserver ((entries) => {
  entries.forEach((entry) => {
    // console.log(entry)
    if(entry.isIntersecting) {
      entry.target.classList.add('open');
    }
    else{entry.target.classList.remove('open')} 
    // if we want loop effeft
  });
})

hiddenElements.forEach((el) => observer.observe(el));
//
const toggleButton = () => {
  hamburgerBtn.classList.toggle("is-active");
  navList.classList.toggle("active");
  document.body.classList.toggle("sticky-body");
};
//this func removes above parameters so that's why page is again scrollable
const removeSticky = () => {
  document.body.classList.remove("sticky-body");
  navList.classList.remove("active");
  hamburgerBtn.classList.remove("is-active");
};

for (const btn of arrowBtns) {
  btn.addEventListener("mouseenter", function () {
    this.classList.add("hide");
  });
}

for (const btn of arrowBtns) {
    btn.addEventListener("mouseleave", function () {
      this.classList.remove("hide");
    });
  }

const currentYear = () => {
  const year = (new Date).getFullYear();
  footerYear.innerHTML = '©' + year;
}

currentYear();
hamburgerBtn.addEventListener("click", toggleButton);

linksArr.forEach(links => {
  links.addEventListener("click", removeSticky);
});
