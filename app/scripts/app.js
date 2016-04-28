(function() {
	function config($stateProvider, $locationProvider) {
	     $locationProvider
	         .html5Mode({
	             enabled: true,
	             requireBase: false
         });

		$stateProvider
			.state('start', {
				url: '/',
				controller: 'StartCtrl as start',
				templateUrl: '/templates/start.html'
			})

			.state('faq', {
				url: '/faq',
				controller: 'FaqCtrl as faq',
				templateUrl: '/templates/faq.html'
			});
	}

	angular
		.module('app', ['ui.router', 'firebase'])
		.config(config);

})();


