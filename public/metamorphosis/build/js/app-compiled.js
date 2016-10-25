(function () {

	var anguNg = ['ngAria', 'ngSanitize', 'ngAnimate', 'ngMessages', 'ngNotify', 'ngMask'];
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
(function () {
	var cosM = angular.module('WayPointBsValidation.constant');

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

	// promiseM

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