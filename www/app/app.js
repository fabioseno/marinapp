/*global angular, cordova, StatusBar*/
(function () {
    'use strict';
    
    function Config($mdThemingProvider, $stateProvider, $urlRouterProvider) {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: 'app/home/home.html',
            controller: 'home as vm'
        });
        
        $urlRouterProvider.otherwise('/home');
    }
    
    function Run($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    }
    
    angular.module('app', ['ionic', 'ngMaterial']);

    angular.module('app').config(['$mdThemingProvider', '$stateProvider', '$urlRouterProvider', Config]);
    angular.module('app').run(['$ionicPlatform', Run]);
}());