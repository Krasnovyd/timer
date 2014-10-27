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
				that.timers.push({name: "Timer", time: dateFilter(new Date(0,0,0), "mm:ss")});
			}
			this.removeTimer = function(timerToRemove){
				var index = that.timers.indexOf(timerToRemove);
				$interval.cancel(that.timers[index].timerId);
				that.timers.splice(index, 1);
			}
			this.startTimer = function(timerToStart){
				var index = this.timers.indexOf(timerToStart),
					startTime = new Date();
				if(!that.timers[index].timerId){
					that.timers[index].timerId = $interval(function(){
						that.timers[index].time = dateFilter((new Date() - startTime), "mm:ss");
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
				that.timers[index].time = dateFilter(new Date(0,0,0), "mm:ss");
				that.timers[index].timerId = undefined;
			}
	}]);

})();