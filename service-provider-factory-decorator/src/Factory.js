(function(angular) {

    var module = angular.module("factory", ["configuration"]);

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

}(angular));