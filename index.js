const durationInput = document.querySelector('#duration');
const startInput = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const ascending = document.querySelector('#timeUp');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * Math.PI * 2;
circle.setAttribute('stroke-dasharray', perimeter);

let duration = 0;

const timer1 = new Timer(durationInput, startInput, pauseButton, ascending, {
	onStart(totalDuration) {
		duration = totalDuration;
	},
	onTick(timeRemaining) {
		circle.setAttribute(
			'stroke-dashoffset',
			(perimeter * timeRemaining) / duration - perimeter,
		);
	},
	onCompleted() {},
});
