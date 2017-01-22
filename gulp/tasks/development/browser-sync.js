var gulp        = require('gulp');
var browserSync = require('browser-sync');
var config = require('../../config').browsersync;


gulp.task('browsersync', function () {
    browserSync(
        { server: {
             baseDir: config.baseDir,
            },
            port: 1818,
        }
    );


    // Reloads page when some of the already built files changed:
    gulp.watch(config.watchPath).on('change', browserSync.reload);
    
});