// Run watch as default task
$.gulp.task('default', $.gulp.series('watch'));

// CSS & JS build task
$.gulp.task('build', $.gulp.series($.gulp.parallel('scss-desktop:prod', 'js-desktop:prod')));

// Fonts convert
$.gulp.task('ttf2woff', $.gulp.series($.gulp.parallel('to-woff', 'to-woff2')));

