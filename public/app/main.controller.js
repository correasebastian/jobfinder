(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    MainController.$inject = ['JobsApi'];

    /* @ngInject */
    function MainController(JobsApi) {
        var vm = this;
        vm.title = 'MainController';
        var jobs = [{
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
        
        vm.jobs=JobsApi.query();

        activate();

        ////////////////

        function activate() {}
    }
})();