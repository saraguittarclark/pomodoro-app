(function() {
	function StartCtrl(Tasks, $scope) {
		$('.timer').show();
	//tasks logic!

	}

	angular
		.module('app')
		.controller('StartCtrl', ['Tasks', '$scope', StartCtrl]);
})();

// save text input somewhere 