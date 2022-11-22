const hamburgerBtn = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
const arrowBtns = document.querySelectorAll(".card__button");

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
  btn.addEventListener("mouseover", function () {
    this.classList.add("hide");
  });
}

for (const btn of arrowBtns) {
    btn.addEventListener("mouseleave", function () {
      this.classList.remove("hide");
    });
  }

hamburgerBtn.addEventListener("click", toggleButton);
navList.addEventListener("click", removeSticky);
