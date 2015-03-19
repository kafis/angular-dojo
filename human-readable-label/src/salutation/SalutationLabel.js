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
                    if(value === "mr") {
                      scope.humanReadable = "Herr";
                    }
                    else if(value === "mrs") {
                        scope.humanReadable = "Frau";
                    } else {
                        scope.humanReadable = "";
                    }
                });
            }
        };
    }]);
}(angular));