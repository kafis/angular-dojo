(function(angular) {

    var module = angular.module("service", ["configuration"]);

    module.service("userService", ["baseUrl", "$http", function(baseUrl, $http) {

        var loadUser = function() {
            return $http.get(baseUrl+"/users").then(function(response) {
                return response.data;
            });
        };
        // Define Public API:
        this.loadUser  = loadUser;
    }]);

}(angular));