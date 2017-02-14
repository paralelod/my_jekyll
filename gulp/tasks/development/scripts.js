var gulp 	= require('gulp');
var concat = require('gulp-concat');
var clean   = require('gulp-clean');
var runSequence = require('run-sequence');
var config = require('../../config').script;


gulp.task('scripts', function() {
  runSequence(
              'scripts-clean',
              
              'scripts-head',

              'scripts-vendor',
              'scripts-custom',
              'scripts-init',

              'scripts-main',
              'scripts-isotope',
              'scripts-copy-vendors',
              'scripts-copy-init',
              'scripts-copy-custom'
    );
});

// ######### SCRIPTS CLEAN ###############

gulp.task('scripts-clean', function () {
  return gulp.src(config.scriptClean, {read: true})
    .pipe(clean());
});

// ######### SCRIPTS HEAD ###############

gulp.task('scripts-head', function() {
    return gulp.src(config.headSrc)
    .pipe(concat(config.scriptHeadDist))
    .pipe(gulp.dest(config.pathDist));

});


// ######### SCRIPTS FOOTER (multi files) ###############
 
//concat main.js

gulp.task('scripts-main', function() {
    return gulp.src(config.mainSrc)
    .pipe(concat(config.mainDist))
    .pipe(gulp.dest(config.pathDist));

});


//concat isotope.js

gulp.task('scripts-isotope', function() {
    return gulp.src(config.isotopeSrc)
    .pipe(concat(config.isotopeDist))
    .pipe(gulp.dest(config.pathDist));

});

// copy vendors 

gulp.task('scripts-copy-vendors', function() {
    return gulp.src(config.vendorSrc)
    .pipe(gulp.dest(config.pathVendorsDist));

});

//copy init

gulp.task('scripts-copy-init', function() {
    return gulp.src(config.initSrc)
    .pipe(gulp.dest(config.pathInitDist));

});



//copy my script

gulp.task('scripts-copy-custom', function() {
    return gulp.src(config.myscriptSrc)
    .pipe(gulp.dest(config.pathCustomDist));

});


// ######### SCRIPTS FOOTER (single files) ###############

// 2 files

gulp.task('scripts-vendor', function() {
    return gulp.src(config.mainSrc,config.isotopeSrc,config.vendorSrc)
    .pipe(concat(config.scriptVendorDist))
    .pipe(gulp.dest(config.pathDist));

});


gulp.task('scripts-custom', function() {
    return gulp.src(config.myscriptSrc)
    .pipe(concat(config.myscriptDist))
    .pipe(gulp.dest(config.pathDist));

});

gulp.task('scripts-init', function() {
    return gulp.src(config.initSrc)
    .pipe(concat(config.initDist))
    .pipe(gulp.dest(config.pathDist));

});




