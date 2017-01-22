var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('deploy', function() {
  runSequence(
              'dist-jekyll-clean',
              //gh pages
              'yamlDistGhPages',
              'dist-sass',
              'dist-scripts',
              'dist-images-copy',
              'dist-fonts-copy',
              'dist-jekyll-copy',
              'dist-jekyll-build',
              'gh-pages',
              //html
              'yamlDistHtml',
              'dist-scripts',
              'dist-images-copy',
              'dist-sass',
              'dist-fonts-copy',
              'dist-jekyll-copy',
              'dist-jekyll-build',
              'html-deploy',
              //back to DEV yml
              'yamlDev'
    );
});



