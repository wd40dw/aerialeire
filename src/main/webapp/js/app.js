var myAppModule = angular.module('myAppModule', ['ui.router', 'ngResource', 'ngMdIcons','ngAnimate'])
    .config( ['$httpProvider', '$urlRouterProvider','$stateProvider', function($httpProvider, $urlRouterProvider,$stateProvider) {
    	
    	$urlRouterProvider.otherwise("/home");
    	
    	$stateProvider.state('home', {
    		url: '/home',
    		templateUrl: 'partials/home.html',
    		controller: myAppModule.HomeController
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
    	
} ]);

$( document ).ready(function(){
	
	$('.button-collapse').sideNav();
    $('.parallax').parallax();

})
