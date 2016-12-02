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