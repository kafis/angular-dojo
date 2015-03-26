(function(angular) {
    var module = angular.module("transformOutputFilter", []);

    // Overengineered for demonstration purpose
    module.factory("upperCase", function() {
       return function(value) {
           if(value) {
               return value.toUpperCase();
           }
           return value;
       };
    });
    module.filter("toUpperCase", ["upperCase",function(uppercase) {
       return function(value) {
           return uppercase(value);
       };
    }]);

    //With parameter
    module.filter("prefix", [function() {
        return function(value, prefix, suffix) {
            return prefix + "_" + value + "_" + suffix;
        };
    }]);

    //with parameter that is a function
    module.filter("apply", function() {
        return function(value, apply) {
            return apply(value);
        };
    });

    module.controller("ApplyCtrl", function($scope) {
       $scope.transform = function(value) {
           if(value) {
               return value.split("").reverse().join("");
           }
           return value;

       };
    });

}(angular));