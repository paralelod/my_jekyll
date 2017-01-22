var gulp = require('gulp');
var ghPages= require("gulp-gh-pages");
var config = require('../../config').deploy;

gulp.task("gh-pages", function () {
    return gulp.src(config.ghPages.src)
        .pipe(ghPages({branch: config.ghPages.branch}));
});


gulp.task("html-deploy", function () {
    return gulp.src(config.html.src)
        .pipe(ghPages({branch: config.ghPages.branch}));
});