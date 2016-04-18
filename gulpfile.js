
'use strict';

var gulp = require('gulp');

gulp.paths = {
  tssrc: [
    '**/*.ts',
    '!node_modules/**/*',
    '!dist/**/*',
    '!typings/**/*',
    '!typings-persist/**/*',
    '!**/*.{ts,coffee}.js'],
  jssrc: [
    '*.js',
    '!angular2-handsontable.js',
    'gulp-tasks/*.js',
    '!node_modules',
    '!**/*.{ts,coffee}.js']
};

require('require-dir')('./gulp-tasks');

var clean = require('gulp-clean');
gulp.task('clean', function() {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});

gulp.task('default', function() {
  gulp.start('lint');
});
