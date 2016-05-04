'use strict';

var gulp = require('gulp');

var sharedPrefix       = 'sh-';
var thefatfingerBackoffice = 'ff-';
var contactNetConfig   = 'cc-';

require('./src/thefatfingerBackoffice/gulpTasks/gulpfile')(gulp, thefatfingerBackoffice, sharedPrefix);
require('./src/contactNetConfig/gulpTasks/gulpfile')(gulp, contactNetConfig, sharedPrefix);

gulp.task('default', ['multichannel', 'shared']);

gulp.task('contactNetApp', ['contactNetConfig']);
gulp.task('fatfingerBackoffice', ['thefatfingerBackoffice']);
