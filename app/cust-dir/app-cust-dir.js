(function () {
	var cdM = angular.module('WayPointBsValidation.cust.dir');

	cdM.directive('listsContent', [function(){
		return {
			scope: {
				'eachDib': '='
			},
			controller: function($scope, $element, $attrs, $transclude) {
				// console.log('10 eachDib is: ', $scope.eachDib);
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E',
			templateUrl: './_partials/directive-template/each-dib.html',
			// replace: true,
			// transclude: true,
			link: function($scope, iElm, iAttrs, controller) {
				
			}
		};
	}]);

})();