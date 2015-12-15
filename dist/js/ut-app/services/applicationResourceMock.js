(function () {
    "use strict";

    var app = angular
                .module("ut.applicationResourceMock",
                        ["ngMockE2E"]);

    app.run(function ($httpBackend) {
      var applicationList = [
       {
          "appId": 1000,
          "appName": "Ipsum Dolor LLP",
          "appCode": 100,
          "subAppName": "Lenore"
        },
        {
          "appId": 1001,
          "appName": "Sem Molestie Sodales PC",
          "appCode": 101,
          "subAppName": "Gannon"
        },
        {
          "appId": 1002,
          "appName": "Mauris Blandit Enim Corporation",
          "appCode": 102,
          "subAppName": "Willa"
        },
        {
          "appId": 1003,
          "appName": "Tincidunt Corporation",
          "appCode": 103,
          "subAppName": "Burke"
        },
        {
          "appId": 1007,
          "appName": "Cras Pellentesque Ltd",
          "appCode": 107,
          "subAppName": "Marah"
        },
        {
          "appId": 1008,
          "appName": "Sapien Incorporated",
          "appCode": 108,
          "subAppName": "Jessamine"
        },
        {
          "appId": 1009,
          "appName": "Tellus Faucibus Corp.",
          "appCode": 109,
          "subAppName": "Vernon"
        },
        {
          "appId": 1010,
          "appName": "Nunc Company",
          "appCode": 110,
          "subAppName": "Plato"
        },
        {
          "appId": 1011,
          "appName": "Risus Quis Diam Industries",
          "appCode": 111,
          "subAppName": "Daria"
        },
        {
          "appId": 1012,
          "appName": "Eleifend Non Limited",
          "appCode": 112,
          "subAppName": "Porter"
        },
        {
          "appId": 1013,
          "appName": "Feugiat Tellus Lorem Consulting",
          "appCode": 113,
          "subAppName": "Nicole"
        },
        {
          "appId": 1014,
          "appName": "A Inc.",
          "appCode": 114,
          "subAppName": "Belle"
        },
        {
          "appId": 1015,
          "appName": "Nibh Company",
          "appCode": 115,
          "subAppName": "John"
        },
        {
          "appId": 1016,
          "appName": "At Fringilla Purus Inc.",
          "appCode": 116,
          "subAppName": "Basia"
        },
        {
          "appId": 1017,
          "appName": "Primis Limited",
          "appCode": 117,
          "subAppName": "Kennan"
        },
        {
          "appId": 1018,
          "appName": "Erat LLC",
          "appCode": 118,
          "subAppName": "Ruth"
        },
        {
          "appId": 1019,
          "appName": "Eu LLC",
          "appCode": 119,
          "subAppName": "Dana"
        },
        {
          "appId": 1020,
          "appName": "Venenatis Ltd",
          "appCode": 120,
          "subAppName": "Ori"
        },
        {
          "appId": 1021,
          "appName": "Mauris Integer Institute",
          "appCode": 121,
          "subAppName": "Dalton"
        },
        {
          "appId": 1022,
          "appName": "Ultrices Iaculis Limited",
          "appCode": 122,
          "subAppName": "Rhea"
        },
        {
          "appId": 1023,
          "appName": "Ornare Elit Elit Institute",
          "appCode": 123,
          "subAppName": "Joan"
        },
        {
          "appId": 1024,
          "appName": "Rutrum Inc.",
          "appCode": 124,
          "subAppName": "Raven"
        },
        {
          "appId": 1025,
          "appName": "Velit Sed Malesuada Institute",
          "appCode": 125,
          "subAppName": "Quentin"
        },
        {
          "appId": 1026,
          "appName": "Tempus Scelerisque LLC",
          "appCode": 126,
          "subAppName": "Joelle"
        },
        {
          "appId": 1027,
          "appName": "Feugiat Non Lobortis Corporation",
          "appCode": 127,
          "subAppName": "Gloria"
        },
        {
          "appId": 1028,
          "appName": "Mollis Phasellus Limited",
          "appCode": 128,
          "subAppName": "Mannix"
        },
        {
          "appId": 1029,
          "appName": "Eu LLP",
          "appCode": 129,
          "subAppName": "Macaulay"
        },
        {
          "appId": 1030,
          "appName": "Elementum Inc.",
          "appCode": 130,
          "subAppName": "Edward"
        },
        {
          "appId": 1031,
          "appName": "Mauris Corporation",
          "appCode": 131,
          "subAppName": "Jayme"
        },
        {
          "appId": 1032,
          "appName": "Urna Vivamus LLC",
          "appCode": 132,
          "subAppName": "Harlan"
        },
        {
          "appId": 1033,
          "appName": "Eget Lacus Limited",
          "appCode": 133,
          "subAppName": "Emery"
        },
        {
          "appId": 1034,
          "appName": "Non LLC",
          "appCode": 134,
          "subAppName": "Igor"
        },
        {
          "appId": 1035,
          "appName": "Sed Malesuada Augue Consulting",
          "appCode": 135,
          "subAppName": "Burton"
        },
        {
          "appId": 1036,
          "appName": "Malesuada Ut LLC",
          "appCode": 136,
          "subAppName": "Quyn"
        },
        {
          "appId": 1037,
          "appName": "Elementum Sem Vitae PC",
          "appCode": 137,
          "subAppName": "Kermit"
        }
      ];

      var applicationUrl = "/api/applicationList"

      $httpBackend.whenGET(applicationUrl).respond(applicationList);

      var editingRegex = new RegExp(applicationUrl + "/[0-9][0-9]*", '');
      $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
          var application = {"appId": 0};
          var parameters = url.split('/');
          var length = parameters.length;
          var id = parameters[length - 1];

          if (id > 0) {
              for (var i = 0; i < applicationList.length; i++) {
                  if (applicationList[i].appId == id) {
                      application = applicationList[i];
                      break;
                  }
              };
          }
          return [200, application, {}];
      });

      var pageUrl = "/api/pageList"

        $httpBackend.whenPOST(pageUrl).respond(function (method, url, data) {
          var page = angular.fromJson(data);

          if (!page.pageId) {
              // new product Id
              page.pageId = products[pageList.length - 1].pageId + 1;
              pageList.push(page);
          }
          else {
              // Updated page
              for (var i = 0; i < pageList.length; i++) {
                  if (pageList[i].pageId == page.pageId) {
                      pageList[i] = page;
                      break;
                  }
              };
          }
          return [200,page, {}];
        });

        // Pass through any requests for application files
        $httpBackend.whenGET().passThrough();

    })
}());
