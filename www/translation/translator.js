/**
 * Created by amohamed on 4/7/2016.
 */

var translator = angular.module('qoyodTranslator', ['pascalprecht.translate'])
  .config(['$translateProvider', function ($translateProvider) {


    $translateProvider.useLoader('translatorLoader');
    $translateProvider.preferredLanguage('ar');
    $translateProvider.fallbackLanguage('ar');
    $translateProvider.useSanitizeValueStrategy(null);
    $translateProvider.forceAsyncReload(true);

  }]);
translator.factory('translatorLoader', ['$q', '$timeout', '$http', '$log', function ($q, $timeout, $http, $log) {
  return function (options) {
    var defer = $q.defer();
    var appLang = options.key || constants.appLang;
    window.appLang = appLang;
    function loadTrn(trn) {
      var innerDefer = $q.defer();
      var loadFile = function (url) {
        var leDefer = $q.defer();
        $http({
          url: url,
          method: 'GET',
          timeout: 2000,
          headers: {'Content-Type': 'application/json'}
        }).then(function (object) {
          leDefer.resolve(object.data);
        }, function (error) {
          $log.warn(error);
          // to load default translation files in case JSON failed to convert file content to JSON.
          leDefer.resolve('error');
        });
        return leDefer.promise;
      }
      var urls = [];
      if (trn.files) {
        if (angular.isArray(trn.files)) {
          angular.forEach(trn.files, function (url) {
            urls.push(loadFile(url));
          });
        } else if (angular.isString(trn.files)) {
          urls.push(loadFile(trn.files));
        } else {
          innerDefer.resolve('error');
        }
        $q.all(urls).then(function (arr) {
          var retObject = {};
          angular.forEach(arr, function (object) {
            angular.merge(retObject, object);
          });
          innerDefer.resolve({keys: retObject, trn: trn});
        });
      } else {
        innerDefer.resolve('error');
      }
      return innerDefer.promise;
    }

    var translationFiles = [];
    angular.forEach(Object.keys(constants.trFiles), function (trn) {
      if (constants.trFiles[trn].tag == appLang) {
        translationFiles.push(loadTrn(constants.trFiles[trn]));
      }
    });
    $q.all(translationFiles).then(function (arr) {
      var defResolved = {};
      angular.forEach(arr, function (resolved) {
        if (resolved != 'error') {
          angular.merge(defResolved, resolved.keys);
        }
      });
      //$log.debug(defResolved);
      defer.resolve(defResolved);
    });
    return defer.promise;
  };
}]);
if (!String.prototype.trim) {
  (function () {
    // Make sure we trim BOM and NBSP
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    String.prototype.trim = function () {
      return this.replace(rtrim, '');
    };
  })();
}
translator.service('translation', ["$http", "$log", "$q", "$translate", "$filter", function ($http, $log, $q, $translate, $filter) {
  return {
    translateObj: false,
    getTranslateObject: function () {
      if (this.translateObj) {
        return this.translateObj;
      } else {
        this.translateObj = $translate;
        return this.translateObj;
      }
    },
    getTranslated: function (key) {
      var translated = $translate.instant(key);
      if (translated == '' || translated == key) {
        $log.warn('Translation failed for ' + key);
        //$translate.refresh();
      }
      return translated;
    },
    getTranslatedWithReference: function (key) {
      var result = '';
      if (typeof (key) === 'object') {
        result = this.getTranslated(key[0]);
        for (var i = 1; i < key.length; i++) {
          var tobeReplaced = '$$var' + i;
          result = result.replace(tobeReplaced, key[i]);
        }
      } else {
        result = this.getTranslated(key);
      }
      return result;
    }
  }
}]);
