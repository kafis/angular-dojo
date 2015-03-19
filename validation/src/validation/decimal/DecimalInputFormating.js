(function(angular) {
    var module = angular.module("app");

    module.directive("decimalInputFormatter",[function() {
        return {
            restrict: "A", //restrict to attribute
            require: "ngModel", //Gimme The Ctrl of the ngModelDirective
            link: function(scope, element, attrs, ctrl) {

                // From JavaScipt Model into the
                ctrl.$formatters.push(function(modelValue) {
                    if(modelValue) {
                        return modelValue.replace(/\./g,",");
                    }
                    return modelValue;
                });
            }
        };
    }]);
}(angular));