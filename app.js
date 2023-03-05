'use strict';
(function () {

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)


LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.items = '';
  $scope.message = '';

  $scope.checkItems = function() {
    if ($scope.items.length == 0) {
      $scope.message = 'Please enter data first!';
      return;
    } 
    else {
        let condition = $scope.items.split(',').filter(value => value.trim().length!=0);
          if (condition.length <= 3) {
          $scope.message = 'Enjoy!';
          return;
          }
          else {
          $scope.message = 'Too much!';
          return;
          }      
        }
  }
}

})();
  