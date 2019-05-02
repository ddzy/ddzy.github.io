window.onload = () => {
  initColorfulBubble();
}

function initColorfulBubble() {
  new ColorfulBubble({
    container: '#color-bubble-wrapper',
    cvsWidth: window.innerWidth,
    cvsHeight: window.innerHeight,
    cvsBgColor: '#fff',
    bubbleNum: 100,
  });
}