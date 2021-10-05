module.exports = () => {
    $.gulp.task('watch', () => {

        // Desktop
        $.gulp.watch($.path.watch.desktop.scss, $.gulp.series('scss-desktop'));
        $.gulp.watch($.path.watch.desktop.js, $.gulp.series('js-desktop'));

    });
}