const btn = document.querySelector(".hamburger-wrapper");
const backWrap = document.querySelector(".backdrop__wrapper");
const back = document.querySelector(".backdrop");
const side = document.querySelector(".sidedrawer");
const close = document.querySelector(".sidedrawer__close");

const closeButton = () => {
  close.addEventListener("click", () => {
    side.style.animation = "move-to-left .5s ease-in-out forwards";
    back.style.animation = "backdrop-out .5s ease-in-out";
    close.style.animation = "hide .4s ease-in-out";
  });
};

closeButton();

export default closeButton;
