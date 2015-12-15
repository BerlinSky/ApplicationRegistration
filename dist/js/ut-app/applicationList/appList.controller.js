(function(module){
  "use strict";

  var UtAppListController = function(applicationResource) {
    var model = this;

    applicationResource.query(function(data) {
        model.applicationList = data;
    });
  }; 

  // var UtAppListController = function(searchDataService) {
  //   var model = this;

  //   model.applicationList = {};
  //   model.applicationList = searchDataService.applicationList;
   
  // };

  module.controller("UtAppListController", ["applicationResource", UtAppListController]);

}(angular.module("ut.applist")));
