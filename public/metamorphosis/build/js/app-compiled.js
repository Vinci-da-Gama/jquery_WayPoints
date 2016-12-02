(function() {

    var anguNg = ['ngAria', 'ngSanitize', 'ngAnimate', 'ngMessages', 'ngNotify', 'ngMask', 'slickCarousel'];
    var anguEx = ['ui.bootstrap', 'mgcrea.ngStrap', 'bootstrapLightbox'];
    var routerCtrl = ['WayPointBsValidation.router', 'WayPointBsValidation.ctrl'];
    var cons = ['WayPointBsValidation.constant'];
    var serv = ['WayPointBsValidation.sig.service', 'WayPointBsValidation.service', 'WayPointBsValidation.promise.factory'];
    var dir = ['WayPointBsValidation.dir', 'WayPointBsValidation.cust.dir'];

    var depedencyArr = anguNg.concat(anguEx, routerCtrl, cons, serv, dir);
    /**
     * WayPointBsValidation Module
     *
     * The main module of this application...
     */
    angular.module('WayPointBsValidation', depedencyArr);

    angular.module('WayPointBsValidation.router', ['ui.router']);
    angular.module('WayPointBsValidation.constant', []);
    angular.module('WayPointBsValidation.sig.service', []);
    angular.module('WayPointBsValidation.service', []);
    angular.module('WayPointBsValidation.promise.factory', []);
    angular.module('WayPointBsValidation.ctrl', []);
    angular.module('WayPointBsValidation.dir', ['WayPointBsValidation.service', 'WayPointBsValidation.sig.service']);
    angular.module('WayPointBsValidation.cust.dir', ['WayPointBsValidation.service', 'WayPointBsValidation.sig.service']);

})();
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
			controller: 'homeListCtrl',
			controllerAs: 'hlc'
		})
		.state('home.hvt', {
			url: '/homevtabs',
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
(function () {
	var cosM = angular.module('WayPointBsValidation.constant');

})();
(function() {
    var ctrlM = angular.module('WayPointBsValidation.ctrl');

    ctrlM.controller('homeCtrl', ['$scope', '$log', 'ListFactory', function($scope, $log, ListFactory) {
        $log.log('5 -- homeCtrl');
        ListFactory.fetchListFromMyJson(grabHomeList);

        function grabHomeList(testimony) {
            $scope.listAry = testimony.data;
        };
    }]);

    ctrlM.controller('homeListCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('8 -- homeListCtrl');
    }]);

    ctrlM.controller('homeVerticalTabsCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('11 -- homeVerticalTabsCtrl');
    }]);

    ctrlM.controller('aboutCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('14 -- aboutCtrl');
    }]);

    ctrlM.controller('aljwpCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('17 -- aljwpCtrl');
    }]);

    ctrlM.controller('artrCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('20 -- artrCtrl');
    }]);

    ctrlM.controller('carouselCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('23 -- carouselCtrl');
        $scope.numsCollection = [
            { label: 1 }, { label: 2 }, { label: 3 }, { label: 4 }, { label: 5 }, { label: 6 }, { label: 7 }, { label: 8 }
        ];
        $scope.wuhaSlickConfig = {
            enabled: true,
            draggable: false,
            autoplay: false,
            autoplaySpeed: 3000,
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        };

    }]);

})();

(function () {
	var cdM = angular.module('WayPointBsValidation.cust.dir');

	// cdM

})();
(function () {
	var dM = angular.module('WayPointBsValidation.dir');

	// dM

})();
(function () {
	var promiseM = angular.module('WayPointBsValidation.promise.factory');

	promiseM.factory('ListFactory', ['$http', '$q', function($http, $q){
		var listFactoryObj = {};
		listFactoryObj.fetchListFromMyJson = function (cb) {
			var listUrl = 'https://api.myjson.com/bins/3ss6j';
			$http.get(listUrl)
			.then(function (resp) {
				console.log('10 -- resp is: ', resp);
				cb(resp);
			}, function (err) {
				console.log('13 -- err is: ', err);
			})
		};

		return listFactoryObj;
	}]);

})();
// service js Document
// $log.log("sigSrevice error line -- 15 --- data : "+data+" config: "+config+" status: "+status+".---");
	/*sM.service('verifyNumStrObjArrUndefinedElem', ['$log', function($log){
		
		this.IsNumberAndGreaterThanZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure > 0;
			return numBool;
		};

		this.IsNumberAndGreaterThanWhileEqualZero = function (figure) {
			var numBool = angular.isNumber(figure) && !isNaN(figure) && figure >= 0;
			return numBool;
		};

		this.IsStringAndNotNull = function (str) {
			var strBool = angular.isString(str) && str.length > 0 && str !== null && str !== '';
			return strBool;
		};

		this.IsUndefined = function (testimony) {
			var refBool = angular.isUndefined(testimony);
			return refBool;
		};

		this.IsJqOrDomElem = function (jqdomElem) {
			var argBool = angular.isElement(jqdomElem) && typeof(jqdomElem) !== 'undefined';
			return argBool;
		};

		this.IsObjAndNotEmpty = function (obj) {
			var objBool = angular.isObject(obj) && Object.keys(obj).length > 0 && typeof(obj) !== 'undefined';
			return objBool;
		};

		this.IsArrayAndNotUnfilled = function (arr) {
			var arrBool = angular.isArray(arr) && arr.length > 0 && typeof(arr) !== 'undefined';
			return arrBool;
		}

	}]);*/
(function () {
	var sM = angular.module('WayPointBsValidation.service');

	// sM

})();
// service js Document
// $log.log("sigSrevice error line -- 14 --- data : "+data+" config: "+config+" status: "+status+".---");
/*sigM.service('inquireInfo', ['$http', '$log', 'appnameDb', function($http, $log, appnameDb){
	var dbPath = appnameDb.dbDot+appnameDb.delimiter+appnameDb.dbPrefix+appnameDb.delimiter+appnameDb.dbName+appnameDb.dbExtension;

	this.obtainDossier = function (func) {
		$http.get(dbPath)
		.then(function (testimony) {
			func(testimony.data);
			$log.log('get data successfully. '+dbPath);
		})
		.catch(function (data, config, status) {
			$log.log("sigSrevice error line -- 16 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
		})
		.finally(function () {
			$log.log('sigSrevice line 19, finally method.');
		});
	};

}]);*/
(function () {
	var ssM = angular.module('WayPointBsValidation.sig.service');

	// ssM

})();
// jQuery Js Document
$(document).ready(function() {
	// notice ();
	// initWow ();
});

function notice () {
	alert('pls, disable this function.'+window.location);
}

function initWow () {
	new WOW().init();
}