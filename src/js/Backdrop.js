const btn = document.querySelector(".hamburger-wrapper");
const back = document.querySelector(".backdrop");
const sidedrawer = document.querySelector(".sidedrawer");
const close = document.querySelector(".sidedrawer__close");

const backdrop = () => {
  btn.addEventListener("click", () => {
    back.style.animation = "backdrop-in .5s ease-in-out forwards";
  });

  back.addEventListener("click", () => {
    back.style.animation = "backdrop-out .5s ease-in-out";
    sidedrawer.style.animation = "move-to-left .5s ease-in-out forwards";
    close.style.animation = "hide .5s ease-in-out";
  });
};

backdrop();

export default backdrop;
