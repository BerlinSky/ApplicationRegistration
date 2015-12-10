(function(module){

	"use strict";

	var utVizService = function() {
    return d3;
  }

  module.factory("d3", utVizService);

}(angular.module("ut.viz")));