var gulp = require('./gulp')([
  'browserify',
  'connect',
  'sass',
  'watch'
]);

gulp.task('default', ['watch', 'connect']);
