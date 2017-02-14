
module.exports = {

  //--------- deploy ----------//

  deploy: {
     ghPages: {
       branch:'gh-pages',
       src: './_dist/jekyll_dist/**/*',
     },
    html: {
       branch:'html',
       src: './_dist/jekyll_dist/_site/**/*',
     }
  },

  //--------- sketch app ----------//

  sketch: {
    sketchSrc: ['./_design/Layout_Foundation_5.sketch'],
    sketchImgDest:'./_dev/_assets/_img/',
  },
  
  //--------- images ----------//
  
   images: {
    // responsive resize

    imgSrc: './_dev/_assets/_img/',
    imgSrcResp:  [
      './_dev/_assets/_img/responsive/'
    ],
    imgDest:'./_dev/lib/img/',

    imgBreakpoints: {
      sizes: [480,791,1042,1482,1920],
    },
    
    //dist
    
    imgDistSrc:[
  		'./_dev/lib/imgs/**/*.*',
  		'./_dev/lib/fonts/**/*.*'
  	],
    imgDistDest: './_dist/jekyll_dist/lib/imgs',
    fontsDistDest: './_dist/jekyll_dist/lib/fonts'
  },

  //--------- yaml ----------//

  yaml: {
    yamlDevSrc:  [
      './_config/_dev.yml',
      './_config/build/*.yml'
    ],
    yamlDistGhPagesSrc:  [
      './_config/_dist-gh-pages.yml',
      './_config/build/*.yml'
    ],
    yamlDistHtmlSrc:  [
      './_config/_dist-html.yml',
      './_config/build/*.yml'
    ],

    pathBuild:'./_dev/',

    yamlBuild:'_config.yml',

    yamlClean: ['./_dev/_config.yml']
  },
  
  //--------- sass ----------//

  sass: {
    sassSrc:  ['./_dev/_assets/_sass/_theme/jellyfish-theme.scss'],
    cssClean: ['./_dev/lib/css/main.css'],
    pathDist: './_dev/lib/css/',
    cssDist: 'main.css'
  },

  //--------- scripts ----------//

  /*
    1 - head
    2 - vendor single file
    3 - vendor multi files
    4 - my custom scripts
    5 - dist
    6 - scripts clean

  */
  
  script: {

    //js head 

     headSrc: [
       './_dev/_assets/vendors/picturefill-master/dist/picturefill.js'
    ],

    //js vendor

    vendorSrc: [

      //bower components
      //base main.js
      './_dev/_assets/bower_components/foundation/js/vendor/jquery.js' ,
        './_dev/_assets/bower_components/foundation/js/vendor/modernizr.js' ,
  		'./_dev/_assets/bower_components/foundation/js/vendor/fastclick.min.js' ,
  		'./_dev/_assets/bower_components/foundation/js/foundation.min.js' ,
      //content cont.js
      './_dev/_assets/bower_components/fullpage.js/dist/jquery.fullpage.min.js' ,
      //media media.js
      './_dev/_assets/vendors/FitVids.js-master/jquery.fitvids.js',
      './_dev/_assets/vendors/swipebox-master/src/js/jquery.swipebox.min.js',
      //grid grid.js
      './_dev/_assets/bower_components/imagesloaded/imagesloaded.pkgd.min.js',
      './_dev/_assets/bower_components/isotope/dist/isotope.pkgd.min.js',
      //scroll scroll.js
  		'./_dev/_assets/bower_components/jquery.easing/js/jquery.easing.min.js' ,
      './_dev/_assets/bower_components/fullpage.js/vendors/jquery.slimscroll.min.js' ,
      //animation anim.js
      './_dev/_assets/bower_components/aos/dist/aos.js',
      './_dev/_assets/vendors/animsition-master/animsition.min.js'
        
    ],

    //

    mainSrc: [

      //bower components
      //base main.js
      './_dev/_assets/bower_components/foundation/js/vendor/jquery.js' ,
      './_dev/_assets/bower_components/foundation/js/vendor/modernizr.js' ,
      './_dev/_assets/bower_components/foundation/js/vendor/fastclick.min.js' ,
      './_dev/_assets/bower_components/foundation/js/foundation.min.js' 
    ],

    contentSrc: [
      //content cont.js
      './_dev/_assets/bower_components/fullpage.js/dist/jquery.fullpage.min.js'
    ],

    mediaSrc: [
      //media media.js
      './_dev/_assets/vendors/FitVids.js-master/jquery.fitvids.js',
      './_dev/_assets/vendors/swipebox-master/src/js/jquery.swipebox.min.js'
    ],

    gridSrc: [

      //grid grid.js
      './_dev/_assets/bower_components/imagesloaded/imagesloaded.pkgd.min.js',
      './_dev/_assets/bower_components/isotope/dist/isotope.pkgd.min.js'
    ],

    scrollSrc: [

      //scroll scroll.js
  		'./_dev/_assets/bower_components/jquery.easing/js/jquery.easing.min.js' ,
      './_dev/_assets/bower_components/fullpage.js/vendors/jquery.slimscroll.min.js' 
    ],

    animSrc: [

      //animation anim.js
      './_dev/_assets/bower_components/aos/dist/aos.js',
      './_dev/_assets/vendors/animsition-master/animsition.min.js'
        
    ],


    // my js script

    myscriptSrc: [
       './_dev/_assets/_scripts/_init/**/*.js',
       './_dev/_assets/_scripts/my_scripts/**/*.js'
    ],


    // dist src
    pathDist: './_dev/lib/js/build',
    scriptHeadDist:'head.js',
    
    //vendor
    scriptVendorDist:'vendor.js',

    //multi
    mainDist: 'main.js',
    contentDist: 'cont.js',
    mediaDist: 'media.js',
    gridDist: 'grid.js',
    scrollDist: 'scroll.js',
    animDist: 'anim.js',


    //my script
    myscriptDist: 'script.js',

    // clean

    scriptClean: [
      './_dev/lib/js/build/**/*.*',
      './_dev/lib/js/script.js'
    ]
  },

  //--------- jekyll ----------//

  jekyll: {
    build: [
       'jekyll build --source ./_dev --destination ./_dev/_site'
    ],

    buildWatch: [
       'jekyll build --watch --config _config.yml,_config_dev.yml'
    ],

    jekyllSrcDist: [
  		'!./_dev/_config_dev.yml',
  		'!./_dev/_assets/**/*.*',
  		'!./_dev/_site/**/*.*',
      '!./_dev/_lib/**/*.*',
  		'./_dev/**/*.*'
  	],
    
    jekyllPathDist:'./_dist/jekyll_dist/',

    jekyllBuildDist: [
    'jekyll build --config _dist/jekyll_dist/_config.yml --source ./_dist/jekyll_dist/ --destination ./_dist/jekyll_dist/_site'
    ]

  },

  //--------- browser sync ----------//

  browsersync: {
     baseDir: './_dev/_site/',
     watchPath: './_dev/_site/**/*.*',
     port: 1818
  },

  //--------- watch ----------//
  
  watch: {
    
    jekyll: [
      '_dev/_config.yml',
      '_dev/_data/**/*.*',
      '_dev/_docs/**/*.*',
      '_dev/_includes/**/*.*',
      '_dev/_layouts/**/*.*',
      '_dev/_posts/**/*.*',
      '_dev/lib/**/*.*',
      '_dev/work/**/*.*',
      '_dev/**/**/*.html',
      '_dev/*.md',
    ],
    yml: [
      '_config/**/*.*',
    ],
    imgs: [
      '_dev/_assets/_imgs/**/*.*'
    ],
    scripts: [
      '_dev/_assets/_scripts/**/*.*'
    ],

    sass: [
      '_dev/_assets/_sass/**/**/*.scss'
    ]
  }
};
