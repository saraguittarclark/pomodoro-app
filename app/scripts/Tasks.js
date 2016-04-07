(function () {
	function Tasks($firebaseArray, $scope) {
		var firebaseRef = new Firebase("https://get-it-done-timer.firebaseio.com/");

		//download tasks to synchronized array
		var tasks = $firebaseArray(firebaseRef);
		var task = $scope.task;



		return {
			all: tasks,
			//maybe this isn't right?
			$scope.add = function() {
				//add task to fb array
				tasks.$add(task);
			}
		};
	}

	angular
		.module('app')
		.factory('Tasks', ['$firebaseArray', '$scope', Tasks]);
})();