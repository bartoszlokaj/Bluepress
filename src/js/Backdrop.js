const btn = document.querySelector(".hamburger-wrapper");
const backWrap = document.querySelector(".backdrop__wrapper");
const back = document.querySelector('.backdrop');
const sidedrawer = document.querySelector(".sidedrawer");
const close = document.querySelector('.sidedrawer__close');

const backdrop = () => {
  btn.addEventListener('click', () => {
    back.style.animation = 'backdrop-in .5s ease-in-out forwards';
  })

  back.addEventListener('click', () => {
    sidedrawer.style.animation = "move-to-left .5s ease-in-out forwards";
    back.style.animation = "backdrop-out .5s ease-in-out";
    close.style.animation = "hide .5s ease-in-out";
  })
}

backdrop();

export default backdrop;