(function(angular) {
    var module = angular.module("selectFilter", []);

    // Filter for usage in ng-repat
    module.filter("dividableBy", function() {
        return function(collection, divisor) {
            if(!divisor) {
                return collection;
            }
            var filteredArray = [];
            angular.forEach(collection, function(element) {
               if(element % divisor === 0) {
                   filteredArray.push(element);
               }
            });
            return filteredArray;
        };
    });


    module.controller("NumberCtrl", function($scope) {
        var numbers = [];
        for(var i= 1; i < 100; i++) {
            numbers.push(i);
        }
        $scope.numbers = numbers;

        $scope.isDividableBy = function(value) {
            return value % $scope.divisor === 0;
        };
    });
} (angular));