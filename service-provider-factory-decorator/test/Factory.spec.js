describe("Using the Factory", function() {
    var factory, httpBackend;

    beforeEach(function() {
        angular.module("configuration", [])
               .value("baseUrl", "http://localhost:8080");
    });
    beforeEach(module("factory"));
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