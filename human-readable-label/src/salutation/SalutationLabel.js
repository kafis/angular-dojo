(function(angular){
    var module = angular.module("app");

    module.directive("salutation", [function() {
        return {
            restrict: "E",
            replace: true,
            scope: {
                "salutation": "=of"
            },

            template: "<span>{{humanReadable}}</span>",
            link: function(scope, element, attrs) {
                scope.$watch("salutation", function(value) {
                    if ("mr" === value) {
                        scope.humanReadable = "Herr";
                    }
                    else if ("mrs" === value) {
                        scope.humanReadable = "Frau";
                    } else {
                        scope.humanReadable = "";
                    }
                });
            }
        };
    }]);
}(angular));