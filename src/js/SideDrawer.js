const btn = document.querySelector(".hamburger-wrapper");
const backWrap = document.querySelector(".backdrop__wrapper");
const back = document.querySelector(".backdrop");
const side = document.querySelector(".sidedrawer");
const close = document.querySelector(".sidedrawer__close");

const sidedrawer = () => {
  btn.addEventListener("click", () => {
    side.style.transform = "translateX(0)";
    backWrap.style.display = "block";
    back.style.opacity = ".7";
  });

  close.addEventListener("click", () => {
    side.style.transform = "translateX(-70rem)";
    backWrap.style.display = "none";
    back.style.opacity = "0";
  });
};

sidedrawer();



export default sidedrawer;
