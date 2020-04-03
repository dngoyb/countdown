const durationInput = document.querySelector('#duration');
const startInput = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const ascending = document.querySelector('#timeUp');

const timer1 = new Timer(durationInput, startInput, pauseButton, ascending, {
	onStart() {
		console.log('Started');
	},
	onTick() {
		console.log('Time ticking');
	},
	onCompleted() {
		console.log('completed');
	},
});
