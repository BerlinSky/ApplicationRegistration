
(function() {

  "use strict";

  var module = angular.module("ut.app", 
    ["ngRoute", 
    "ngAnimate", 
    "ui.router",
    "ngMessages", 
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

        // Registration  
        .state("registration", {
            url: "/registration",
            templateUrl: "template/app-registration.html",
            controller: "UtSearchController as model"
        })
    };

    module.config(["$stateProvider", "$urlRouterProvider", registerUiRoutes]);

}());