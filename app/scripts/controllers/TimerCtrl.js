(function() {
	function TimerCtrl($scope, $interval, $filter) {

		var regularTimer = 60 * 25; // 60s * 25m
		var shortBreakTimer = 60 * 5; // 60s * 5m
		var longBreakTimer = 60 * 30; // 60s * 30 m
		var pomodorosPerLongBreak = 4; //4

		var motivation = "";
		var quote = "";

		var startButton = $('#start-button');
		var breakButton = $('#break-button');
		var onBreak = false;

		var picturesDone = $('.done-pic'); // array-list of DOM class
		var picturesBreak = $('.on-break-pic'); //array-list of DOM class

		var breakImageIndex = 0;
		var doneImageIndex = 0;

		var breakQuotes = [ 
			"Rembrandt van Rijn is cheering for you.",
			"Vincent van Gogh is judging you. Silently.",
			"Judith Leyster wants you to keep it up!"
		];

		var motivationQuotes = [
			"Hooray!",
			"Great Job!"
		];

		picturesDone.hide(); // hide all pictures on load
		picturesBreak.hide(); // hide all pictures on load

		breakButton.hide(); // hide break button on load

		var pomodoros = 0;

		$scope.time = regularTimer;

		var countdown = null;

		var mySound = new buzz.sound("/assets/sounds/dingaling.mp3", {
  			preload: true
		});

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
				mySound.play();

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

					picturesDone.eq(doneImageIndex).show();
					$scope.motivation = motivationQuotes[doneImageIndex];

					doneImageIndex++;

					if (doneImageIndex >= picturesDone.length) {
						doneImageIndex = 0;
					};
				}
			};
		}

		$scope.start = function() {
			$scope.motivation = "";
			$scope.quote = "";
			$('.container').removeClass('onBreak');
			$('.container').removeClass('finished');
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
			$scope.motivation = "";
			$('.container').removeClass('finished');
			$('.container').addClass('onBreak');
			onBreak = true;

			//TODO show watchy image
			picturesDone.hide();
			if (pomodoros < pomodorosPerLongBreak) {
				$scope.time = shortBreakTimer;
			} else {
				$scope.time = longBreakTimer;
				pomodoros = 0; // reset pomodoros to 0 after long break
			}
			countdown = $interval(tickFunction, 1000);
			startButton.hide();
			breakButton.hide();

			picturesBreak.eq(breakImageIndex).show();
			$scope.quote = breakQuotes[breakImageIndex];

			breakImageIndex++;
			if (breakImageIndex >= picturesBreak.length) {
				breakImageIndex = 0;
			}
		};
	}

	angular
		.module('app')
		.controller('TimerCtrl', ['$scope', '$interval', '$filter', TimerCtrl]);
})();