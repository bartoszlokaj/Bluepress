const backWrap = document.querySelector(".backdrop__wrapper");
const back = document.querySelector('.backdrop');
const sidedrawer = document.querySelector('.sidedrawer');

const backdrop = () => {
  backWrap.addEventListener('click', () => {
    console.log('dupa');
    sidedrawer.style.transform = "translateX(-70rem)";
    backWrap.style.display = "none";
    back.style.opacity = "0";
  })
}

backdrop();

export default backdrop;