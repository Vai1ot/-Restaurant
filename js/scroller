const scroller = document.getElementById("scroller");
const scrollerUnHidePoint = document.getElementById("scrollerUnHidePoint");
var unHidePosTop;

const scrollPosTop = () => {
  return window.pageYOffset ?? 0;
};

const unHidePointPosTop = () => {
  return scrollerUnHidePoint.getBoundingClientRect().top + scrollPosTop();
};

const setScrollVisibility = (unHidePos) => {
  if (unHidePos == undefined) {
    unHidePos = unHidePointPosTop();
    unHidePosTop = unHidePos;
  }
  if (
    scrollPosTop() + window.innerHeight > unHidePos
  ) {
    scroller.classList.remove('removed');
  } else {
    scroller.classList.add('removed');
  }
};

document.body.addEventListener('load', () => {
  setScrollVisibility();
});

window.addEventListener('resize', () => {
  setScrollVisibility();
});

window.addEventListener('scroll', () => {
  setScrollVisibility(unHidePosTop);
});

scroller.classList.add('removed');
