(function(module) {

  "use strict";

  var searchDataService = function($http) {

    var applicationList = 
  [
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
    "appId": 1004,
    "appName": "Consectetuer LLP",
    "appCode": 104,
    "subAppName": "Quon"
  },
  {
    "appId": 1005,
    "appName": "Malesuada Id Inc.",
    "appCode": 105,
    "subAppName": "Ulric"
  },
  {
    "appId": 1006,
    "appName": "Ut Corp.",
    "appCode": 106,
    "subAppName": "Ocean"
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
  },
  {
    "appId": 1038,
    "appName": "Aliquam Auctor Velit Industries",
    "appCode": 138,
    "subAppName": "Glenna"
  },
  {
    "appId": 1039,
    "appName": "Ut Inc.",
    "appCode": 139,
    "subAppName": "Carter"
  },
  {
    "appId": 1040,
    "appName": "Viverra Corp.",
    "appCode": 140,
    "subAppName": "Jamalia"
  },
  {
    "appId": 1041,
    "appName": "Ornare Elit Elit LLC",
    "appCode": 141,
    "subAppName": "Daniel"
  },
  {
    "appId": 1042,
    "appName": "Tristique Neque Venenatis Corporation",
    "appCode": 142,
    "subAppName": "Quinn"
  },
  {
    "appId": 1043,
    "appName": "Proin Ultrices Consulting",
    "appCode": 143,
    "subAppName": "Illana"
  },
  {
    "appId": 1044,
    "appName": "Non PC",
    "appCode": 144,
    "subAppName": "Timon"
  },
  {
    "appId": 1045,
    "appName": "Varius Ultrices PC",
    "appCode": 145,
    "subAppName": "Harlan"
  },
  {
    "appId": 1046,
    "appName": "Ut Associates",
    "appCode": 146,
    "subAppName": "Ella"
  },
  {
    "appId": 1047,
    "appName": "Sodales PC",
    "appCode": 147,
    "subAppName": "Octavius"
  },
  {
    "appId": 1048,
    "appName": "Nec Limited",
    "appCode": 148,
    "subAppName": "Violet"
  },
  {
    "appId": 1049,
    "appName": "Nunc Risus Company",
    "appCode": 149,
    "subAppName": "Wynter"
  },
  {
    "appId": 1050,
    "appName": "Pharetra PC",
    "appCode": 150,
    "subAppName": "Eric"
  },
  {
    "appId": 1051,
    "appName": "Eleifend Corporation",
    "appCode": 151,
    "subAppName": "Julie"
  },
  {
    "appId": 1052,
    "appName": "Integer Mollis Integer Industries",
    "appCode": 152,
    "subAppName": "Jaquelyn"
  },
  {
    "appId": 1053,
    "appName": "Vivamus Sit Amet LLP",
    "appCode": 153,
    "subAppName": "Tamara"
  },
  {
    "appId": 1054,
    "appName": "In Condimentum Donec Industries",
    "appCode": 154,
    "subAppName": "Eleanor"
  },
  {
    "appId": 1055,
    "appName": "Sem Mollis Incorporated",
    "appCode": 155,
    "subAppName": "Thor"
  },
  {
    "appId": 1056,
    "appName": "Lorem LLP",
    "appCode": 156,
    "subAppName": "Iliana"
  },
  {
    "appId": 1057,
    "appName": "Tempor Erat LLC",
    "appCode": 157,
    "subAppName": "Simon"
  },
  {
    "appId": 1058,
    "appName": "Sed Diam Lorem Limited",
    "appCode": 158,
    "subAppName": "Buffy"
  },
  {
    "appId": 1059,
    "appName": "Rutrum Fusce Limited",
    "appCode": 159,
    "subAppName": "Magee"
  },
  {
    "appId": 1060,
    "appName": "Eget Limited",
    "appCode": 160,
    "subAppName": "Kyra"
  },
  {
    "appId": 1061,
    "appName": "Nam Ac Institute",
    "appCode": 161,
    "subAppName": "Yasir"
  },
  {
    "appId": 1062,
    "appName": "Ullamcorper Eu PC",
    "appCode": 162,
    "subAppName": "Teegan"
  },
  {
    "appId": 1063,
    "appName": "Nullam Ut Corporation",
    "appCode": 163,
    "subAppName": "Yuli"
  },
  {
    "appId": 1064,
    "appName": "Eget Associates",
    "appCode": 164,
    "subAppName": "Jolene"
  },
  {
    "appId": 1065,
    "appName": "Sit Amet Lorem Consulting",
    "appCode": 165,
    "subAppName": "Bevis"
  },
  {
    "appId": 1066,
    "appName": "Nulla Limited",
    "appCode": 166,
    "subAppName": "Petra"
  },
  {
    "appId": 1067,
    "appName": "Ligula Eu Enim Inc.",
    "appCode": 167,
    "subAppName": "Imani"
  },
  {
    "appId": 1068,
    "appName": "Amet Industries",
    "appCode": 168,
    "subAppName": "Tarik"
  },
  {
    "appId": 1069,
    "appName": "Arcu PC",
    "appCode": 169,
    "subAppName": "Aladdin"
  },
  {
    "appId": 1070,
    "appName": "Dolor Incorporated",
    "appCode": 170,
    "subAppName": "Nathan"
  },
  {
    "appId": 1071,
    "appName": "Suspendisse Aliquet Consulting",
    "appCode": 171,
    "subAppName": "Frances"
  },
  {
    "appId": 1072,
    "appName": "Fusce Aliquet Company",
    "appCode": 172,
    "subAppName": "Logan"
  },
  {
    "appId": 1073,
    "appName": "Sagittis Augue Company",
    "appCode": 173,
    "subAppName": "Harriet"
  },
  {
    "appId": 1074,
    "appName": "Aliquam Adipiscing Incorporated",
    "appCode": 174,
    "subAppName": "Coby"
  },
  {
    "appId": 1075,
    "appName": "Varius Ultrices LLP",
    "appCode": 175,
    "subAppName": "Virginia"
  },
  {
    "appId": 1076,
    "appName": "A Nunc In Ltd",
    "appCode": 176,
    "subAppName": "Kadeem"
  },
  {
    "appId": 1077,
    "appName": "Vel Corporation",
    "appCode": 177,
    "subAppName": "Christine"
  },
  {
    "appId": 1078,
    "appName": "Quis Diam Pellentesque Foundation",
    "appCode": 178,
    "subAppName": "Ciara"
  },
  {
    "appId": 1079,
    "appName": "Velit Corp.",
    "appCode": 179,
    "subAppName": "Sean"
  },
  {
    "appId": 1080,
    "appName": "Neque Sed Foundation",
    "appCode": 180,
    "subAppName": "Jenna"
  },
  {
    "appId": 1081,
    "appName": "Ad Litora Torquent Company",
    "appCode": 181,
    "subAppName": "Shoshana"
  },
  {
    "appId": 1082,
    "appName": "Et Incorporated",
    "appCode": 182,
    "subAppName": "Madison"
  },
  {
    "appId": 1083,
    "appName": "Aliquam Adipiscing Lobortis Corporation",
    "appCode": 183,
    "subAppName": "Melvin"
  },
  {
    "appId": 1084,
    "appName": "Ullamcorper Velit LLC",
    "appCode": 184,
    "subAppName": "Alexandra"
  },
  {
    "appId": 1085,
    "appName": "Lorem Corporation",
    "appCode": 185,
    "subAppName": "Libby"
  },
  {
    "appId": 1086,
    "appName": "Est Congue Associates",
    "appCode": 186,
    "subAppName": "Murphy"
  },
  {
    "appId": 1087,
    "appName": "Consequat LLC",
    "appCode": 187,
    "subAppName": "Dacey"
  },
  {
    "appId": 1088,
    "appName": "In Consequat Industries",
    "appCode": 188,
    "subAppName": "Emily"
  },
  {
    "appId": 1089,
    "appName": "Velit Pellentesque Ultricies Limited",
    "appCode": 189,
    "subAppName": "Kalia"
  },
  {
    "appId": 1090,
    "appName": "Massa Institute",
    "appCode": 190,
    "subAppName": "Madaline"
  },
  {
    "appId": 1091,
    "appName": "Sodales Inc.",
    "appCode": 191,
    "subAppName": "Kermit"
  },
  {
    "appId": 1092,
    "appName": "Luctus Ipsum Leo Inc.",
    "appCode": 192,
    "subAppName": "Regan"
  },
  {
    "appId": 1093,
    "appName": "Convallis In Incorporated",
    "appCode": 193,
    "subAppName": "Amal"
  },
  {
    "appId": 1094,
    "appName": "Luctus Corporation",
    "appCode": 194,
    "subAppName": "Leila"
  },
  {
    "appId": 1095,
    "appName": "Magna Suspendisse Company",
    "appCode": 195,
    "subAppName": "Courtney"
  },
  {
    "appId": 1096,
    "appName": "Vel Industries",
    "appCode": 196,
    "subAppName": "Gray"
  },
  {
    "appId": 1097,
    "appName": "Vitae Odio PC",
    "appCode": 197,
    "subAppName": "Jessica"
  },
  {
    "appId": 1098,
    "appName": "Blandit Nam Foundation",
    "appCode": 198,
    "subAppName": "Quon"
  },
  {
    "appId": 1099,
    "appName": "Tincidunt Nunc Ac Inc.",
    "appCode": 199,
    "subAppName": "Derek"
  }
]
    return {
      applicationList: applicationList
    };
  };

  module.factory("searchDataService", searchDataService);

}(angular.module("ut.search")));
