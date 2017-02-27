 $(document).ready(function() {
      $('#fullpage-noscroll').fullpage({
        menu: 'anim-menu',
        resize : true,
        fitToSection: false,
        autoScrolling: false,
        navigation: false,
        //fixedElements: '.footer-sticky',
        //navigationPosition: 'right',
        //navigationTooltips: ['firstSlide', 'secondSlide'],
        //controlArrows: false,
        animateAnchor: false,
        slidesNavigation: false,
        //slidesNavPosition: 'bottom',

        showActiveTooltip: false

        //afterRender: function () {
        //on page load, start the slideshow
         //slideTimeout = setInterval(function () {
                //$.fn.fullpage.moveSlideRight();
            //}, 3500);
         // },

        /* Hide the slides container before the next slide loads
        onSlideLeave: function(anchorLink, index, slideIndex, direction) {
          $.fn.fullpage.setScrollingSpeed(0);
          $('.fp-section').find('.fp-slidesContainer').hide();
        },
  
        // Display the slides container by fading it in after the next slide has been loaded.
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
          $('.fp-section').find('.fp-slidesContainer').fadeIn(2500);
          $.fn.fullpage.setScrollingSpeed(2500);
        },

        /*onLeave: function (index, direction) {
        //after leaving section 1 (home) and going anywhere else, whether scrolling down to next section or clicking a nav link, this SHOULD stop the slideshow and allow you to navigate the site...but it does not
        if (index == '1') {
            console.log('on leaving the slideshow/section1');
            clearInterval(slideTimeout);
          }
        }*/
      }
      );
    });
    console.log('INIT - fullpage');