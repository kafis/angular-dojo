(function(angular) {
    var module = angular.module("decorator", ["configuration"]);

    module.factory("timer", ["$q", function($q) {

        var aroundInvoke = function(object, property) {
            var decoratedPromiseFunction = object[property];
            object[property] = function() {
                var start = new Date().getMilliseconds();

                var promise = decoratedPromiseFunction.apply(arguments);
                promise.then(function(result) {
                    var time = new Date().getMilliseconds() - start;
                    console.log("Invoking '"+property+"' took "+ time + "ms");
                    return result;
                },function(rejection) {
                    var time = new Date().getMilliseconds() - start;
                    console.log("Invoking '"+property+"' took "+ time + "ms");
                    return $q.reject(rejection);
                });

            };
        };
        return {
            measure: aroundInvoke
        };
    }]);


    module.factory("userService", ["baseUrl", "$http", function(baseUrl, $http) {

        var loadUser = function() {
            return $http.get(baseUrl+"/users").then(function(response) {
                return response.data;
            });
        };

        // Define Public API:
        return {
            loadUser: loadUser
        };

    }]);

    module.config(["$provide", function($provide) {

        $provide.decorator("userService", ["$delegate", "timer", function(userService, timer) {
            timer.measure(userService, "loadUser");
            return userService;
        }]);

    }]);

} (angular));