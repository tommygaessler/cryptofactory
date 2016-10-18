(function() {

  'use strict';

  angular
  .module('myApp.components.007', [])
  .controller('bondController', bondController);

  bondController.$inject = ['apiService'];

  function bondController(apiService) {
    /*jshint validthis: true */
    this.button = '007 Coin';
    this.api = () => {
      apiService.convert('https://api.cryptonator.com/api/ticker/ast-usd')
      .then((currency) => {
        this.currency = currency.data.ticker.price;
      })
      .catch((error) => {
        console.log(error);
      });
    };
  }

})();
