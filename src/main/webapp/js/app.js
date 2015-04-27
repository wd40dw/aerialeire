var myAppModule = angular.module('myAppModule', ['ui.router', 'ngResource', 'ngMaterial', 'ngMdIcons','ngAnimate'])
    .config( ['$httpProvider', '$urlRouterProvider','$stateProvider', function($httpProvider, $urlRouterProvider,$stateProvider) {
    	
    	$urlRouterProvider.otherwise("/home");
    	
    	$stateProvider.state('home', {
    		url: '/home',
    		templateUrl: 'partials/home.html',
    		controller: myAppModule.gridListDemoCtrl
    	})
    	.state('about', {
    		url: '/about',
    		templateUrl: 'partials/about.html',
    		controller: myAppModule.AboutController
    	})
    	.state('portfolio', {
    		url: '/portfolio',
    		templateUrl: 'partials/portfolio.html',
    		controller: myAppModule.PortfolioController
    	})
    	.state('contact', {
    		url: '/contact',
    		templateUrl: 'partials/contact.html',
    		controller: myAppModule.ContactController
    	})
    	.state('social', {
    		url: '/social',
    		templateUrl: 'partials/social.html',
    		controller: myAppModule.SocialController
          });
    	
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
