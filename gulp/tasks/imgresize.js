// Minify and resize all images
module.exports = function() {
    $.gulp.task('imgresize', function() {
        return $.gulp.src($.path.src.img + '**/*.{png,gif,jpg,jpeg,webp}')
            .pipe($.gp.plumber({ errorHandler: $.onError }))
            .pipe($.gp.responsive({
                '**/*': [{
                        width: 320,
                        rename: { suffix: '-320' }
                    },
                    {
                        width: 640,
                        rename: { suffix: '-640' }
                    },
                    {
                        width: 960,
                        rename: { suffix: '-960' }
                    },
                    {
                        width: 1400,
                        rename: { suffix: '-1400' }
                    }
                ]
            }, {
                // The output quality for JPEG, WebP and TIFF output formats
                quality: 100,
                // Use progressive (interlace) scan for JPEG and PNG output
                // progressive: true,
                // Zlib compression level of PNG output format
                compressionLevel: 7,
                // Strip all metadata
                withMetadata: false,
                // Merge alpha transparency channel, if any, with background
                withoutEnlargement: false,
                errorOnEnlargement: false
            }))
            .pipe($.gulp.dest($.path.build.img  + '/resized/'))
            .pipe($.gp.notify({ message: 'Images compressed & resized!', onLast: true }));
    });
};