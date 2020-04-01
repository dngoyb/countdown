class Timer {
	constructor(durationInput, startButton, pauseButton) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;

		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
	}

	start() {
		console.log(this);
	}
	pause() {
		console.log('I am paused');
	}
	tick() {}
}

const durationInput = document.querySelector('#duration');
const startInput = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer1 = new Timer(durationInput, startInput, pauseButton);
