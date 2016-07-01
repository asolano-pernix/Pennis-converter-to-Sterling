'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl as vm'
  });
}])

.controller('View1Ctrl', ['convertService',function(convertService) {
  var vm= this;
  vm.calculateAmount = calculateAmount;
  vm.cantidad = "0";
  vm.resultado = "";


  function calculateAmount() {
    convertService.calculate(vm.cantidad);
    vm.resultado =  convertService.convertResult();
  }

}]);