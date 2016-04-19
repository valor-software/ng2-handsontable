'use strict';
/* eslint-disable */
var gulp = require('gulp');
/* eslint-enable */

gulp.paths = {
  tssrc: [
    '**/*.ts',
    '!node_modules/**/*',
    '!bundles/**/*',
    '!dist/**/*',
    '!typings/**/*',
    '!typings-persist/**/*',
    '!**/*.{ts,coffee}.js'],
  jssrc: [
    '*.js',
    '!angular2-handsontable.js',
    'gulp-tasks/*.js',
    '!bundles/*.js',
    '!node_modules',
    '!**/*.{ts,coffee}.js']
};

require('require-dir')('./gulp-tasks');

/* eslint-disable */
var clean = require('gulp-clean');
/* eslint-enable */

gulp.task('clean', cleanDist);

gulp.task('default', defaultTask);

function cleanDist() {
  return gulp.src('dist', {read: false})
    .pipe(clean());
}

function defaultTask() {
  gulp.start('lint');
}
