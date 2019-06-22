/**
 * @author ddzy
 * @since 2019/6/22
 */

window.onload = function () {
  initColorfulBubble();
}

function __init__() {
  initColorfulBubble();
}

function initColorfulBubble() {
  new ColorfulBubble({
    container: '#color-bubble-wrapper',
    cvsWidth: window.innerWidth,
    cvsHeight: window.innerHeight,
    cvsBgColor: '#fff',
    bubbleScaleRange: {
      min: 1,
      max: 2,
    },
    bubbleNum: 200,
  });
}