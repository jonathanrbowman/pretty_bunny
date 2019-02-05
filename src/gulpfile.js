var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

gulp.task('stylesheets', function() {
  gulp.src('./stylesheets/scss/pretty_bunny_styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../vendor/assets/stylesheets/'));
});

gulp.task('scripts', function() {
  gulp.src('./javascripts/pretty_bunny_scripts.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('../vendor/assets/javascripts/'))
});

gulp.task('default',function() {
  gulp.watch('./stylesheets/scss/**/*.scss',['stylesheets']);
  gulp.watch('./javascripts/**/*.js',['scripts']);
});