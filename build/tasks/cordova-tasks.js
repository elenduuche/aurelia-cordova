var gulp = require('gulp');
var runSequence = require('run-sequence');
var shell = require('gulp-shell');
var paths = require('../paths');
var cordovaPaths = require('../cordova-paths');

// copy index.html to www
gulp.task('copy-index', shell.task([
  'cp index.html www/index.html'
]))

// copy jspm_packages to www
gulp.task('copy-jspm', shell.task([
  'cp -R jspm_packages www'
]))

// copy jspm_packages to www
gulp.task('copy-package-json', shell.task([
  'cp package.json www'
]))

// copy jspm_packages to www
gulp.task('copy-config-js', shell.task([
  'cp config.js www'
]))

// copy jspm_packages to www
gulp.task('copy-favicon', shell.task([
  'cp favicon.ico www'
]))

// copy jspm_packages to www
gulp.task('copy-protractor', shell.task([
  'cp aurelia.protractor.js www',
  'cp protractor.conf.js www',
  'cp karma.conf.js www'
]))

// copy jspm_packages to www
gulp.task('copy-styles', shell.task([
  'cp -R styles www'
]))


gulp.task('build-cordova', function() {
  return runSequence(
    ['copy-index', 'copy-jspm', 'copy-package-json', 'copy-config-js', 'copy-favicon', 'copy-protractor', 'copy-styles']
  );
});