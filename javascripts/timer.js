(function(){
	"use strict";

	var app = angular.module("timersPack", []);

	app.controller("TimerController", ["$scope", "$interval", "dateFilter",
		function($scope, $interval, dateFilter){
			var that = this;
			$scope.sorting = "";
			this.timers = [];

			this.doSort = function(){
				$scope.sorting = "time";
			}
			this.addTimer = function(){
				that.timers.push({name: "Timer", time: new Date(0,0,0).getMilliseconds()});
			}
			this.removeTimer = function(timerToRemove){
				var index = that.timers.indexOf(timerToRemove);
				$interval.cancel(that.timers[index].timerId);
				that.timers.splice(index, 1);
			}
			this.startTimer = function(timerToStart){
				var index = this.timers.indexOf(timerToStart),
					startTime = that.timers[index].time === 0 ? Date.now() : Date.now() - that.timers[index].time;
				if(!that.timers[index].timerId){
					that.timers[index].timerId = $interval(function(){
						that.timers[index].time = Date.now() - startTime;
					}, 1000);
				}	
			}
			this.pauseTimer = function(timerToPause){
				var index = this.timers.indexOf(timerToPause);
				$interval.cancel(that.timers[index].timerId);
				that.timers[index].timerId = undefined;
			}
			this.stopTimer = function(timerToStop){
				var index = this.timers.indexOf(timerToStop);
				$interval.cancel(that.timers[index].timerId);
				that.timers[index].time = new Date(0,0,0).getMilliseconds();
				that.timers[index].timerId = undefined;
			}
	}]);

})();