(function () {
    'use strict';

    angular
        .module('app')
        .controller('mainCtrl', mainCtrl);

    mainCtrl.$inject = [];

    function mainCtrl() {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'mainCtrl';
        vm.callbackFunc = function(value) {
            alert(value);
        }
    }
})();
