var gulp = require('gulp'),
    cssmin = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin');

gulp.task('cssmin', function () {
    return gulp.src('_site/css/style.css')
        .pipe(cssmin())
        .pipe(gulp.dest('_site/css/'));
});

gulp.task('jsmin', function () {
    return gulp.src('_site/js/KissyLearning.js')
        .pipe(uglify())
        .pipe(gulp.dest('_site/js/'));
});

gulp.task('htmlmin', function () {
    return gulp.src('_site/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('_site'));
});

gulp.task('default', ['cssmin', 'jsmin', 'htmlmin']);