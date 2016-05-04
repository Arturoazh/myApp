(function() {
	'use strict';

  /* @ngInject */
  module.exports = function ($cnContactNets, $filter) {
  	
  	var directive = {
        restrict: 'EA',
        scope : {
        	ngModel : '='
        },
        link: link,
        templateUrl: '/contactNetConfig/modules/core/directives/cnSelectAgents/cnSelectAgents.html',
      	controller: controller
    };

    return directive;


    function link(scope, element, attr, ctrl) {
    	console.log('cnSelectAgents', scope);

        scope.agents = [];
    	scope.selectDeselectAll = selectDeselectAll;

    	function selectDeselectAll () {
    		var args = arguments;
    		angular.forEach(scope.ngModel, function () {
    			arguments[0].selected = args[0];
                if (!arguments[0].weight) {
                    arguments[0].weight = 1;
                };
    		})
    	}
    	$cnContactNets.getAgents().then(function () {
    	   // console.log('getAgents', arguments);
    	// 	angular.forEach(arguments[0], function () {
    	// 		var argsAgentsGet = arguments[0];
					// angular.forEach(scope.ngModel, function () {
					// 	console.log(arguments[0], argsAgentsGet);
					// 	if (argsAgentsGet.id != arguments[0].id) {
					// 		scope.ngModel.push(argsAgentsGet[0]);
					// 	}
					// })
    	// 	})
            console.log('AGENTS', arguments[0]);
            angular.forEach(arguments[0], function(){
                console.log('arguments', arguments[0]);
              arguments[0].selected = Boolean($filter('filter')(scope.ngModel, {id: arguments[0].id}, true).length);
              scope.agents.push(arguments[0]);
            });
    	})

    }

    /* @ngInject */
    function controller ($scope) {
    	// console.log('cnSupervisorsConfig', $scope);

    }
  }

 
}());