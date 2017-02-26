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