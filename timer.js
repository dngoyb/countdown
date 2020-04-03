class Timer {
	constructor(durationInput, startButton, pauseButton, ascending, callbacks) {
		this.durationInput = durationInput;
		this.startButton = startButton;
		this.pauseButton = pauseButton;
		this.ascending = ascending;

		if (callbacks) {
			this.onStart = callbacks.onStart;
			this.onTick = callbacks.onTick;
			this.onCompleted = callbacks.onCompleted;
		}

		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
	}

	start = () => {
		this.tick();
		this.interval = setInterval(this.tick, 1000);
		if (this.onStart) {
			this.onStart();
		}
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
				if (this.onTick) {
					this.onTick();
				}
			} else {
				this.pause();
				if (this.onCompleted) {
					this.onCompleted();
				}
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
