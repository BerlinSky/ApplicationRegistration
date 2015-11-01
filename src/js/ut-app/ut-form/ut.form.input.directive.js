(function (module) {
   
    var fetchFormElement = function (element) {
        var input = element.querySelector("input, textarea, select");
        var type = input.getAttribute("type");
        var elemName = input.getAttribute("elemName");
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

    var link = function ($compile) {
        return function (scope, element, attributes, form) {
            var elemName = fetchFormElement(element[0]);
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
