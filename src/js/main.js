const hamburgerBtn = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
const arrowBtns = document.querySelectorAll(".card__button");
const footerYear = document.querySelector(".footer__year");
const navLinks = document.querySelectorAll(".links");
const linksArr = Array.from(navLinks);
const hiddenElements = document.querySelectorAll(".hide");
const audio = document.querySelector(".audio");
const playPauseBtn = document.querySelector(".play-button");
const musicOnOff = document.querySelector(".music-on-off");
const speakerImg = document.querySelector(".speaker-img");

let count = 0;

const playPause = () => {
  if (count == 0) {
    count = 1;
    audio.play();
    musicOnOff.innerHTML = "OFF";
    musicOnOff.style.color = "hsl(342, 98%, 53%)";
    speakerImg.setAttribute("fill", "hsl(342, 98%, 53%)");
  } else {
    count = 0;
    audio.pause();
    musicOnOff.innerHTML = "ON";
    musicOnOff.style.color = "var(--second-lime)";
    speakerImg.setAttribute("fill", "var(--second-lime)");
  }
};

//iobserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add("open");
    }
    // else{entry.target.classList.remove('open')}
    // if we want loop effect
  });
});

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
  const year = new Date().getFullYear();
  footerYear.innerHTML = "©" + year;
};

currentYear();
hamburgerBtn.addEventListener("click", toggleButton);
playPauseBtn.addEventListener("click", playPause);

linksArr.forEach((links) => {
  links.addEventListener("click", removeSticky);
});

//animation for circle skills progress bars

let circularProgress = document.querySelectorAll(".circular-progress"),
  progressValue = document.querySelectorAll(".progress-value");

console.log(progressValue);

let progressStartValue = 0,
  speed = 10;

  for (let i = 0; i < circularProgress.length; i++) {
    let progressEndValue = parseInt(progressValue[i].textContent);
    let progress = setInterval(() => {
    progressStartValue++;

    progressValue[i].textContent = `${progressStartValue}%`;
    circularProgress[i].style.background = `conic-gradient(hsl(248, 44%, 42%) ${
      progressStartValue * 3.6}deg, #ededed 0deg)`;
      circularProgress[i].style.transition = '0.3s'

    if (progressStartValue == progressEndValue) {
      clearInterval(progress);
    }
  }, speed);
}

