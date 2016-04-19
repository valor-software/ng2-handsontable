'use strict';
/* eslint-disable */
var gulp = require('gulp');
var esLint = require('gulp-eslint');
var tsLint = require('gulp-tslint');

var paths = gulp.paths;
/* eslint-enable */

gulp.task('eslint', eslint);

gulp.task('tslint', tslint);

gulp.task('lint', ['tslint', 'eslint']);

function eslint() {
  return gulp.src(paths.jssrc)
    .pipe(esLint({useEslintrc: true}))
    .pipe(esLint.format())
    .pipe(esLint.failOnError());
}

function tslint() {
  return gulp.src(paths.tssrc)
    .pipe(tsLint())
    .pipe(tsLint.report('verbose', {
      emitError: true,
      reportLimit: 0
    }));
}
