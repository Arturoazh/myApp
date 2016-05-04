(function(){
	
"use strict";

  /* @ngInject */
  module.exports = function ($stateProvider, $urlRouterProvider){

		$stateProvider
			.state('contactnets', {
				// url: "/",
				abstract:true,
				templateUrl: "/thefatfingerBackoffice/layout.html",
				// controller: "contactNetsController"
			})
			.state('contactnets.contatNetConfig', {
				url: "/contactnets",
				templateUrl: "/thefatfingerBackoffice/modules/contactNets/contactNets.html",
				controller: "contactNetsController"
			})
			.state('contactnets.usersOneDay', {
				url: "/usersOneDay",
				templateUrl: "/thefatfingerBackoffice/modules/usersOneDay/usersOneDay.html",
				controller: "usersOneDayController"
			})
			.state('contactnets.rules', {
				url: "/rules",
				templateUrl: "/thefatfingerBackoffice/modules/rules/rules.html",
				controller: "rulesController"
			})
			.state('contactnets.repos', {
				url: "/repos",
				templateUrl: "/thefatfingerBackoffice/modules/repos/repos.html",
				controller: "reposController"
			});

		$urlRouterProvider.otherwise("/contactnets");
			
  }

}());
