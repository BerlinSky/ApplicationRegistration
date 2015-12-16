(function(module){
  "use strict";

  var UtAppListController = function(applicationResource) {
    var model = this;

    applicationResource.query(function(data) {
        model.applicationList = data;
    });
  }; 

  module.controller("UtAppListController", ["applicationResource", UtAppListController]);

}(angular.module("ut.applist")));
