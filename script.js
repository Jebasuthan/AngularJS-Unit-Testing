// script.js

var routeApp = angular.module('routeApp', ['ngRoute']);

// routes
// set $locationProvider to true enable html5Mode, removing '#'
// from the URLs
routeApp.config(function($routeProvider) {
	
	$routeProvider
		.when('/', {
			templateUrl : 'pages/home.html',
			controller : 'mainController'
		})
		
		// about
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller : 'aboutController'
		})
		
		// contact
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller : 'contactController'
		});
		
});