import smoothScroll from "./Scroll";

const backdrop = document.querySelector(".backdrop");
const sidedrawer = document.querySelector('.sidedrawer');

const anchor = () => {
  linksHome.forEach(e => {
    e.addEventListener("click", () => {
      smoothScroll(".section__hero", 500);
    });
  });

  swiper.addEventListener("click", () => {
    smoothScroll(".section__about", 500);
  });
};

let swiper = document.querySelector(".swipe");
let link = document.querySelectorAll(".link");

link.forEach(e => {
  e.addEventListener('click', () => {
    close();
  })
})

const close = () => {
  backdrop.style.animation = "backdrop-out .3s ease-in-out";
  sidedrawer.style.animation = "move-to-left .3s ease-in-out forwards";
}

export default anchor;
