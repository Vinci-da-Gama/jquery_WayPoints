(function () {
	var ctrlM = angular.module('WayPointBsValidation.ctrl');

	ctrlM.controller('homeCtrl', ['$scope', '$log', function($scope, $log){
		$log.log('homeCtrl as hc');
	}]);

	ctrlM.controller('homeLCtrl', ['$scope', '$log', function($scope, $log){
		$log.log('homeLCtrl as hlc');
	}]);

	ctrlM.controller('homeRCtrl', ['$scope', '$log', function($scope, $log){
		$log.log('homeRCtrl as hrc');
	}]);

	ctrlM.controller('p1Ctrl', ['$scope', '$log', function($scope, $log){
		$log.log('p1Ctrl as p1c');
	}]);

	ctrlM.controller('p2Ctrl', ['$scope', '$log', function($scope, $log){
		$log.log('p2Ctrl as p2c');
	}]);

})();