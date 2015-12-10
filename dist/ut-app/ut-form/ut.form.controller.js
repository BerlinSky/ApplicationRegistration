(function(module){

	"use strict";

	var UtFormController = function (formDataService, $location) {
		var model = this;

    model.artist = formDataService.artist;

    model.submit = function () {
      $location.path("/form-outcome");
    };
  };

  module.controller("UtFormController", UtFormController);

}(angular.module("ut.form")));