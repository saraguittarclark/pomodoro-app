(function () {
	function Tasks($firebaseArray) {
		var firebaseRef = new Firebase("https://get-it-done-timer.firebaseio.com/");

		//download tasks to synchronized array
		var tasksArray = $firebaseArray(firebaseRef);

		console.log(tasksArray);

		// var taskList = firebaseRef.limitToLast(25);

		return {
			all: tasksArray,
			add: function(task) {
				console.log('#');
				tasksArray.$add(task);
			}
			//filter?? task back
			/*remove: function () {}*/
		};
	}

	angular
		.module('app')
		.factory('Tasks', ['$firebaseArray', Tasks]);
})();