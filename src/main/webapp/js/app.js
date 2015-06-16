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
    	.state('photos', {
    		url: '/photos',
    		templateUrl: 'partials/photos.html',
    		controller: myAppModule.PhotosController
    	})
    	.state('contact', {
    		url: '/contact',
    		templateUrl: 'partials/contact.html',
    		controller: myAppModule.ContactController
    	})
    	.state('videos', {
    		url: '/videos',
    		templateUrl: 'partials/videos.html',
    		controller: myAppModule.VideosController
          });
    	
} ]);

$( document ).ready(function(){
	
	$('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.modal-trigger').leanModal();

})
