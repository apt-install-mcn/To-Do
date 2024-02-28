const gulp = require('gulp');
const minifyCSS = require('gulp-clean-css');

gulp.task('minify-css', function() {
  return gulp.src('src/**/*.css')
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist'));
});
