(function () {
	function Tasks($firebaseArray) {
		var firebaseRef = new Firebase("https://get-it-done-timer.firebaseio.com/");

		var tasksArray = $firebaseArray(firebaseRef);

		return {
			all: tasksArray,
			//
			add: function(task) {
				tasksArray.$add({
					text: task
				});
				console.log(task);
				console.log(tasksArray)
			}
		};
	}

	angular
		.module('app')
		.factory('Tasks', ['$firebaseArray', Tasks]);
})();