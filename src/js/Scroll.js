window.onscroll = function() {
  active();
};

const backdrop = document.querySelector(".backdrop");
const sidedrawer = document.querySelector('.sidedrawer');

let link = document.querySelectorAll(".link");

let active = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.querySelector(".link--about").classList.add('active');
    } else {
      document.querySelector(".link--about").classList.remove("active");
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
