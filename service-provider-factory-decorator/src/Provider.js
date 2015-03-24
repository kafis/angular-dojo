(function(angular) {

    var module = angular.module("provider", []);

    module.provider("userService", function() {

        // ConfigurationStuff:
        var baseUrl = "";
        this.setBaseUrl = function(url) {
            baseUrl = url;
        };

        // Construct the Service:
        this.$get = ["$http", function($http) {

            // Factory Style:
            var loadUser = function() {
                return $http.get(baseUrl+"/users").then(function(response) {
                    return response.data;
                });
            };
            // Define Public API:
            return {
                loadUser: loadUser
            };
        }];
    });

}(angular));