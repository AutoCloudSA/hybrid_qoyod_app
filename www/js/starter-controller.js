/**
 * Created by Aly Naguib on 11/18/2017.
 */
angular.module('starter').controller('starterController', ['$scope', '$rootScope', '$log', '$state', '$sce', '$ionicPlatform', 'runtimeServices', 'translation', '$ionicLoading', '$cookieStore', '$cookies', starterController]);

function starterController($scope, $rootScope, $log, $state, $sce, $ionicPlatform, runtimeServices, translation, $ionicLoading, $cookieStore, $cookies) {
  $log.debug("Welcome to Qoyod App");
  $rootScope.trustSrc = function (url) {
    return $sce.trustAsResourceUrl(url);
  };

  function displayConnectionError() {
    setTimeout(function () {
      navigator.notification.confirm(
        translation.getTranslated('msg_no_con'), // message
        function (choice) {
          if (choice == 1) {
            $rootScope.loadQoyodApp();
          } else if (choice == 2) {
            exitFromApp();
          }
        },            // callback to invoke with index of button pressed
        translation.getTranslated('msg_title_err'),           // title
        [translation.getTranslated('lb_ret'), translation.getTranslated('lb_ex')]     // buttonLabels
      );
    }, 1500)
  }

  $rootScope.displayLoadingDialog = function () {
    setTimeout(function () {
      $ionicLoading.show({
        content: 'Loading',
        animation: 'fade-in',
        showBackdrop: true,
        maxWidth: 200,
        showDelay: 0
      });
    }, 100);
  }

  $rootScope.hideLoadingDialog = function () {
    setTimeout(function () {
      $ionicLoading.hide();
    });
  }

  $rootScope.loadQoyodApp = function (_isLoggedIn) {
    window.page = {
      onload: function (event) {
        $log.debug("onload");
        $log.debug(event.contentWindow.location);
        //hideLoadingDialog();
      },
      onerror: function (event) {
        $log.debug("onerror");
        $log.debug(event.contentWindow.location);
        //hideLoadingDialog();
        displayConnectionError();
      }
    };

    function loadContent() {
      var isLoggedIn = _isLoggedIn || false;
      if (isLoggedIn) {
        window.page.url = $rootScope.trustSrc('https://qoyod.com/tenant/dashboards/organizations?APPID=test');
      } else {
        window.page.url = $rootScope.trustSrc('https://www.qoyod.com/users/sign_in?APPID=test');
      }
      runtimeServices.checkConnection().then(function () {
        //  $state.go('login');
        $state.go('dashboard');

      }, function () {
        //hideLoadingDialog();
        displayConnectionError();
      });
    }

    $ionicPlatform.ready(function () {
      if (cookieMaster) {
        cookieMaster.getCookies('http://www.qoyod.com', function (data) {
          $log.debug('CookieMaster');
          try {
            var cookie = JSON.parse(data);
            if (angular.isDefined(cookie['_gid'])) {
              _isLoggedIn = true;
            }
          } catch (ex) {
            $log.error(ex);
          }
          $log.debug(data);
          loadContent();
        }, function (error) {
          if (error) {
            console.log('error: ' + error);
          }
          loadContent();
        });
      } else {
        loadContent();
      }

    });

  }

  $rootScope.loadQoyodApp();


}
