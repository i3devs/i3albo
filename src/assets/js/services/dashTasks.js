app.factory('dashTasks', ['$http', function($http) {
	return $http.get('assets/php/app/dashTasks.php')
		.success(function(data) {
			return data;
		})
		.error(function(data) {
			return data;
		});
}]);

