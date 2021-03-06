'use strict';

var config = require('./config');

module.exports = function (gulp, appPrefix, sharedPrefix) {

  require('./tasks/build-browserify')(gulp, appPrefix);
  //require('./tasks/build-js')(gulp, appPrefix);
  require('./tasks/build-css')(gulp, appPrefix);
  require('./tasks/build-html')(gulp, appPrefix);
  require('./tasks/copy-other')(gulp, appPrefix);
  require('./tasks/webserver')(gulp, appPrefix);
  require('./tasks/docs')(gulp, appPrefix);
  require('./tasks/watch')(gulp, appPrefix, sharedPrefix);

  gulp.task('contactNetConfig', [
    appPrefix + 'build-browserify',
    appPrefix + 'build-css',
    appPrefix + 'build-html',
    //appPrefix + 'build-js',
    appPrefix + 'copy-other',
    appPrefix + 'watch',
    appPrefix + 'webserver'

  ]);


};


