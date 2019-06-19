const btn = document.querySelector(".hamburger-wrapper");
const back = document.querySelector(".backdrop");
const side = document.querySelector(".sidedrawer");
const close = document.querySelector(".sidedrawer__close");

const sidedrawer = () => {
  btn.addEventListener("click", () => {
    side.style.animation = "move-from-left .5s ease-in-out forwards";
    close.style.animation = "scale-pop-up .8s ease-in-out";
  });

  back.addEventListener("click", () => {
    side.style.animation = "move-to-left .5s ease-in-out forwards";
    close.style.animation = "hide .8s ease-in-out";
  });
};

sidedrawer();



export default sidedrawer;
