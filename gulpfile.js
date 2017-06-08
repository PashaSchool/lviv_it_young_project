const gulp = require('gulp');
const del = require('del');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemap = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
/***********************************************
        postcss plugins
***********************************************/
const postcss = require('gulp-postcss');
const rucksack = require('rucksack-css');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
/***********************************************
        browser-sync
***********************************************/
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;


gulp.task('server',['css'], function() {
    browserSync.init({
        server: './app'
    });

    gulp.watch('./app/pug/**/*.pug', ['html']);
    gulp.watch('./app/sass/*.sass', ['css']);
    gulp.watch('./app/*.html').on('change', reload);
});

gulp.task('html', function() {
    return gulp.src('./app/pug/pages/*.pug')
        .pipe(pug({pretty: true}))
        .on('error', function(err) {
            notify().write(err);
            this.emit('end');
        })
        .pipe(gulp.dest('./app'))
        .pipe(browserSync.stream())
});

gulp.task('css', function() {

    var propc = [rucksack, autoprefixer({browsers: ['last 10 versions']}), cssnano];

    return gulp.src('./app/sass/index.sass')
        .pipe(sourcemap.init())
        .pipe(sass())
        .on('error', function(err) {
            notify().write(err);
            this.emit('end');
        })
        .pipe(postcss(propc))
        .pipe(rename({suffix : ".min"}))
        .pipe(gulp.dest('./app/assets/css'))
        .pipe(sourcemap.write())
        .pipe(browserSync.stream())
});

gulp.task('js', function() {
    return gulp.src('./app/**/**.js')
        .on('error', function(err) {
            notify().write(err);
            this.emit('end')
        })
        .pipe(sourcemap.init())
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./app/assets/js'))
        .pipe(sourcemap.write())
        .pipe(browserSync.stream())
});


/***********************************************
        for vendor libs
***********************************************/

gulp.task('cssVendor', function(){
    var poc = [cssnano];
    return gulp.src(['./app/vendor/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(concat('vendor.min.css'))
    .pipe(postcss(cssnano))
    .pipe(gulp.dest('./app/assets/css'))
});


gulp.task('jsVendor', function(){
    return gulp.src(['./app/vendor/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./app/assets/js'))
});


/***********************************************
        publick
***********************************************/

gulp.task('clean', function(){
    return del('./dist')
});

gulp.task('dist', function(){
    var htmlDist = gulp.src('./app/*.html').pipe(gulp.dest('./dist'));
    var cssDist = gulp.src('./app/assets/css/*.css').pipe(gulp.dest('./dist'));
    // var htmlDist = gulp.src('./app/assets/js').pipe(gulp.dest('./dist'));

    return htmlDist, cssDist
});

/***********************************************
        run browser and watch html/css/ !js
***********************************************/

gulp.task('default', ['server'])
