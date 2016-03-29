(function() {
	function config($stateProvider, $locationProvider) {
		$locationProvider
			.html5mode({
				enabled: true,
				requireBase: false
			});

		$stateProvider
			.state('start', {
				url: '/',
				controller: 'StartCtrl as start',
				templateUrl: '/templates/start.html'
			})

			.state('working', {
				url: '/working',
				controller: 'WorkingCtrl as working',
				templateUrl: '/templates/working.html'
			})
			.state('finished', {
				url: '/finished',
				controller: 'FinishedCtrl as finished',
				templateUrl: '/templates/finished.html'
			})
			.state('break', {
				url: '/break',
				controller: 'BreakCtrl as break',
				templateUrl: '/templates/break.html'
			});
	}

	angular
		.module('app', ['firebase', 'ui.router'])
		.config(config);

})();


