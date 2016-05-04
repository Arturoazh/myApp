(function () {
	"use strict";

	var cnChannels = require('./modules/usersOneDay/');
	var cnContactNets = require('./modules/contactNets/');
	var cnRepos = require('./modules/repos/');
	var cnCore = require('./modules/core/');
	var cnRules = require('./modules/rules/');

	var modules = [
		'ui.router', 
	  'ngSanitize', 
	  'ngAnimate',
	  'ngAria',
	  'ngMaterial',
	  'firebase',
	  cnCore.name,
	  cnChannels.name,
	  cnContactNets.name,
	  cnRepos.name,
	  cnRules.name
	];

	/**
	* @ngdoc overview
	* @name index
	*
	* @description
	*
	* # Virtual Center Config
	*   
	*
	*/

	angular
	.module('virtual-center', modules)
	.config(require('./app.route.js'))
	.config(require('./app.config.js'))
	;

}());