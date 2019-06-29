window.onscroll = function() {
  topper();
};

const topperBtn = document.querySelector(".topper");
let aboutPosition = document.querySelector(".section__about");

const topper = () => {
  if (document.body.scrollTop > aboutPosition.getBoundingClientRect().top - 1) {
    topperBtn.style.animation = "topper-in .2s ease-in-out forwards";
  }
  if (
    document.body.scrollTop <
    aboutPosition.getBoundingClientRect().top - 1
  ) {
    topperBtn.style.animation = "topper-out .2s ease-in-out forwards";
  }
};
