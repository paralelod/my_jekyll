
var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('webpack', function() {
  /*return gulp.src('./_dev/_assets/_scripts/_init/entry.js')
  .pipe(webpack( require('./../../../webpack.config.js') ))
  .pipe(gulp.dest('./../../../'));*/

  return gulp.src( './_dev/_assets/_build_main.js')
  .pipe(webpack( require('./../../../webpack.config.js') ))
  .pipe(gulp.dest('./_dev/lib/bundle/'));


});



