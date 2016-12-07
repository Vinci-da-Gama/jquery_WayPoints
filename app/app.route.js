(function () {
	var rM = angular.module('WayPointBsValidation.router');

	rM.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.when('', '/');
		$urlRouterProvider.when('/index', '/');
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: './_partials/home.html',
			controller: 'homeCtrl',
			controllerAs: 'hc'
		})
		.state('home.hl', {
			url: '/homelist',
			templateUrl: './_partials/home-list.html',
			parent: 'home',
			controller: 'homeListCtrl',
			controllerAs: 'hlc'
		})
		.state('home.hvt', {
			url: '/homevtabs',
			templateUrl: './_partials/home-verticaltabs.html',
			parent: 'home',
			controller: 'homeVerticalTabsCtrl',
			controllerAs: 'hvtc'
		})
		.state('about', {
			url: '/about',
			views: {
				'': {
					templateUrl: './_partials/about.html',
					controller: 'aboutCtrl',
					controllerAs: 'ac'
				},
				'alJwp@about': {
					templateUrl: './_partials/jqWayPoints.html',
					controller: 'aljwpCtrl',
					controllerAs: 'jwpc'
				},
				'arTr@about': {
					templateUrl: './_partials/tableResponsive.html',
					controller: 'artrCtrl',
					controllerAs: 'trc',

				}
			}
		})
		.state('p3carousel', {
			url: '/carousel',
			templateUrl: './_partials/carousel_p3.html',
			controller: 'carouselCtrl',
			controllerAs: 'caroC'
		});

	}]);

})();