describe("The SalutationLabel", function() {
    var element, scope;

    beforeEach(module("app"));
    beforeEach(inject(function($compile,$rootScope) {
        element = angular.element('<salutation of="model"></salutation>');
        scope = $rootScope.$new();
        $compile(element)(scope);
    }));

    it("should display 'Frau'", function() {
        scope.model = "mrs";
        scope.$apply();
        expect(element.text().trim()).toEqual("Frau");
    });

    it("should react to model changes", function() {
        scope.model = "mrs";
        scope.$apply();
        expect(element.text().trim()).toEqual("Frau");

        scope.model = "mr";
        scope.$apply();
        expect(element.text().trim()).toEqual("Herr");

    });
});