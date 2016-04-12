(function() {
	function StartCtrl(Tasks) {
		$('.timer').show();

		this.tasks = Tasks.all;
		this.addTask = function () {
			Tasks.add(this.task);
			this.task = "";
		}.bind(this);
	}

	angular
		.module('app')
		.controller('StartCtrl', ['Tasks', StartCtrl]);
})();


//tasks not displaying, but seems to be working