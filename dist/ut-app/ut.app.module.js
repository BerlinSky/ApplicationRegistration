
(function() {

  "use strict";

  var module = angular.module("ut.app", 
    ["ngAnimate",
    "ui.router",
    "ngMessages", 
    "ngSanitize",
    "ut.app.list",
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
          templateUrl: "app/applicationList/appList.html",
          controller: "UtSearchController as model"
        })
       .state("registeredApp", {
          abstract: true,
          url: "/applicationList/registered/:appId",
          templateUrl: "app/applicationList/appList.html",
          controller: "UtSearchController as model"
       })
       .state("registeredApp.info", {
          url: "/info",
          templateUrl: "app/applicationList/appInfo.html"
       })
       .state("registeredApp.pages", {
          url: "/pages",
          templateUrl: "app/applicationList/appPageList.html"
       })
       .state("registeredApp.json", {
          url: "/json",
          templateUrl: "app/applicationList/appListJson.html"
       })

        //  // Registration  
        // .state("registration", {
        //     url: "/registration",
        //     templateUrl: "template/app-registration.html",
        //     controller: "UtSearchController as model"
        // })

        //  // Registration  
        // .state("registration", {
        //     url: "/registration",
        //     templateUrl: "template/app-registration.html",
        //     controller: "UtSearchController as model"
        // })
    };

    module.config(["$stateProvider", "$urlRouterProvider", registerUiRoutes]);

}());