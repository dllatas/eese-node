var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');
var babel = require('gulp-babel');



gulp.task('default', ['browser-sync'], function () {
    gulp.watch(['public/*.html'], reload);
});

gulp.task('browser-sync', ['nodemon'], function() {
  browserSync({
    proxy: "localhost:3000",  // local node app address
    port: 5000,  // use *different* port than above
    notify: true
  });
});

gulp.task('nodemon', ['babel-react'], function(cb) {
    var called = false;
    return nodemon({
        script: 'bin/www'
        , ignore: [
            'gulpfile.js',
            'node_modules/'
        ]
        //, tasks: ['default']
    }).on('start', function () {
        if (!called) {
            called = true;
            cb();
        }
    }).on('restart', function() {
        setTimeout(function () {
            reload({ stream:false });
        }, 1000);
    });
});

gulp.task('babel-react', function() {
    return gulp.src('views/components/*.jsx')
        .pipe(babel({
            presets: ['react']
        }))
        .pipe(gulp.dest('views'));
});
