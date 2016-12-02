(function () {
	var rM = angular.module('WayPointBsValidation.router');

	rM.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.when('', '/');
		$urlRouterProvider.when('/index', '/');
		$urlRouterProvider.when('/home', '/');
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('/', {
			url: '/',
			templateUrl: './_partials/home.html',
			controller: 'homeCtrl',
			controllerAs: 'hc'
		})
		.state('homelist', {
			url: '/.hlist',
			templateUrl: './_partials/home-list.html',
			controller: 'homeListCtrl',
			controllerAs: 'hlc'
		})
		.state('homevtabs', {
			url: '/.hvtabs',
			templateUrl: './_partials/home-verticaltabs.html',
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
					controllerAs: 'trc'
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