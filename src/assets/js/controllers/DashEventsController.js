app.controller('DashEventsController', ['$scope', 'dashEvents', function($scope, dashEvents) {
	dashEvents.success(function(data) {
		$scope.dashEvents = data;
		console.log(data);
	});
}]);