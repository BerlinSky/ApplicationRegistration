(function() {

	"use strict";

	var registerTemplate = function($templateCache, $http) {
	  $http.get('template/message.html')
		  .then(function(response) {
		    $templateCache.put('form-messages', response.data); 
		  })
  };

  var module = angular.module("ut.form", []);

  module.run(registerTemplate);

}());