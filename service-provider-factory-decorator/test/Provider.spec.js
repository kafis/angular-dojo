describe("Using the Provider", function() {
    var factory, httpBackend;

    beforeEach(function() {
        angular.module("app", ["provider"])
            .config(["userServiceProvider", function(userServiceProvider){
                userServiceProvider.setBaseUrl("http://localhost:8080");
            }]);

    });

    beforeEach(module("app"));
    beforeEach(inject(function(userService, $httpBackend) {
        factory = userService;
        httpBackend = $httpBackend;
    }));

    it("should call the configured url", function() {
        httpBackend.expectGET("http://localhost:8080/users").respond(200, {});

        factory.loadUser();

        httpBackend.flush();
    });

});