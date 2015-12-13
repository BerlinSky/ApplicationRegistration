
(function() {

  "use strict";

  var module = angular.module("ut.app", 
    ["ngAnimate",
    "ui.router",
    "ui.bootstrap",
    "ngMessages", 
    "ngSanitize",
    "ut.applist",
    "ui.select",
    "ut.search", 
    "ut.table", 
    "ut.form", 
    "ut.viz"]);

    var registerUiRoutes = function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state("home", {
          url: "/",
          templateUrl: "template/landing.html"
        })
        .state("registration", {
          url: "/registration",
          templateUrl: "template/app-registration.html",
          controller: "UtSearchController as model"
        })
        .state("applicationList", {
          url: "/applicationList",
          templateUrl: "js/ut-app/applicationList/appList.html",
          controller: "UtSearchController as model"
        })
        .state("applicationList.info", {
          url: "/info",
          templateUrl: "js/ut-app/applicationList/appInfo.html"
        })
        .state("applicationList.pages", {
          url: "/pages",
          templateUrl: "js/ut-app/applicationList/pageList.html"
        })
        .state("applicationList.json", {
          url: "/json",
          templateUrl: "js/ut-app/applicationList/appListJson.html"
        })

       
    };

    module.config(["$stateProvider", "$urlRouterProvider", registerUiRoutes]);

}());