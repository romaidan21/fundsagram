module.exports = function () {

    const postcssPlugins = {
        development: [$.postcssImport, $.autoPrefixer],
        production: [$.postcssImport, $.autoPrefixer, $.webpInCss, $.cssnano({ preset: 'advanced' })]
    };

    const compileScss = (mode, device) => {

        return $.gulp.src($.path.src[device].scss)
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .pipe($.gp.plumber({ errorHandler: $.onError }))
            .pipe($.gp.postcss(postcssPlugins[mode]))
            .pipe($.gp.rename(`${device}-styles.css`))
            .pipe($.gp.sourcemaps.write('./'))
            .pipe($.gulp.dest($.path.build.css))
            .pipe($.gp.notify({ message: `${device} SCSS compiled (${mode})!`, onLast: true }));
    };

    // Tasks
    $.gulp.task('scss-desktop', () => {
        return compileScss('development', 'desktop');
    });

    $.gulp.task('scss-desktop:prod', () => {
        return compileScss('production', 'desktop');
    });
}
