(function() {
	function TimerCtrl($scope, $interval, $filter) {

		var regularTimer = 60 * 25; // 60s * 25m
		var shortBreakTimer = 60 * 5; // 60s * 5m
		var longBreakTimer = 60 * 30; // 60s * 30 m
		var resetButton = $('#reset-button');
		var startButton = $('#start-button');
		var breakButton = $('#break-button');

		resetButton.hide();
		breakButton.hide();

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

			startButton.hide();
			resetButton.show();
			breakButton.show();

			pomodoros++;
		};

		$scope.reset = function() {
			breakButton.hide();
			if (countdown !== null) {
				$scope.stop();
			} 
			$scope.time = 60 * 25;
			$scope.start();

			pomodoros++;
		};

		$scope.stop = function() {
			$interval.cancel(countdown);
			countdown = null;
		};

		$scope.break = function() {
			if (pomodoros < 4) {
				$scope.time = shortBreakTimer;
				$scope.start();
				breakButton.hide();
			} else if (pomodoros >= 4) {
				$scope.time = longBreakTimer;
				$scope.start();
				breakButton.hide();
				pomodoros = 0;
				startButton.show();
			}
		};
	}

	angular
		.module('app')
		.controller('TimerCtrl', ['$scope', '$interval', '$filter', TimerCtrl]);
})();