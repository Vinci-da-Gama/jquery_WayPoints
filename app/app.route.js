(function () {
	var rM = angular.module('WayPointBsValidation.router');

	rM.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
		.state('/', {
			url: '/',
			templateUrl: 'index.html',
			controller: 'homeCtrl',
			controllerAs: 'hc',
			views: {
                'homeLeft': {
                	templateUrl: './_partials/homeL.html',
                	controller: 'homeLCtrl',
                	controllerAs: 'hlc'
                },
                'homeRight': {
                    templateUrl: './_partials/homeR.html',
                    controller: 'homeRCtrl',
                    controllerAs: 'hrc'
                }
            }
		})
		.state('p1', {
			url: '/p1',
			templateUrl: './_partials/p1.html',
			controller: 'p1Ctrl',
			controllerAs: 'p1c'
		})
		.state('p2', {
			url: '/p2',
			templateUrl: './_partials/p2.html',
			controller: 'p2Ctrl',
			controllerAs: 'p2c'
		});
	}]);

})();