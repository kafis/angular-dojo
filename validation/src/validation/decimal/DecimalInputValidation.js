(function(angular) {
    var module = angular.module("app");

    module.directive("decimalInputValidator",[function() {
        return {
            restrict: "A", //restrict to attribute
            require: "ngModel", //Gimme The Ctrl of the ngModelDirective
            link: function(scope, element, attrs, ctrl) {
                var regex = /\d+\.?\d*/g;
                ctrl.$validators.decimalValue = function(modelValue, viewValue) {
                    var value = modelValue || viewValue;
                    return regex.test(value);
                };

            }
        };
    }]);
}(angular));