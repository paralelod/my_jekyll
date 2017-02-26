
  var FOOTER_APPEARS = 400;
  var TRIGGER = 80; // size of the footer

  var lastScrollTop = 0;

  var footer = document.getElementById('footer-sticky');
  //var footerLogo = document.getElementById('logo-footer');
  //var menuHome = document.getElementById('menu-home');
  //var menuAbout = document.getElementById('menu-about');




  window.addEventListener("scroll", function () {
    var position = window.scrollY;

    height = document.body.scrollHeight - document.body.offsetHeight;

    if (position > lastScrollTop) {
      // downscroll code
      if (position > height - TRIGGER) {
        footer.classList.remove('footer-closed');
      } else {
        footer.classList.add('footer-closed');
      }

      setTimeout(function () {

        var footerOffset = footer.getBoundingClientRect().top;

        if (counter === 0) {
          if (position + FOOTER_APPEARS > footerOffset) {
            if (!progressSetter) {
              progressSetter = true;
            }
          }

          setTimeout(function () {
            counter = 1;
          }, 800);
        }

      }, 600);
    } else {
      // upscroll code
      footer.classList.add('footer-closed');

      setTimeout(function () {
        if (position === 0) {
          footer.classList.remove('footer-closed');
        }

       

      }, 100);
    }
  });


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
var menuButton = document.getElementById('menuButton');
menuButton.addEventListener('click', function (e) {
    menuButton.classList.toggle('is-active');
    e.preventDefault();
});


	
jQuery(document).on("scroll",function(){
  if($(document).scrollTop()>100){ //scroll size
      $(".anim-menu").addClass("undocked");
  } else{
      $(".anim-menu").removeClass("undocked");
  }
});


jQuery(".main-container").on("scroll",function(){
  if($(".main-container").scrollTop()>100){ //scroll size
      $(".anim-menu").addClass("undocked");
  } else{
      $(".anim-menu").removeClass("undocked");
  }
});
//burger menu

$(function() {
	$(".right-off-canvas-toggle, .exit-off-canvas").click(function() {
        $(".top-bar").toggleClass("top-bar-close");
        $(".middle-bar").toggleClass("middle-bar-close");
        $(".bottom-bar").toggleClass("bottom-bar-close");
    });
});

//side sideNav

 function sideNav() {
  if ($(window).width() < 769) {
    $('.off-canvas-wrap').removeClass('move-right');
    $('.left-off-canvas-toggle').show();
  } else {
    $('.off-canvas-wrap').addClass('move-right');
    $('.left-off-canvas-toggle').hide();
  }  
}

$(window).resize(function() {
  sideNav();
});
 //CONTENT PRELOADER

$(window).load(function() { // makes sure the whole site is loaded
        $('.preloader').fadeOut(); // will first fade out the loading animation
        $('.overlay').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'})
});



// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-48
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

jQuery(document).ready(function() {
  var offset = 220;
  var duration = 500;
  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
    } else {
      jQuery('.back-to-top').fadeOut(duration);
    }
  });
});






var heroBg = $('.hero-post');
    heroTitle = $('.hero-post-box');
    //when scrolltop reaches 35px then opacity of divs is 1 - 35/35 = 0
    limitTitle = 80;
    limitBg = 80;  

$(window).on('scroll', function() { 
  
  var st = $(this).scrollTop();

  if (st <= limitBg) { 
    heroBg.css({ 'opacity' : (0.2 + st/limitBg) });
  }

  if (st <= limitTitle) { 
    heroTitle.css({ 'opacity' : (1 - st/limitTitle) });
  }
  // make sure opacity goes to 0 and back

  if (st >= limitTitle) { 
    heroTitle.css({ 'opacity' : (1 - st/limitTitle) });
  }

});
(function() {

  var fa = document.createElement('link');
  fa.rel = 'stylesheet';
  fa.type = 'text/css';
  fa.href = 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
  document.head.appendChild(fa);

  var sd = document.createElement('div');
  sd.id = 'social';
  document.getElementsByTagName('body')[0].appendChild(sd);

  var container = document.getElementById('social');

  container.innerHTML = '<div class="icis-social-bar">' +
    '<div class="icis-social-icon icis-social-linkedin" onclick="share("linkedin")"><i class="fa fa-linkedin" aria-hidden="true"></i></div>' +
    '<div class="icis-social-icon icis-social-twitter" onclick="share("twitter")"><i class="fa fa-twitter" aria-hidden="true"></i></div>' +
    '<div class="icis-social-icon icis-social-googleplus" onclick="share("googleplus")"><i class="fa fa-google-plus-official" aria-hidden="true"></i></div>' +
    '<div class="icis-social-icon icis-social-email" onclick="share("email")"><i class="fa fa-envelope" aria-hidden="true"></i></div>';

}());

//autohor: Gregory Schier http://codepen.io/gschier/pen/jkivt


var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};
