'use strict';
var gulp = require('gulp');
var server = require('gulp-server-livereload');
var config = require('../config');


module.exports = function(gulp, appPrefix) {
	gulp.task(appPrefix + 'webserver', function() {
	  // gulp.src(config.outputDir)
	  gulp.src('dist/')
	    .pipe(server({
	      livereload: true,
	      port: 34200,
	      // fallback: 'index.html',
	      // directoryListing: true,
	      open: true
	    }));
	});
}