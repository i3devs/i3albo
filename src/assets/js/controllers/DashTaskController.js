app.controller('DashTaskController', ['$scope', 'dashTasks', function($scope, dashTasks) {
	dashTasks.success(function(data) {
		$scope.dashTasks = data;
		console.log(data);
	});
}]);