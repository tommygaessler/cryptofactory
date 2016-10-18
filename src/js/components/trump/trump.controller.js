(function() {

  'use strict';

  angular
  .module('myApp.components.trump', [])
  .controller('trumpController', trumpController);

  trumpController.$inject = ['apiService'];

  function trumpController(apiService) {
    /*jshint validthis: true */
    this.button = 'Trump Coin';
    this.api = () => {
      apiService.convert('https://api.cryptonator.com/api/ticker/trump-usd')
      .then((currency) => {
        this.currency = currency.data.ticker.price;
      })
      .catch((error) => {
        console.log(error);
      });
    };
  }

})();
