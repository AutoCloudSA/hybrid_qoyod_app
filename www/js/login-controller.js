/**
 * Created by Aly Naguib on 11/18/2017.
 */
angular.module('starter').controller('loginController', ['$scope', '$rootScope', '$state', '$log', '$http', loginController]);
function loginController($scope, $rootScope, $state, $log, $http) {

  $scope.formData = {email: 'test@qoyod.com', password: 'abcd1234'};

  this.submitForm = function () {

    $http({
      method: 'POST',
      url: 'https://www.qoyod.com/users/sign_in',
      data: JSON.stringify($scope.formData),  // pass in data as strings
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}  // set the headers so angular passing info as form data (not request payload)
    }).success(function (data) {

    });

  };

}
