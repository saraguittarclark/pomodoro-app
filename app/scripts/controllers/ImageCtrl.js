(function() {
	function ImageCtrl() {
		var picturesDone = $('.done-pic');
		var picturesDoneLength = picturesDone.length;
		var picturesBreak = $('.on-break-pic');
		var picturesBreakLength = picturesBreak.length;
		picturesDone.hide();
		picturesBreak.hide();
	}
// <h5>“The three great essentials to achieve anything worthwhile are, first, hard work; 
// second, stick-to-itiveness; third, common sense.” ― Thomas A. Edison</h5>
// 	<h5>“Do, or do not. There is no try.”― Yoda</h5>
//maybe nest inside the timercontroller instead so variables
//can be accessed easily? need access to timer time amount

	angular
		.module('app')
		.controller('ImageCtrl', ImageCtrl);
})();