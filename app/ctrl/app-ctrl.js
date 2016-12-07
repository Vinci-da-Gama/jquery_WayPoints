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
        $log.log('15 -- homeListCtrl');
    }]);

    ctrlM.controller('homeVerticalTabsCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('19 -- homeVerticalTabsCtrl');
    }]);

    ctrlM.controller('aboutCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('19 -- aboutCtrl');
    }]);

    ctrlM.controller('aljwpCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('30 -- aljwpCtrl');
        var imgElem = angular.element(document.querySelector('.theimg-jqPointway'));
        console.log('32 -- imgElem is: ', imgElem);
        imgElem.waypoint((direction) => {
            if (direction === 'down' && !imgElem.hasClass('animated')) {
                imgElem.removeClass('opacity-0begin');
                imgElem.addClass('animated fadeInUp');
            }
        }, {offset: '50%'});
    }]);

    ctrlM.controller('artrCtrl', ['$scope', '$log', 'ListFactory', function($scope, $log, ListFactory) {
        $log.log('40 -- artrCtrl');
        ListFactory.fetchListFromMyJson(grabHomeList);

        function grabHomeList(testimony) {
            $scope.listAry = testimony.data;
        };
    }]);

    ctrlM.controller('carouselCtrl', ['$scope', '$log', function($scope, $log) {
        $log.log('47 -- carouselCtrl');
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
