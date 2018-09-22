app.controller('DashTestsController', ['$scope', 'dashTests', function($scope, dashTests) {
	dashTests.success(function(data) {
		$scope.dashTests = data;
		console.log(data);
	});
}]);