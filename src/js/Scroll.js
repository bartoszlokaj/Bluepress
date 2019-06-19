import anchor from './Anchor';

const smoothScroll = (tar, duration) => {
  let target = document.querySelector(tar);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let startTime = null;

  let animation = currentTime => {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = easeInOut(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);

    function easeInOut(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t * t * t + 2) + b;
    }
  };

  requestAnimationFrame(animation);

  console.log(target);
  console.log(targetPosition);
  console.log(startPosition);
};

////  LINKS
////////////////////////////
let swiper = document.querySelector(".swipe");
let linksHome = document.querySelectorAll(".link--home");
let linksAbout = document.querySelectorAll('.link--about');
console.log(linksAbout);

swiper.addEventListener("click", () => {
  smoothScroll(".section__about", 500);
});

linksHome.forEach(e => {
  e.addEventListener("click", () => {
    smoothScroll(".section__hero", 500);
  });
});

linksAbout.forEach(e => {
  e.addEventListener('click', () => {
    smoothScroll(".section__about", 500);
  })
})

export default smoothScroll;
