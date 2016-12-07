(function () {
	var promiseM = angular.module('WayPointBsValidation.promise.factory');

	promiseM.factory('ListFactory', ['$http', '$q', function($http, $q){
		var listFactoryObj = {};
		listFactoryObj.fetchListFromMyJson = function (cb) {
			var listUrl = 'https://api.myjson.com/bins/4hi3h';
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