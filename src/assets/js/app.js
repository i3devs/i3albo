/**
 * Main i3albo app.
 *
 * @author giuliobosco
 * @version 1.0
 */

/**
 * Main i3albo app.
 */
var app = angular.module('ViewsAPP', ['ngRoute']);

/**
 * Configure app.
 */
app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html'
		})
		.when('/login', {
			templateUrl: 'views/login.html'
		})
		.when('/app', {
			templateUrl: 'views/app.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});

/*
app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: 'views/home.html'
		})
		.when('/photos/:id', {
			controller: 'PhotoController',
			templateUrl: 'views/photo.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});*/