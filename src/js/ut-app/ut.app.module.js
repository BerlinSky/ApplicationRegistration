
(function() {

  "use strict";

  var module = angular.module("ut.app", ["ngRoute", "ngAnimate", "ngMessages", "ut.search", "ut.table", "ut.form"]);

    var routes = [
      { url: "/", settings: { templateUrl: "template/landing.html" } },
      { url: "/registration", settings: { templateUrl: "template/app-registration.html" } }
    ];

    var registerRoutes = function($routeProvider) {
        routes.forEach(function(route) {
            $routeProvider.when(route.url, route.settings);
        });
        $routeProvider.otherwise({ redirectTo: routes[0].url });
    };

		module.config(registerRoutes);

}());