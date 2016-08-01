var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync').create();


gulp.task('default', ['browser-sync'], function () {
    gulp.watch('./', browserSync.reload());
});

gulp.task('browser-sync', ['nodemon'], function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('nodemon', function(cb) {
    var started = false;
    return nodemon({
        script: 'app.js', // ./bin/www
        ext: 'js'
    }).on('start', function() {
        if(!started) {
            cb();
            started = true;
        }
    }).on('crash', function() {
        console.log("crash");
    }).on('restart', function() {
        console.log("restart");
    }).once('quit', function() {
        process.exit;
    });
});