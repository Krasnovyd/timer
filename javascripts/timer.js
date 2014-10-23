(function(){
	"use strict";

	var app = angular.module('timersPack', []);

	app.controller('TimerController', function($scope, dateFilter){
		$scope.sorted = "time";
		$scope.timers = [
			{ name: 'Azurite', time: "1" },
			{ name: 'Bloodstone555', time: "555" },
			{ name: 'Zircon', time: "3" }
		];

		$scope.addTimer = function(){
			this.timers.push({name: 'Timer-' + ($scope.timers.length + 1), time: 2});
		}
		$scope.removeTimer = function(timerToRemove){
			var index = this.timers.indexOf(timerToRemove);
			this.timers.splice(index, 1);
		}
		$scope.pauseTimer = function(){
			
		}
		$scope.startTimer = function(timerToStart){
			var index = this.timers.indexOf(timerToStart)
			this.timers[index].time = dateFilter(new Date(), "h:mm:ss");
		}
		$scope.stopTimer = function(){
			
		}
	});

})();


/*	function Timer(elem){
		var timers = elem;
		this.counter;
		this.isStart = false;
		this.timerId;
		this.create();
	}
	Timer.prototype.create = function(){
		var that = this,
			block = document.createElement("DIV"),
			textTimer = document.createElement("P"),
			removeButton = document.createElement("BUTTON"),
			stopButton = document.createElement("BUTTON"),
			startButton = document.createElement("BUTTON"),
			pauseButton = document.createElement("BUTTON");

		block.classList.add("timer-wrapper");
		timers.appendChild(block);
		
		textTimer.innerHTML = "0";
		block.appendChild(textTimer);

		removeButton.innerHTML = "Remove";
		block.appendChild(removeButton);
		removeButton.addEventListener("click", function(){
			that.stopTimer(textTimer);
			timers.removeChild(block);
		});

		stopButton.innerHTML = "Stop";
		block.appendChild(stopButton);
		stopButton.addEventListener("click", function(){
			that.stopTimer(textTimer);
		});

		startButton.innerHTML = "Start";
		block.appendChild(startButton);
		startButton.addEventListener("click", function(){
			that.startTimer(textTimer);
		});

		pauseButton.innerHTML = "Pause";
		block.appendChild(pauseButton);
		pauseButton.addEventListener("click", function(){
			that.pauseTimer();
		});
	}
	Timer.prototype.startTimer = function(elem){
		var that = this;
		if(!that.isStart){
			that.isStart = true;
			that.timerId = setInterval(function(){
				elem.innerHTML = that.counter.getDate();
			}, 1000);
		}
	}
	Timer.prototype.stopTimer = function(elem){
		var that = this;
		clearInterval(that.timerId);
		that.counter = 0;
		elem.innerHTML = that.counter;
		that.isStart = false;
	}
	Timer.prototype.pauseTimer = function(){
		var that = this;
		clearInterval(that.timerId);
		that.isStart = false;
	}

	window.onload = function(){
		var createButton = document.getElementById("create"),
			timers = document.getElementById("timers");

		createButton.addEventListener("click", function(){
			if(timers.childNodes.length < 20){
				var timer = new Timer;
			}
		});
	};
})();*/