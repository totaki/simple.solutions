'use strict'

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

var config = {
    server: {
        baseDir: '.'
    },
    host: 'localhost',
    port: 9000,
    logPrefix: 'left-side-menu'
};

var path = {
    build: {
        css: '.',
    },
    src: {
        style: './index.scss',
    },
    watch: {
        html: './*.html',
        style: './*.scss',
    },
    clean: '.'
};

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('sass:compile', function() {
    return gulp.src(path.src.style)
        .pipe(sass())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('watch', function(){
    gulp.watch(path.watch.html).on('change', reload);
    gulp.watch(path.watch.style, ['sass:compile']);
})

gulp.task('default', ['webserver', 'watch']);