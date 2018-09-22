app.factory('dashTests', ['$http', function($http) {
	return $http.get('assets/php/app/dashTests.php')
		.success(function(data) {
			return data;
		})
		.error(function(data) {
			return data;
		});
}]);

