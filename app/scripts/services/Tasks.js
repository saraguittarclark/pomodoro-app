(function () {
	function Tasks($firebaseArray) {
		var firebaseRef = new Firebase("https://get-it-done-timer.firebaseio.com/");

		//download tasks to synchronized array
		var tasks = $firebaseArray(firebaseRef);

		var taskList = firebaseRef.limitToLast(25);

		return {
			all: tasks,
			add: function(task) {
				tasks.$add({task}).then(function(firebaseRef) {
  				var id = firebaseRef.key();
  				console.log("added record with id " + id);
  				tasks.$indexFor(id); // returns location in the array
				});
			}
			/*remove: function () {}*/
		};
	}

	angular
		.module('app')
		.factory('Tasks', ['$firebaseArray', Tasks]);
})();