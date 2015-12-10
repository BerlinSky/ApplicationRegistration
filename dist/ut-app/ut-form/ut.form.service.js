(function(module) {

  "use strict";

  var formDataService = function() {

    var artist = {
      "appId": "",
      "firstName": "",
      "lastName": "",
      "company": "",
      "address": "",
      "city": "",
      "zipCode": "",
      "country": "",
      "telephone": "",
      "rowId": ""
    };

    return {
      artist: artist
    };
  };

  module.factory("formDataService", formDataService);

}(angular.module("ut.form")));
