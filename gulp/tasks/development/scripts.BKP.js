var gulp 	= require('gulp');
var concat = require('gulp-concat');
var clean   = require('gulp-clean');
var runSequence = require('run-sequence');
var config = require('../../config').script;

gulp.task('scripts', function() {
  runSequence('scripts-clean',
              'scripts-head',
              'scripts-vendor',
              'scripts-main',
              'scripts-cont',
              'scripts-media',
              'scripts-grid',
              'scripts-scroll',
              'scripts-anim',
              'scripts-custom' 
    );
});

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


// ######### SCRIPTS FOOTER ###############
 
// copy vendorSrc to pathDist

// 2 files

gulp.task('scripts-vendor', function() {
  	return gulp.src(config.vendorSrc)
    .pipe(concat(config.scriptVendorDist))
    .pipe(gulp.dest(config.pathDist));

});


gulp.task('scripts-custom', function() {
  	return gulp.src(config.myscriptSrc)
    .pipe(concat(config.myscriptDist))
    .pipe(gulp.dest(config.pathDist));

});


// multi files



//main.js

gulp.task('scripts-main', function() {
    return gulp.src(config.mainSrc)
    .pipe(concat(config.mainDist))
    .pipe(gulp.dest(config.pathDist));

});


//cont.js

gulp.task('scripts-cont', function() {
    return gulp.src(config.contentSrc)
    .pipe(concat(config.contentDist))
    .pipe(gulp.dest(config.pathDist));

});

//media.js

gulp.task('scripts-media', function() {
    return gulp.src(config.mediaSrc)
    .pipe(concat(config.mediaDist))
    .pipe(gulp.dest(config.pathDist));

});

//grid.js

gulp.task('scripts-grid', function() {
    return gulp.src(config.gridSrc)
    .pipe(concat(config.gridDist))
    .pipe(gulp.dest(config.pathDist));

});

//scroll.js

gulp.task('scripts-scroll', function() {
    return gulp.src(config.scrollSrc)
    .pipe(concat(config.scrollDist))
    .pipe(gulp.dest(config.pathDist));

});

//anim.js


gulp.task('scripts-anim', function() {
    return gulp.src(config.animSrc)
    .pipe(concat(config.animDist))
    .pipe(gulp.dest(config.pathDist));

});


