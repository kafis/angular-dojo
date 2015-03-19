(function(angular) {
    var module = angular.module("app");

    module.directive("decimalInputParser",[function() {
        return {
            restrict: "A", //restrict to attribute
            require: "ngModel", //Gimme The Ctrl of the ngModelDirective
            link: function(scope, element, attrs, ctrl) {

                // From Html Input to The JavaScript model
                ctrl.$parsers.push(function(viewValue) {
                    if(viewValue) {
                        return viewValue.replace(/,/g, ".");
                    }
                    return viewValue;
                });
            }
        };
    }]);
}(angular));