(function() {
  'use strict';

  angular
  .module('apiServiceMod', [])
  .service('apiService', apiService);

  apiService.$inject = ['$http'];

  function apiService($http) {
    /*jshint validthis: true */
    this.convert = (url) => {
      return $http.get(url);
    };
  }

}());
