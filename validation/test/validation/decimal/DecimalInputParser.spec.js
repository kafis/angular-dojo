describe("The DecimalInputParser", function() {
    var element, scope;

    beforeEach(module("app"));
    beforeEach(inject(function($rootScope, $compile) {
        element = angular.element('<input type="text" ng-model="decimal" decimal-input-parser/>');
        scope = $rootScope.$new();
        $compile(element)(scope);

    }));

    it("should convert german input into machine readable model", function() {
        element.attr("value", "10,33");
        element.triggerHandler("change");
        scope.$apply();
        expect(scope.decimal).toEqual("10.33");

    });
});