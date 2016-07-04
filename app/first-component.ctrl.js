(function () {
    'use strict';

    angular
        .module('app')
        .controller('firstComponentCtrl', firstComponentCtrl);

    firstComponentCtrl.$inject = []; 

    function firstComponentCtrl() {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'firstComponentCtrl';

        vm.textVal = '';

        vm.btnClick = function () {
            //vm.callback({ value: vm.textVal });
            vm.callback({ value: 'abcd' });
            //vm.callback(vm.textVal);
        }
    }
})();
