window.onscroll = function() {active()};

const backdrop = document.querySelector(".backdrop");
const sidedrawer = document.querySelector('.sidedrawer');

let link = document.querySelectorAll(".link");

let active = () => {
  let heroLink = document.querySelectorAll(".link--hero");
  let aboutLink = document.querySelectorAll(".link--about");
  let techLink = document.querySelectorAll(".link--tech");
  let offerLink = document.querySelectorAll('.link--offer');

  let heroPosition = document.querySelector(".section__hero");
  let aboutPosition = document.querySelector(".section__about");
  let techPosition = document.querySelector(".section__tech");
  let offerPosition = document.querySelector('.section__offer');
  
  let heroHeight = heroPosition.height;
  console.log(heroHeight);

    if (
      document.body.scrollTop > aboutPosition.getBoundingClientRect().top 
    ) {
      aboutLink.forEach(e => {
        e.classList.add("active");
      });
    } else {
      aboutLink.forEach(e => {
        e.classList.remove("active");
      });
    }
  
};

link.forEach(e => {
  e.addEventListener('click', () => {
    close();
  })
})

const close = () => {
  backdrop.style.animation = "backdrop-out .3s ease-in-out";
  sidedrawer.style.animation = "move-to-left .3s ease-in-out forwards";
}

export default scroll;
