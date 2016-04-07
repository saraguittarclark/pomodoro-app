(function() {
	function TimerCtrl($scope, $interval, $filter) {

		var regularTimer = 60 * .05; // 60s * 25m
		var shortBreakTimer = 60 * .05; // 60s * 5m
		var longBreakTimer = 60 * 0.1; // 60s * 30 m
		var pomodorosPerLongBreak = 4; //4

		var startButton = $('#start-button');
		var breakButton = $('#break-button');
		var onBreak = false;

		var picturesDone = $('.done-pic'); // array-list of DOM class
		var picturesBreak = $('.on-break-pic'); //array-list of DOM class
		console.log(picturesDone instanceof HTMLCollection);
		console.log(picturesDone instanceof NodeList);

		picturesDone.hide(); // hide all pictures on load
		picturesBreak.hide(); // hide all pictures on load

		breakButton.hide(); // hide break button on load

		var pomodoros = 0;

		$scope.time = regularTimer;

		var countdown = null;

		/** 
		@function Start
		@desc if countdown is not active, do nothing OR decrement time with interval
		then stop at 0, show break button
		**/

		var tickFunction = function() {
			//used for both work timer and break timer
			$scope.time--;
			if ($scope.time === 0) {
				$scope.stop();

				if(onBreak) {
					//break just ended
					//only choice from here is to restart session
					onBreak = false;
					startButton.show();
					breakButton.hide();
				} else {
					//work session just ended
					//choices are restart & break
					startButton.show();
					breakButton.show();
					pomodoros++;
					$('.container').addClass('finished');
					//TODO show success image
					picturesDone.show();
				}

			};
		}

		$scope.start = function() {
			$('.container').removeClass('onBreak');
			picturesDone.hide();
			picturesBreak.hide();

			$scope.time = regularTimer;
			countdown = $interval(tickFunction, 1000);
			startButton.hide();
			breakButton.hide();
		};


		/**
		@function Stop
		@desc cancel the countdown and reset to null
		**/

		$scope.stop = function() {
			$interval.cancel(countdown);
			countdown = null;
		};

		/**
		@function Break
		@desc if pomodoros/sessions are 4 (or over) are longBreak, otherwise shortBreak
		**/

		$scope.break = function() {
			$('.container').removeClass('finished');
			$('.container').addClass('onBreak');
			onBreak = true;

			//TODO show watchy image
			picturesDone.hide();
			picturesBreak.show();
			if (pomodoros < pomodorosPerLongBreak) {
				$scope.time = shortBreakTimer;
			} else {
				$scope.time = longBreakTimer;
				pomodoros = 0; // reset pomodoros to 0 after long break
			}
			countdown = $interval(tickFunction, 1000);
			startButton.hide();
			breakButton.hide();
		};

		var imageCycle = function(list) {
			list.hide();
			for (var i = 0; i < list.length; i++) {
				var image = list[i];
				image.show();
			}
		};
	}

	//start (working) break stopped

	angular
		.module('app')
		.controller('TimerCtrl', ['$scope', '$interval', '$filter', TimerCtrl]);
})();