describe("The DecimalInputFormatter", function() {
    var element, scope;

    beforeEach(module("app"));
    beforeEach(inject(function($rootScope, $compile) {
        element = angular.element('<input type="text" ng-model="decimal" decimal-input-formatter/>');
        scope = $rootScope.$new();
        scope.decimal = "10.34";
        $compile(element)(scope);
    }));

    it("should display the machine formatted number to german readable format", function() {
        scope.decimal = "10.34";
        scope.$apply();
        expect(element.val()).toEqual("10,34");

    });
});