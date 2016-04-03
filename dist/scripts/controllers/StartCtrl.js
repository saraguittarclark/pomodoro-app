(function() {
	function StartCtrl() {
		$('.timer').show();
		// $('.container').css('background-color: #E1EAE3');
	}

	angular
		.module('app')
		.controller('StartCtrl', StartCtrl);
})();

// save text input somewhere 