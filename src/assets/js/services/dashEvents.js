app.factory('dashEvents', ['$http', function($http) {
	return $http.get('assets/php/app/dashEvents.php')
		.success(function(data) {
			return data;
		})
		.error(function(data) {
			return data;
		});
}]);

