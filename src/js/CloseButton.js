const backDrop = document.querySelector(".backdrop");
const sidedrawer = document.querySelector(".sidedrawer");
const close = document.querySelector(".sidedrawer__close");

const closeButton = () => {
  close.addEventListener("click", () => {
    sidedrawer.style.animation = "move-to-left .5s ease-in-out forwards";
    backDrop.style.animation = "backdrop-out .5s ease-in-out";
    close.style.animation = "hide .4s ease-in-out";
  });
};

closeButton();

export default closeButton;
