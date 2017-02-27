
  var FOOTER_APPEARS = 400;
  var TRIGGER = 80; // size of the footer

  var lastScrollTop = 0;

  var footer = document.getElementById('footer-sticky');




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

