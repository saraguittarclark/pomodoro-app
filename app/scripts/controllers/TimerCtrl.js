(function() {
	function TimerCtrl($scope, $interval, $filter) {

		var regularTimer = 60 * 25; // 60s * 25m
		var shortBreakTimer = 60 * 5; // 60s * 5m
		var longBreakTimer = 60 * 30; // 60s * 30 m
		$('#reset-button').hide();

		var pomodoros = 0;
		//when at 4 -> long break timer

		$scope.time = regularTimer;
		var countdown = null;

		$scope.start = function() {
			if (countdown !== null) {
				return;
			}

			if ($scope.time !==0) {
				countdown = $interval(function() {
					$scope.time--;
					if ($scope.time === 0) {
						$scope.stop();
					};
				}, 1000);
			};

			$('#start-button').hide();
			$('#reset-button').show();

		};

		$scope.reset = function() {
			if (countdown !== null) {
				$scope.stop();
			} 
			$scope.time = 60 * 25;
			$scope.start();
		};

		$scope.stop = function() {
			$interval.cancel(countdown);
			countdown = null;
		};
	}

	angular
		.module('app')
		.controller('TimerCtrl', ['$scope', '$interval', '$filter', TimerCtrl]);
})();