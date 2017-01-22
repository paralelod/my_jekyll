var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('deploy', function() {
  runSequence(
              'dist-jekyll-clean',
              //gh pages
              'yamlDistGhPages',
              'dist-scripts',
              'dist-images-copy',
              'dist-sass',
              'dist-fonts-copy',
              'dist-jekyll-copy',
              'dist-jekyll-build',
              'gh-pages',
              //html
              'dist-jekyll-clean',
              'yamlDistHtml',
              'dist-scripts',
              'dist-images-copy',
              'dist-sass',
              'dist-fonts-copy',
              'dist-jekyll-copy',
              'dist-jekyll-build',
              'html-deploy'
    );
});



