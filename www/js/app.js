angular.module('starter', ['ionic', 'ngCordova', 'qoyodTranslator', 'ngCookies'])

  .run(function ($ionicPlatform, $cordovaStatusbar) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      $cordovaStatusbar.hide();
      window.open = cordova.InAppBrowser.open;

    });
    window.exitFromApp = function () {
      navigator.app.exitApp();
    }

    document.addEventListener("backbutton", function () {
      exitFromApp();
    }, false);


  }).config(function ($stateProvider, $urlRouterProvider, $compileProvider, $logProvider, $sceDelegateProvider, $httpProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'templates/website.html',
      controller: 'dashboardController'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginController as loginCtrl'
    })
    .state('starter', {
      url: '/',
      templateUrl: 'templates/starter.html',
      controller: 'starterController'
    });
  $urlRouterProvider.otherwise('/');

  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|ghttps?|ms-appx|ms-appdata|x-wmapp0):/);
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|file|ms-appx|ms-appdata|x-wmapp0):|data:image\//);
  $logProvider.debugEnabled(constants.debuggable);

  // $httpProvider.defaults.headers.common = {};
  // $httpProvider.defaults.headers.post = {};
  // $httpProvider.defaults.headers.put = {};
  // $httpProvider.defaults.headers.patch = {};

})
