var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    karma = require('gulp-karma'),
    istanbul = require('istanbul'),
    ejs = require("gulp-ejs"),
    jf = require('jsonfile'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    webserver = require('gulp-webserver');

var paths = {
    src: 'src/',
    release: 'release/',
    public: 'release/public/'
};

gulp.task("default", function(){
    gulp.start([
        'copy-public',
        'gen-css-lib',
        'gen-css',
        'gen-js-lib',
        'gen-js',
        'gen-html'
    ]);
});

gulp.task("gen-css", function(){
    return gulp.src(['src/z-w.scss'])
        .pipe(sass({errLogToConsole: true}))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest(paths.public));
});

gulp.task("gen-css-lib", function(){
    return gulp.src([
        'src/bower-components/bootstrap/dist/css/bootstrap.min.css',
        'src/bower-components/reveal-js/css/theme/serif.css'
    ])
        .pipe(concat('lib.css'))
        .pipe(gulp.dest(paths.public));
});

gulp.task("gen-js", function(){
    return gulp.src(['src/z-w.js', 'src/components/**/*.js'])
        .pipe(concat('z-w.js'))
        .pipe(gulp.dest(paths.public));
});

gulp.task("gen-js-lib", function(){
    return gulp.src([
        'src/bower-components/jquery/dist/jquery.min.js',
        'src/bower-components/angular/angular.min.js',
        'src/bower-components/velocity/velocity.min.js',
        'src/bower-components/velocity/velocity.ui.min.js',
        'src/bower-components/underscore/underscore-min.js',
        'src/bower-components/bootstrap/dist/js/bootstrap.js',
        'src/bower-components/p5/p5.min.js'

    ])
        .pipe(concat('lib.js'))
        .pipe(gulp.dest(paths.public));
});

gulp.task("copy-public", function(){
    return gulp.src(['src/public/**/*.*'])
        .pipe(gulp.dest(paths.public));
});


gulp.task("gen-html", function(){
    var pages = {
        index: ['head', 'menu', 'header', 'hero', 'social-media', 'email', 'hero-recent', 'hero-recent-project', 'hero-recent-post', 'featured-in',  'code-banner','footer'],
        products: ['head-products', 'menu', 'header', 'project-post', 'hero-recent', 'hero-recent-post', 'email',  'code-banner', 'footer'],
        "products/common-pence": ['head-commonpence', 'menu', 'header', 'common-pence', 'hero-recent', 'hero-recent-post', 'email',  'code-banner', 'footer'],
        collaborate: ['head', 'menu', 'header', 'collaborate', 'hero-recent', 'hero-recent-project', 'hero-recent-post', 'email',  'code-banner','footer'],
        bio: ['head-life', 'menu', 'header','bio-hero','bio', 'bio-fill' , 'bio-ed', 'bio-fill-two', 'bio-skill', 'bio-fill-three', 'bio-work', 'hero-recent', 'hero-recent-project', 'hero-recent-post', 'email', 'code-banner', 'footer'],
        press: ['head-press', 'menu', 'header', 'press-hero', 'press', 'hero-recent', 'hero-recent-project', 'hero-recent-post', 'email', 'code-banner', 'footer'],
        podcast: ['head-podcast', 'menu', 'header', 'podcast-hero', 'email-podcast', 'podcast-content', 'hero-recent-project', 'hero-recent-post', 'code-banner',  'footer'],
        advertise: ['head-ad', 'menu', 'header', 'advertise','email-ad', 'hero-recent', 'hero-recent-project', 'hero-recent-post',  'code-banner','footer'],
        lifestyle: ['head-lifestyle', 'menu', 'header', 'lifestyle-hero', 'lifestyle-blog', 'email-health', 'hero-recent', 'hero-recent-project', 'code-banner', 'footer'],
        "podcast/nathan": ['head-podcast-nathan', 'menu', 'header', 'podcast-page-nathan', 'hero-recent', 'hero-recent-post','email-podcast', 'code-banner', 'footer'],
        "podcast/adam": ['head-podcast-adam', 'menu', 'header', 'podcast-page-adam', 'hero-recent', 'hero-recent-post','email-podcast', 'code-banner', 'footer'],
        "podcast/amelia": ['head-podcast-amelia', 'menu', 'header', 'podcast-page-amelia', 'hero-recent', 'hero-recent-post','email-podcast', 'code-banner', 'footer'],
        "podcast/startups-startlines": ['head-podcast-001', 'menu', 'header', 'podcast-page-zander-01', 'hero-recent', 'hero-recent-post','email-podcast', 'code-banner', 'footer'],
        blog: ['head-blog', 'menu', 'header', 'blog-hero', 'blog-post', 'hero-recent', 'hero-recent-project', 'hero-recent-post', 'email',  'code-banner','footer'],
        "blog/why-i-turned-down-a-job-at-google": ['head-blog-001', 'menu', 'header', 'blog-post-001', 'hero-recent', 'hero-recent-project', 'hero-recent-post', 'email',  'code-banner','footer'],
        "blog/hit-crowdfunding-goal": ['head-blog-002', 'menu', 'header', 'blog-post-002', 'hero-recent', 'hero-recent-project', 'hero-recent-post', 'email',  'code-banner','footer'],
        "blog/crash-film-premiere": ['head-blog-003', 'menu', 'header', 'blog-post-003', 'hero-recent', 'hero-recent-project', 'hero-recent-post', 'email',  'code-banner','footer'],
        "blog/flat-icon": ['head-blog-004', 'menu', 'header', 'blog-post-004', 'hero-recent', 'hero-recent-project', 'hero-recent-post', 'email',  'code-banner','footer'],
        "blog/develop-and-monetize-your-digital-presence": ['head-blog-004', 'menu', 'header', 'blog-post-005', 'hero-recent', 'hero-recent-project', 'hero-recent-post', 'email',  'code-banner','footer']

    };


    for (var i in pages){
        var sources = []
        for (var j in pages [i]){
            var ejs = pages[i][j];
            sources.push("src/components/*/" + ejs + "/" + ejs + ".ejs");
        }
        gulp.src(sources)
            .pipe(concat(i + ".html"))
            .pipe(gulp.dest (paths.release));
    }
});

//gulp.task('default', function () {
//    gulp.src('index.md')
//        .pipe(markdown())
//        .pipe(reveal())
//        .pipe(gulp.dest('.'));
//});

gulp.task('watch', ['webserver', 'default'], function () {
    gulp.watch([
        'src/components/*/**/*',
        'src/public/**/*',
        'src/z-w/js',
        'src/z-w/scss'
    ], ['default']);
});

gulp.task('webserver', function() {
    gulp.src('release')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});
