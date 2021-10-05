// Site name
const siteName = 'freelance';

// Theme name
const themeName = 'bamboo';

// Theme path
const theme = `${themeName}`;

// Path to assets
const assets = `app/${theme}/assets/`;

// Export config
module.exports = {

    // Pathes
    path: {
        siteName: siteName,
        realPath: process.env.INIT_CWD,
        theme: theme,
        sftp: {
            test: `/home/bambuky/bambus.com.ua/tests/${siteName}`,
            prod: ''
        },
        src: {
            desktop: {
                scss: 'src/desktop/scss/**/*.scss',
                js: 'src/desktop/js/*.js'
            },
            // mobile: {
            //     scss: 'src/mobile/scss/**/*.scss',
            //     js: 'src/mobile/js/*.js'
            // },
            img: 'src/img/',
            fonts: 'src/fonts/',
        },
        watch: {
            desktop: {
                scss: 'src/desktop/**/*.+(css|scss)',
                js: 'src/desktop/**/*.js'
            },
        },
        build: {
            css: `${assets}/css/`,
            js: `${assets}/js/`,
            img: 'src/img/',
            fonts: 'src/fonts/'
        }
    },

    // Tasks pathes
    tasks: [
        './gulp/tasks/scss',
        './gulp/tasks/js',
        './gulp/tasks/imgmin',
        './gulp/tasks/imgresize',
        './gulp/tasks/webp',
        './gulp/tasks/ttf2woff',
        './gulp/tasks/watch'
    ]
}