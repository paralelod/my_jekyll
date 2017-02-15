var gulp = require('gulp');
var concat = require('gulp-concat');
var clean   = require('gulp-clean');
var uglify = require('gulp-uglify');
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

gulp.task('dist-scripts-clean', function () {
  return gulp.src(config.scriptClean, {read: true})
    .pipe(clean());
});

// ######### SCRIPTS HEAD ###############

gulp.task('dist-scripts-head', function() {
    return gulp.src(config.headSrc)
    .pipe(concat(config.scriptHeadDist))
    .pipe(uglify())
    .pipe(gulp.dest(config.pathDist));

});


// ######### SCRIPTS FOOTER (multi files) ###############
 
//concat main.js

gulp.task('dist-scripts-main', function() {
    return gulp.src(config.mainSrc)
    .pipe(concat(config.mainDist))
    .pipe(uglify())
    .pipe(gulp.dest(config.pathDist));

});


//concat isotope.js

gulp.task('dist-scripts-isotope', function() {
    return gulp.src(config.isotopeSrc)
    .pipe(concat(config.isotopeDist))
    .pipe(uglify())
    .pipe(gulp.dest(config.pathDist));

});

// copy vendors 

gulp.task('dist-scripts-copy-vendors', function() {
    return gulp.src(config.vendorSrc)
    .pipe(uglify())
    .pipe(gulp.dest(config.pathVendorsDist));

});

//copy init

gulp.task('dist-scripts-copy-init', function() {
    return gulp.src(config.initSrc)
    .pipe(uglify())
    .pipe(gulp.dest(config.pathInitDist));

});



//copy my script

gulp.task('dist-scripts-copy-custom', function() {
    return gulp.src(config.myscriptSrc)
    .pipe(uglify())
    .pipe(gulp.dest(config.pathCustomDist));

});


// ######### SCRIPTS FOOTER (single files) ###############

// 2 files

gulp.task('dist-scripts-vendor', function() {
    return gulp.src(config.mainSrc,config.isotopeSrc,config.vendorSrc)
    .pipe(concat(config.scriptVendorDist))
    .pipe(uglify())
    .pipe(gulp.dest(config.pathDist));

});


gulp.task('dist-scripts-custom', function() {
    return gulp.src(config.myscriptSrc)
    .pipe(concat(config.myscriptDist))
    .pipe(uglify())
    .pipe(gulp.dest(config.pathDist));

});

gulp.task('dist-scripts-init', function() {
    return gulp.src(config.initSrc)
    .pipe(concat(config.initDist))
    .pipe(uglify())
    .pipe(gulp.dest(config.pathDist));

});




