var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('deploy', function() {
  runSequence(
              'dist-jekyll-clean',
              //gh pages
              'yamlDistGhPages',
              'dist-sass-clean',
              'dist-sass-icon',
              'dist-sass-theme',
              'dist-sass-vendor',
              'dist-scripts-clean',
              'dist-scripts-head',
              'dist-scripts-vendor',
              'dist-scripts-custom',
              'dist-scripts-init',
              'dist-scripts-main',
              'dist-scripts-isotope',
              'dist-scripts-copy-vendors',
              'dist-scripts-copy-init',
              'dist-scripts-copy-custom',
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



