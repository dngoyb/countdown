class Timer {
	constructor(durationInput, startButton, pauseButton, ascending) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		this.ascending = ascending;

		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
	}

	start = () => {
		this.tick();
		this.interval = setInterval(this.tick, 1000);
	};
	pause = () => {
		clearInterval(this.interval);
	};
	tick = () => {
		if (this.ascending.checked) {
			this.timeRemaining = this.timeRemaining + 1;
		} else {
			if (this.timeRemaining > 0) {
				this.timeRemaining = this.timeRemaining - 1;
			} else {
				this.pause();
			}
		}
	};

	get timeRemaining() {
		return parseFloat(this.durationInput.value);
	}
	set timeRemaining(time) {
		this.durationInput.value = time;
	}
}

const durationInput = document.querySelector('#duration');
const startInput = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const ascending = document.querySelector('#timeUp');
console.log(ascending);

const timer1 = new Timer(durationInput, startInput, pauseButton, ascending);
