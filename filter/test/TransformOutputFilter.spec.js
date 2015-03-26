describe("TransformOutputFilter", function() {

    beforeEach(module("transformOutputFilter"));

    describe("Testing without DOM", function() {
        var filter;

        beforeEach(inject(function($filter) {
            filter = $filter("prefix");
        }));

        it("should pre and suffix some string", function() {
            var suffix = "suffix";
            var prefix = "prefix";
           expect(filter("hallo", prefix, suffix )).toEqual("prefix_hallo_suffix");
        });

    });

    describe("Testing with DOM", function() {
        var scope, element;

        beforeEach(inject(function($compile, $rootScope) {
            element = angular.element("<span>{{model | toUpperCase}}</span>");
            scope = $rootScope.$new();
            $compile(element)(scope);
        }));

        it("should render uppercase", function() {
            scope.model = "hallo";
            scope.$apply();
            expect(element.text()).toEqual("HALLO");
        });
    });
});