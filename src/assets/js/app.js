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
	$routeProvider.when('/', {
			templateUrl: 'views/home.html'
		});
	$routeProvider.when('/login', {
			templateUrl: 'views/login.html'
		});
	$routeProvider.when('/app', {
			templateUrl: 'views/app.html'
		});
	$routeProvider.otherwise({
			redirectTo: '/'
		});
});