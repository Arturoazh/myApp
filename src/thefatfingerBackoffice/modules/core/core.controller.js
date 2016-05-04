(function(){	
	"use strict";

	/* @ngInject*/ 
  module.exports = function ($rootScope, $scope, $firebaseObject, $firebaseArray, $timeout, $mdSidenav, $cnMenu, $cnNavigate, $location, $interval, $window) {
  	console.log('firebaseObject', $firebaseObject);
  	var url = 'http://popping-inferno-4241.firebaseIO.com';
  	var fireRef = new Firebase(url);

  	$scope.data = $firebaseObject(fireRef);

  	var syncObject = $firebaseObject(fireRef);

  	syncObject.$bindTo($scope, "data");

  	$scope.todos = $firebaseArray(fireRef);

  	console.log('firebaseArray', $scope);
  	$scope.hola = 'hola';
		$scope.toggleLeft = buildToggler('left');
		$scope.menu = {};
		$scope.cnNavigate = $cnNavigate;
		$scope.environment = {};
		$scope.session = $window.session;

		$rootScope.fab = {
			isOpen: false,
			hide: false,
			trigger: {
				icon: 'add',
				action: function(){}
			},
			actions: []
		};


		$scope.isOpenLeft = function(){
      return $mdSidenav('left').isOpen();
    };

		function buildToggler() {
			var args = arguments;
			return function() {
				$mdSidenav(args[0])
				.toggle();
			};
		}

		$cnMenu.get().then(function(){
			console.log("arguments", arguments[0]);
			$scope.menu = arguments[0];
		});

		$rootScope.$on('$stateChangeSuccess', function () {
			$rootScope.fab.isOpen = false;
			$rootScope.fab.hide = false;
			$rootScope.fab.actions = [];

			switch(arguments[1].url) {
				case '/contactnets':
					$scope.selectedIndex = 0;
					$scope.environment.actualSection = 'ContactNets';
				break;
				case '/rules':
					$scope.selectedIndex = 1;
					$scope.environment.actualSection = 'Canales';
				break;
				case '/channels':
					$scope.selectedIndex = 2;
					$scope.environment.actualSection = 'Reglas';
				break;
				case '/repos':
					$scope.selectedIndex = 3;
					$scope.environment.actualSection = 'Repositorio';
				break;
			}
		});

  }

}());
