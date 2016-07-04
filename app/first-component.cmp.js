(function() {
    'use strict';

    angular
        .module('app')
        .component('firstComponent', {
            templateUrl: 'app/firstComponentTemplate.html',
            controller: 'firstComponentCtrl as vm',
            bindings: {
                callback: '&'
            }
        });

})();