(function (module) {
   
  "use strict";
 
  var fetchFormElement = function (element) {
    var input = element.querySelector("input, textarea, select");
    var type = input.getAttribute("type");
    var elemName = input.getAttribute("name");
    if (type !== "checkbox" && type !== "radio") {
        input.classList.add("form-control");
        input.classList.add("ut-text-input");
    }

    var label = element.querySelector("label");
    label.classList.add("control-label");
    label.classList.add("ut-label");

    element.classList.add("form-group");
    return elemName;
  };

  var appendMsg = function (form, element, elemName, $compile, scope) {
    var message = "<div class='help-block' ng-messages='" +
                    form.$name + "." + elemName + ".$error" + "' >" +
                    "<div ng-messages-include='form-messages'></div><div>";
    element.append($compile(message)(scope));
  };

  var monitor = function (form, elemName) {
    return function () {
      if (elemName && form[elemName]) {
          return form[elemName].$invalid;
      }
    };
  };

  var updaterElement = function (element) {
    return function (hasError) {
      if (hasError) {
          element.removeClass("has-success").addClass("has-error");
      }
      else {
          element.removeClass("has-error").addClass("has-success");
      }
    }         
  };

  var link = function ($compile) {
    return function (scope, element, attributes, form) {
        var elemName = fetchFormElement(element[0]);
        appendMsg(form, element, elemName, $compile, scope);
        scope.$watch(monitor(form, elemName), updaterElement(element));
    };
  };

  var utInput = function ($compile) {
    return {
        restrict: "A",
        require: "^form",
        link: link($compile)
    };

  };

  module.directive("utInput", utInput);

}(angular.module("ut.form")));
