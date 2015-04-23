var myAppModule = angular.module('myAppModule', ['ui.router', 'ngResource', 'ngMaterial', 'ngMdIcons'])
    .config( ['$httpProvider', '$urlRouterProvider', function($httpProvider, $urlRouterProvider) {
    	
    } ])
    .config(function($mdThemingProvider) {
    	$mdThemingProvider.theme('default')
        .primaryPalette('green', {
          'default': '400',
          'hue-1': '100',
          'hue-2': '600',
          'hue-3': 'A100'
        })
        .accentPalette('blue', {
          'default': '200'
        });
    });

myAppModule.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.toggleLeft = buildToggler('left');
  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildToggler(navID) {
    return function() {
      return $mdSidenav(navID).toggle()
        .then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    }
  }
})
.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
  $scope.close = function () {
    $mdSidenav('left').close()
      .then(function () {
        $log.debug("close LEFT is done");
      });
  };
});
