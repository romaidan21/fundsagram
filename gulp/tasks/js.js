module.exports = function () {

  const compileJS = (mode, device) => {

    return $.gulp.src($.path.src[device].js)
      .pipe($.gp.plumber({ errorHandler: $.onError }))
      .pipe($.webpackStream({
        mode: mode,
        output: {
          filename: `${device}-scripts.js`,
        },
        devtool: 'source-map',
        externals: {
          jquery: 'jQuery'
        },
        module: {
          rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }]
        }
      }))
      .pipe($.gulp.dest($.path.build.js))
      .pipe($.gp.notify({ message: `${device} JS compiled! (${mode} mode)`, onLast: true }));
  };

    // Tasks
    $.gulp.task('js-desktop', () => {
      return compileJS('development', 'desktop');
  });

  $.gulp.task('js-desktop:prod', () => {
      return compileJS('production', 'desktop');
  });

  $.gulp.task('js-mobile', () => {
      return compileJS('development', 'mobile');
  });

  $.gulp.task('js-mobile:prod', () => {
      return compileJS('production', 'mobile');
  });
};