var gulp = require('gulp');
var ghPages= require("gulp-gh-pages");
var config = require('../../config').jekyll;

gulp.task("gh-pages", function () {
    return gulp.src("./_dist/jekyll_dist/**/*")
        .pipe(ghPages({branch: 'gh-pages'}));
});


gulp.task("html-deploy", function () {
    return gulp.src("./_dist/jekyll_dist/_site/**/*")
        .pipe(ghPages({branch: 'html'}));
});