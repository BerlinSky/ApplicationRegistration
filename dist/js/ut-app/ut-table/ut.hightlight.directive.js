(function (module) {

  "use strict";

  var utHighlight = function() {
    var linker = function(scope, element, attrs) {
      element 
        .mouseover(function() {
          element.css({ 'opacity': 0.5, 'color': '#fed136' });
        })
        .mouseout(function(){
          element.css({ 'opacity': 1.0, 'color': '#666' });
        });
    };

    return {
      restrict: "A",
      link: linker
    };
  };

  module.directive("utHighlight", utHighlight);

}(angular.module("ut.table")));