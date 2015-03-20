describe("The DecimalInputValidation", function() {
    var element, scope;

    beforeEach(module("app"));
    beforeEach(inject(function($rootScope, $compile) {
        element = angular.element('<input type="text" ng-model="decimal" decimal-input-validator/>');
        scope = $rootScope.$new();
        scope.decimal = "10.34";
        $compile(element)(scope);
    }));

    it("should accept valid numbers", function() {
        changeValue("10.23");
        expect(scope.decimal).toEqual("10.23");

        expect(element.hasClass("ng-valid")).toBe(true);
    });

    it("should not accept invalid numbers", function() {
        changeValue("xx");
        expect(scope.decimal).toBe(undefined);

        expect(element.hasClass("ng-invalid-decimal-value-validation")).toBe(true);
    });

    it("should populate the error key to the enclosing form object", inject(function($rootScope,$compile) {
        element = angular.element(
            '<form name="testform">' +
                '<input type="text" ng-model="decimal" decimal-input-validator/>' +
            '</form>');
        scope = $rootScope.$new();
        scope.decimal = "10.34";
        $compile(element)(scope);


        scope.decimal = "xxx";
        scope.$apply();
        expect(scope.testform.$error.decimalValueValidation).toBeDefined();


        scope.decimal = "10.34";
        scope.$apply();
        expect(scope.testform.$error.decimalValueValidation).not.toBeDefined();
    }));

    var changeValue = function(value) {
        element.attr("value", value);
        element.triggerHandler("change");
        scope.$apply();
    };
});