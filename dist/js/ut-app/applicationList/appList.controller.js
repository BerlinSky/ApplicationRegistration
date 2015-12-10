(function(module){
  "use strict";

  var UtAppListController = function(searchDataService) {
    var model = this;

    model.applicationList = {};
    model.applicationList = searchDataService.applicationList;
   
  };

  module.controller("UtAppListController", UtAppListController);

}(angular.module("ut.applist")));
