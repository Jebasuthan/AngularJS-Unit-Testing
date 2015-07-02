describe("Main Controller", function () {

	var controller, scope;
	beforeEach(angular.mock.module('routeApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    scope = $rootScope.$new();
    controller = $controller('mainController', { $scope : scope });
  }));
		

  it('Title should be defined', inject(function ($rootScope, $controller) {
  	expect(scope.title1).toBeDefined();
  }));

  it('Title as Hello mainController', inject(function ($rootScope, $controller) {
    expect(scope.title1).toEqual('Hello mainController');
  }));

  it('datavalues should be defined', inject(function ($rootScope, $controller) {
    expect(scope.datavalues).toBeDefined();
  }));

  it('datavalues should be Home page data', inject(function ($rootScope, $controller) {
    expect(scope.datavalues).toEqual('Home page data');
  }));
});