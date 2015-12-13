
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

       // .state("registeredApp", {
       //    abstract: true,
       //    url: "/applicationList/registered",
       //    templateUrl: "js/ut-app/applicationList/appList.html",
       //    controller: "UtAppListController as model"
       // })
       // .state("registeredApp.info", {
       //    url: "/info",
       //    templateUrl: "js/ut-app/applicationList/appInfo.html"
       // })
       // .state("registeredApp.pages", {
       //    url: "/pages",
       //    templateUrl: "js/ut-app/applicationList/pageList.html"
       // })
       // .state("registeredApp.json", {
       //    url: "/json",
       //    templateUrl: "js/ut-app/applicationList/appListJson.html"
       // })


 // .state('home', {
 //        url: '/home',
 //        templateUrl: 'partial-home.html'
 //    })

 //    // nested list with custom controller
 //    .state('home.list', {
 //        url: '/list',
 //        templateUrl: 'partial-home-list.html',
 //        controller: function($scope) {
 //            $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
 //        }
 //    })

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