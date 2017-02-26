 document.addEventListener("DOMContentLoaded", function () {

  "use strict";

  var FOOTER_APPEARS = 400;
  var TRIGGER = 80;

  var scrolling = false;
  var lastScroll;

  var heroTitle = document.getElementById('hero-title');
  var goDownButton = document.getElementById('go-down');
  var lastScrollTop = 0;
  var height;
  var header = document.getElementById('header');
  var cotnentTop = document.getElementById('content').getBoundingClientRect().top;


  // Utils
  function fade() {
    lastScroll = window.scrollY;

    heroTitle.style.transform = 'translate3d(0,' + Math.round(lastScroll / 2) + 'px,0)';
    heroTitle.style.opacity = (100 - lastScroll / 4) / 100;


    goDownButton.style.opacity = (100 - lastScroll / 4) / 100;

    if (scrolling === true) {
      window.requestAnimationFrame(fade);
    }
  }

  function setHeight(el) {
    var elHeight = document.body.offsetHeight;
    el.style.height = elHeight + 'px';
    el.style.maxHeight = elHeight + 'px';
  }

  function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function () {
      element.scrollTop = element.scrollTop + perTick;
      if (element.scrollTop === to) return;
      scrollTo(element, to, duration - 10);
    }, 10);
  }

  // Executions block
  heroTitle.style.minHeight = (heroTitle.childNodes[1].offsetHeight + 100) + 'px';

  setHeight(header);

  if (window.scrollY > cotnentTop) {
    progressSetter = true;
  }

  window.addEventListener("resize", function () {
    setTimeout(function () {
      setHeight(header);
    }, 200);
  });


  // Animate Scrolling to content on click on the elements
  var goDownElements = document.getElementsByClassName('go-down-event');
  goDownElements = Array.prototype.slice.call(goDownElements);
  goDownElements.forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var cotnentTop = document.getElementById('content').getBoundingClientRect().top;
      scrollTo(document.body, cotnentTop, 200);
    });
  });
});
// Executions block