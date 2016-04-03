(function() {
	function FaqCtrl() {
		$('.timer').hide();
	}

	angular
		.module('app')
		.controller('FaqCtrl', FaqCtrl);
})();