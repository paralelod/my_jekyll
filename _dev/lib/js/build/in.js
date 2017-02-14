$(document).ready(function() {
    $('.animsition').animsition();
  });

  AOS.init({
        easing: 'ease-in-out-sine'
      });
//fitvid

$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $([".fit"]).fitVids();
  });

//foundation init
  $(document).foundation();

  //foundation init JOYRIDE *crash ORBIT slider
  //$(document).foundation('joyride', 'start');

/* acessar link accordion Foundation --->  

setTimeout(function() {

  var hash = window.location.hash;
  if (hash != ''){

    $('a[href="'+ hash +'"]').trigger('click.fndtn.accordion');

    $('html, body').animate({
      scrollTop: $('dl.accordion').offset().top
    });
  }
}, 600);*/
  $(document).ready(function() {
      $('#fullpage').fullpage({
        menu: 'anim-menu',
        resize : true,
        fitToSection: false,
        scrollingSpeed: 700,
        autoScrolling: true,
        keyboardScrolling: true,
        animateAnchor: true,
        responsiveWidth : 800,
        responsiveHeight: 675,
        slidesNavigation: true,
        slidesNavPosition: 'bottom'
      
      });
    });
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
/*$(function(){
var $grid= $('.grid').isotope({
    itemSelector: '.grid li',
    percentPosition: true,
    //isAnimated: false,
    transitionDuration:0,
    //layoutMode: 'fitRows',
    isInitLayout: true,
    });

    $grid.imagesLoaded().always(function(){
        var elements=".grid-item";
        var $elements=$(elements);
        $grid.append($elements);
        $grid.isotope();
    });

    // filter .Creative_Direction items
    $grid.isotope({ filter: '.Creative_Direction' });

    // filter .Experience items
    $grid.isotope({ filter: '.Experience' });

    // filter .Experience items
    $grid.isotope({ filter: '.Design' });

    // show all items
    $grid.isotope({ filter: '*' });

    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

});*/
$( document ).ready(function() {

			/* Basic Gallery */
			$( '.swipebox' ).swipebox();
			
			/* Video */
			$( '.swipebox-video' ).swipebox();

			/* Dynamic Gallery */
			$( '#gallery' ).click( function( e ) {
				e.preventDefault();
				$.swipebox( [
					{ href : 'http://swipebox.csag.co/mages/image-1.jpg', title : 'My Caption' },
					{ href : 'http://swipebox.csag.co/images/image-2.jpg', title : 'My Second Caption' }
				] );
			} );

      });