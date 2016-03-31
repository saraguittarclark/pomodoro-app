(function() {
	function TimerCtrl($scope, $timeout, $filter) {
		//DEMO TIME AMOUNT
		$scope.minutes = 24;
		$scope.seconds = 59;

		$scope.time = 25;
		var countdown;

		$scope.start = function() {
			if ($scope.time !==0) {
				countdown = $timeout(function() {
					$scope.time--;
					if ($scope.time === 0) {
						$scope.stop();
					};
				$scope.start();
				}, 1000);
			} 
			//reset will do this
			else {
				$scope.time = 25;
				$scope.start();
			};
		};

		$scope.reset = function() {
			if (countdown !== undefined) {
				$scope.stop();
				//DEMO TIME AMOUNT
				$scope.time = 25;
				$scope.start();
			} else {
				//functional
				$scope.time = 25;
				$scope.start();
			}
			//visible ONLY after start button is hidden
		};

		//convert seconds to minutes/seconds
		//make sound at 0
		//figure out button text
		//fix double click issue on button - show/hide

		$scope.stop = function() {
			$timeout.stop(countdown);
		};
	}

	angular
		.module('app')
		.controller('TimerCtrl', ['$scope', '$timeout', '$filter', TimerCtrl]);
})();