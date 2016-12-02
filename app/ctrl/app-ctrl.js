(function() {
    var ctrlM = angular.module('WayPointBsValidation.ctrl');

   ctrlM.controller('homeCtrl', ['$scope', '$log', 'ListFactory', function($scope, $log, ListFactory){
   		$log.log('5 -- homeCtrl');
   		ListFactory.fetchListFromMyJson(grabHomeList);

   		function grabHomeList(testimony) {
   			$scope.listAry = testimony.data;
   		};
   }]);

   ctrlM.controller('homeListCtrl', ['$scope', '$log', function($scope, $log){
   		$log.log('8 -- homeListCtrl');
   }]);

   ctrlM.controller('homeVerticalTabsCtrl', ['$scope', '$log', function($scope, $log){
   		$log.log('11 -- homeVerticalTabsCtrl');
   }]);

   ctrlM.controller('aboutCtrl', ['$scope', '$log', function($scope, $log){
   		$log.log('14 -- aboutCtrl');
   }]);

   ctrlM.controller('aljwpCtrl', ['$scope', '$log', function($scope, $log){
   		$log.log('17 -- aljwpCtrl');
   }]);

   ctrlM.controller('artrCtrl', ['$scope', '$log', function($scope, $log){
   		$log.log('20 -- artrCtrl');
   }]);

   ctrlM.controller('carouselCtrl', ['$scope', '$log', function($scope, $log){
   		$log.log('23 -- carouselCtrl');
   }]);
})();