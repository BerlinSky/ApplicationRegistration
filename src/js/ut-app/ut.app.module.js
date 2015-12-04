
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

    // var routes = [
    //   { url: "/", settings: { templateUrl: "template/landing.html" } },
    //   { url: "/registration", settings: { templateUrl: "template/app-registration.html" } }
    // ];

    // var registerRoutes = function($routeProvider) {
    //     routes.forEach(function(route) {
    //         $routeProvider.when(route.url, route.settings);
    //     });
    //     $routeProvider.otherwise({ redirectTo: routes[0].url });
    // };

		// module.config(registerRoutes);

    var registerUiRoutes = function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");

      $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "template/landing.html"
        })
                    // // Products
                    // .state("productList", {
                    //     url: "/products",
                    //     templateUrl: "app/products/productListView.html",
                    //     controller: "ProductListCtrl as vm"
                    // })
                    // .state("productEdit", {
                    //     abstract: true,
                    //     url: "/products/edit/:productId",
                    //     templateUrl: "app/products/productEditView.html",
                    //     controller: "ProductEditCtrl as vm",
                    //     resolve: {
                    //         productResource: "productResource",

                    //         product: function (productResource, $stateParams) {
                    //             var productId = $stateParams.productId;
                    //             return productResource.get({ productId: productId }).$promise;
                    //         }
                    //     }
                    // })
                    // .state("productEdit.info", {
                    //     url: "/info",
                    //     templateUrl: "app/products/productEditInfoView.html"
                    // })
                    // .state("productEdit.price", {
                    //     url: "/price",
                    //     templateUrl: "app/products/productEditPriceView.html"
                    // })
                    // .state("productEdit.tags", {
                    //     url: "/tags",
                    //     templateUrl: "app/products/productEditTagsView.html"
                    // })
                    // .state("productDetail", {
                    //     url: "/products/:productId",
                    //     templateUrl: "app/products/productDetailView.html",
                    //     controller: "ProductDetailCtrl as vm",
                    //     resolve: {
                    //         productResource: "productResource",

                    //         product: function (productResource, $stateParams) {
                    //             var productId = $stateParams.productId;
                    //             return productResource.get({ productId: productId }).$promise;
                    //         }
                    //     }
                    // })
                    // .state("priceAnalytics", {
                    //     url: "/priceAnalytics",
                    //     templateUrl:"app/prices/priceAnalyticsView.html",
                    //     controller: "PriceAnalyticsCtrl",
                    //     resolve: {
                    //         productResource: "productResource",

                    //         products: function (productResource) {
                    //             return productResource.query(function(response) {
                    //                     // no code needed for success
                    //                 },
                    //                 function(response) {
                    //                     if (response.status == 404) {
                    //                         alert("Error accessing resource: " +
                    //                             response.config.method + " " +response.config.url);
                    //                     } else {
                    //                         alert(response.statusText);
                    //                     }
                    //                 }).$promise;

                    //         }
                    //     }
                    // })

    };

    module.config(["$stateProvider", "$urlRouterProvider", registerUiRoutes]);

}());