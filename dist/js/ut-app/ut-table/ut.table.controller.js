(function(module){

  "use strict";

  var UtTableController = function(tableDataService, searchDataService, $http, $log) {
    var model = this;

    model.hobbyList = [
      'Cooking', 
      'Water Ski', 
      'Running', 
      'Cycling', 
      'Swimming', 
      'Soccer', 
      'Travel', 
      'Gardening', 
      'Baseball'
    ];

    model.LoadHobbyList = [
      'Cooking', 
      'Water Ski', 
      'Running', 
      'Cycling', 
      'Swimming', 
      'Soccer', 
      'Travel', 
      'Gardening', 
      'Baseball',
      'Basketball',
      'Football'
    ];
  
  model.tagAdded = function(tag) {
    model.log.push('Added: ' + tag.text);
  };
  
  model.tagRemoved = function(tag) {
    model.log.push('Removed: ' + tag.text);
  };


    var formFields = [
	    "firstName", "lastName", "company", "address", "city", 
	    "zipCode", "country", "telephone", "rowId", "appId"
    ];

    model.artistList = tableDataService.artistList;

    model.showDataEntryForm = false;

 		model.currentArtist = null;
    model.editedArtist = {};

    model.setEditedArtist = function(artist) {
      model.currentArtist = artist;
      model.editedArtist = angular.copy(model.currentArtist);

      model.showDataEntryForm = true;
      // $log.log("model.editedArtist", model.editedArtist);
    }

 		model.removeArtist = function(artist) {        
      tableDataService.removeArtist(artist);  
      resetForm();
    };

    model.submitForm = function() {
    	if(!model.currentArtist) {
    		createArtist();
    	}
    	else{
    		updateArtist();
    	}

     	resetForm();
    }

    model.cancelForm = function() {
    	resetForm();
    }

		var updateArtist = function()  {
    	formFields.forEach(function(field){
    		model.currentArtist[field] = model.editedArtist[field];
    	});
    }

		var createArtist = function()  {
    	var artist = angular.copy(model.editedArtist);
      tableDataService.addArtist(artist);
    }

    var resetForm = function() {
    	model.currentArtist = null;
    	model. editedArtist = {};
    	// model.artisForm.$setPristine();
    	// model.artisForm.$setUntouched();

      model.showDataEntryForm = false;
    }

  };

  module.controller("UtTableController", UtTableController);

}(angular.module("ut.table")));