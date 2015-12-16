
(function() {

  "use strict";

  var module = angular.module("ut.app", 
    ["ngAnimate",
    "ui.router",
    "ui.bootstrap",
    "ngMessages", 
    "ngSanitize",
    "ut.applist",
    "ut.pageList", 
    "ui.select",
    // "ut.search", 
    "ut.table", 
    "ut.form", 
    "ut.viz",
    "ut.dataService",
    "ut.applicationResourceMock"]);

  module.config(function ($provide) {
      $provide.decorator("$exceptionHandler",
          ["$delegate",
              function ($delegate) {
                  return function (exception, cause) {
                      exception.message = "Please contact the Help Desk! \n Message: " +
                                                              exception.message;
                      $delegate(exception, cause);
                      alert(exception.message);
                  };
              }]);
  });

  var registerUiRoutes = function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state("home", {
      url: "/",
      templateUrl: "template/landing.html"
    })
    // .state("registration", {
    //   url: "/registration",
    //   templateUrl: "template/app-registration.html",
    //   controller: "UtSearchController as model"
    // })
    .state("applicationList", {
      url: "/applicationList",
      templateUrl: "js/ut-app/applicationList/appList.html",
      controller: "UtAppListController as model"
    })
    .state("applicationList.info", {
      url: "/info",
      templateUrl: "js/ut-app/applicationList/appInfo.html"
    })
    .state("applicationList.pages", {
      url: "/pages",
      templateUrl: "js/ut-app/applicationPageList/pageList.html",
      controller: "UtPageListController as modelTable"
    })
    .state("applicationList.json", {
      url: "/json",
      templateUrl: "js/ut-app/applicationPageList/pageListJson.html",
      controller: "UtPageListController as modelTable"
    })
    .state("applicationList.form", {
      url: "/json",
      templateUrl: "js/ut-app/applicationList/appForm.html"
    })
  };

  module.config(["$stateProvider", "$urlRouterProvider", registerUiRoutes]);

}());