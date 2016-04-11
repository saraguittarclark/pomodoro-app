(function() {
	function StartCtrl(Tasks, $scope) {
		$('.timer').show();
		$scope.tasksArray = Tasks.tasksArray;
		$scope.add = function() {
			//something
		}
	}

	angular
		.module('app')
		.controller('StartCtrl', ['Tasks', '$scope', StartCtrl]);
})();
