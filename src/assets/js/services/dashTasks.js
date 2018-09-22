app.factory('dashTasks', ['$http', function($http) {
	return $http.get('assets/php/app/tasks.php')
		.success(function(data) {
			return data;
		})
		.error(function(data) {
			return data;
		});
}]);

