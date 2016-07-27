angular.module('app', ['ngResource']);

angular.module('app').controller('testCtrl', function($scope, jobs) {
	$scope.jobs = jobs.query();

	$scope.submit = function() {
		var job = {
			title: $scope.title,
			description: $scope.description
		};
		jobs.save(job);
		$scope.jobs.push(job);
	}
});