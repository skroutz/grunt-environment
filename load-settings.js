'use strict';
module.exports = function(grunt, options) {
  grunt.config.set('environment', options);

  var EnvironmentManager = require('./utils/EnvironmentManager.js');
  var manager = new EnvironmentManager(grunt, options);
  manager.injectEnvironmentSettings();
};