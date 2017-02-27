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

    console.log('INIT - fullpage auto-scroll');