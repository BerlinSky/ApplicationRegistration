(function(module){

	"use strict";

	var UtVizController = function ($interval) {
		var model = this;

		var time = new Date('2015-01-01 00:00:00 +0100');

		var randPoint = function() {
			var rand = Math.random;
			return {
				'time': new Date(time.toString()),
				'visitors': rand()*100
			};
		}

		model.logs = [ randPoint() ];

		var addLogEntries = function() {
			time.setSeconds(time.getSeconds() + 1);
			model.logs.push(randPoint());

			// console.log('model.logs', model.logs);
		}

		$interval(addLogEntries, 1000);

  };

  module.controller("UtVizController", UtVizController);

}(angular.module("ut.viz")));