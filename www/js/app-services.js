/**
 * Created by Aly Naguib on 11/24/2017.
 */
angular.module('starter').service('runtimeServices', ['$rootScope', '$log', '$state', '$sce', '$ionicPlatform', '$q', '$http', runtimeFun]);

function runtimeFun($rootScope, $log, $state, $sce, $ionicPlatform, $q, $http) {
  var re = {};

  re.checkConnection = function () {
    var defer = $q.defer();
    $http.get('http://www.google.com').then(function () {
      defer.resolve();
    }, function () {
      defer.reject();
    });
    return defer.promise;
  }

  return re;
}
