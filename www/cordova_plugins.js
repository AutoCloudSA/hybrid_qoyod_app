cordova.define('cordova/plugin_list', function (require, exports, module) {
  module.exports = [
    {
      "file": "plugins/com.cordova.plugins.cookiemaster/www/cookieMaster.js",
      "id": "com.cordova.plugins.cookiemaster.cookieMaster",
      "pluginId": "com.cordova.plugins.cookiemaster",
      "clobbers": [
        "cookieMaster"
      ]
    },
    {
      "file": "plugins/cordova-plugin-device/www/device.js",
      "id": "cordova-plugin-device.device",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "file": "plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
      "id": "cordova-plugin-device.DeviceProxy",
      "pluginId": "cordova-plugin-device",
      "runs": true
    },
    {
      "file": "plugins/cordova-plugin-dialogs/www/notification.js",
      "id": "cordova-plugin-dialogs.notification",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "file": "plugins/cordova-plugin-dialogs/www/browser/notification.js",
      "id": "cordova-plugin-dialogs.notification_browser",
      "pluginId": "cordova-plugin-dialogs",
      "merges": [
        "navigator.notification"
      ]
    },
    {
      "file": "plugins/cordova-plugin-globalization/www/GlobalizationError.js",
      "id": "cordova-plugin-globalization.GlobalizationError",
      "pluginId": "cordova-plugin-globalization",
      "clobbers": [
        "window.GlobalizationError"
      ]
    },
    {
      "file": "plugins/cordova-plugin-globalization/www/globalization.js",
      "id": "cordova-plugin-globalization.globalization",
      "pluginId": "cordova-plugin-globalization",
      "clobbers": [
        "navigator.globalization"
      ]
    },
    {
      "file": "plugins/cordova-plugin-globalization/www/browser/moment.js",
      "id": "cordova-plugin-globalization.moment",
      "pluginId": "cordova-plugin-globalization",
      "runs": true
    },
    {
      "file": "plugins/cordova-plugin-globalization/src/browser/GlobalizationProxy.js",
      "id": "cordova-plugin-globalization.GlobalizationProxy",
      "pluginId": "cordova-plugin-globalization",
      "runs": true
    },
    {
      "file": "plugins/cordova-plugin-keyboard/www/keyboard.js",
      "id": "cordova-plugin-keyboard.keyboard",
      "pluginId": "cordova-plugin-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "id": "cordova-plugin-network-information.network",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "id": "cordova-plugin-network-information.Connection",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
      "id": "cordova-plugin-network-information.NetworkInfoProxy",
      "pluginId": "cordova-plugin-network-information",
      "runs": true
    },
    {
      "file": "plugins/cordova-plugin-networkinterface/www/networkinterface.js",
      "id": "cordova-plugin-networkinterface.networkinterface",
      "pluginId": "cordova-plugin-networkinterface",
      "clobbers": [
        "window.networkinterface"
      ]
    },
    {
      "file": "plugins/cordova-plugin-networkinterface/src/browser/networkinterfaceProxy.js",
      "id": "cordova-plugin-networkinterface.networkinterfaceProxy",
      "pluginId": "cordova-plugin-networkinterface",
      "runs": true
    },
    {
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "id": "cordova-plugin-statusbar.statusbar",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
      "id": "cordova-plugin-statusbar.StatusBarProxy",
      "pluginId": "cordova-plugin-statusbar",
      "runs": true
    },
    {
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "id": "es6-promise-plugin.Promise",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "file": "plugins/ionic-plugin-keyboard/www/browser/keyboard.js",
      "id": "ionic-plugin-keyboard.keyboard",
      "pluginId": "ionic-plugin-keyboard",
      "clobbers": [
        "cordova.plugins.Keyboard"
      ],
      "runs": true
    },
    {
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
      "id": "cordova-plugin-splashscreen.SplashScreenProxy",
      "pluginId": "cordova-plugin-splashscreen",
      "runs": true
    },
    {
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    },
    {
      "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
      "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
      "pluginId": "cordova-plugin-inappbrowser",
      "runs": true
    }
  ];
  module.exports.metadata =
// TOP OF METADATA
    {
      "com.cordova.plugins.cookiemaster": "1.0.1",
      "cordova-plugin-device": "1.1.4",
      "cordova-plugin-dialogs": "1.3.4",
      "cordova-plugin-globalization": "1.0.8",
      "cordova-plugin-keyboard": "1.2.0",
      "cordova-plugin-network-information": "1.3.4",
      "cordova-plugin-networkinterface": "1.2.0",
      "cordova-plugin-statusbar": "2.3.0",
      "cordova-plugin-whitelist": "1.3.1",
      "es6-promise-plugin": "4.1.0",
      "ionic-plugin-keyboard": "2.2.1",
      "cordova-plugin-splashscreen": "4.0.3",
      "cordova-plugin-ionic-webview": "1.1.16",
      "cordova-plugin-inappbrowser": "1.7.2"
    }
// BOTTOM OF METADATA
});
