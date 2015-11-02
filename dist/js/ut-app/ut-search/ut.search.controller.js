(function(module){
  "use strict";

  var UtSearchController = function(searchDataService, tableDataService, $http, $log) {
    var model = this;

    model.applicationList = {};
    model.formEditMode = false;

    model.applicationList = searchDataService.applicationList;

    model.clearFilter = function() {
      if (model.search) {
         model.search = [];
      }
    }

    model.enableEditMode = function() {
      model.formEditMode = true;
    }

    model.disableEditMode = function() {
      model.formEditMode = false;
    }

    model.submitForm = function() {
      var artist = {
        "appId": "2001",
        "firstName": model.artist.firstName,
        "lastName": model.artist.lastName,
        "company": model.artist.company,
        "address": model.artist.address,
        "city": model.artist.city,
        "zipCode": model.artist.zipCode,
        "country": model.artist.country,
        "telephone": model.artist.telephone,
        "rowId": "12345678911"
      };

      tableDataService.artistList.push(artist);

      model.formEditMode = false;
    }

    // model.addArtist = function() {
    //   var artist = {};
    //   artist.firstName = "ABC Company";
    //   tableDataService.addArtist(artist);
    // }
  };

  module.controller("UtSearchController", UtSearchController);

}(angular.module("ut.search")));
