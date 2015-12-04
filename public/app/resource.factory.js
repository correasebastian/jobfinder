(function() {
    'use strict';

    angular
        .module('app')
        .factory('JobsApi', JobsApi);

    JobsApi.$inject = ['$resource'];

    /* @ngInject */
    function JobsApi($resource) {
       return $resource('/api/jobs')
    }
})();