var gulp = require('gulp');

gulp.task('watch-less', function() {
  gulp.watch(['./src/sass/*.sass'], ['sass'])
})

gulp.task('watch-scripts', function() {
  gulp.watch(['./src/script/*.js'], ['browserify'])
})

gulp.task('listen', function() {
  gulp.watch([
    'dist/css/main.css',
    'dist/main.js',
    'index.html'
  ], ['refresh-html']);
});


gulp.task('watch', ['watch-less', 'watch-scripts', 'listen']);
