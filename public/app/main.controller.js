(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = [];

    /* @ngInject */
    function MainController() {
        var vm = this;
        vm.title = 'MainController';
        vm.jobs = [{
            title: 'develope',
            description: 'stay oon pc'
        }, {
            title: 'PA',
            description: 'help people'
        }
        , {
            title: 'sales force',
            description: 'oelo'
        }]

        activate();

        ////////////////

        function activate() {}
    }
})();