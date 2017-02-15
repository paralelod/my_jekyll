var gulp = require('gulp');
var sass = require('gulp-sass');
var clean   = require('gulp-clean');
var rename = require("gulp-rename");
var runSequence = require('run-sequence');
var config = require('../../config').sass;

gulp.task('dist-sass', function() {
  runSequence('dist-sass-clean',
              'dist-sass-icon',
              'dist-sass-theme',
              'dist-sass-vendor' 
    );
});

var compression = 'compressed';


gulp.task('dist-sass-clean', function () {
  return gulp.src(config.cssClean, {read: true})
    .pipe(clean());
});


gulp.task('dist-sass-theme', function() {
    gulp.src(config.sassThemeSrc)
        .pipe(sass({outputStyle: compression}).on('error', sass.logError))
        .pipe(rename(config.cssThemeDist))
        .pipe(gulp.dest(config.pathDist));
});

gulp.task('dist-sass-vendor', function() {
    gulp.src(config.sassVendorSrc)
        .pipe(sass({outputStyle: compression}).on('error', sass.logError))
        .pipe(rename(config.cssVendorDist))
        .pipe(gulp.dest(config.pathDist));
});

gulp.task('dist-sass-icon', function() {
    gulp.src(config.sassIconFontSrc)
        .pipe(sass({outputStyle: compression}).on('error', sass.logError))
        .pipe(rename(config.cssIconFontDist))
        .pipe(gulp.dest(config.pathDist));
});

