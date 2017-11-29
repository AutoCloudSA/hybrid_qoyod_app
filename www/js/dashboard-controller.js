/**
 * Created by Aly Naguib on 11/18/2017.
 */
angular.module('starter').controller('dashboardController', ['$scope', '$rootScope', '$state', '$log', '$http', dashboardController]);
function dashboardController($scope, $rootScope, $state, $log, $http) {

  //$scope.page = page;
  $(document).ready(function () {
    $.ajax({
      type: "GET",
      url: 'https://staging.qoyod.com/users/sign_in',
      success: function (data) {
        $('#website-iframe').html(data);
      },
      error: function (er) {

      }
    });

  });

}
