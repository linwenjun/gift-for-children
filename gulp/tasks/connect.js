var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('refresh-html', function () {
  gulp.src('./index.html')
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});
