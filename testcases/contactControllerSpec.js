describe('Contact Controller', function(){
	
	var controller, scope;

	beforeEach(angular.mock.module('routeApp'));

	beforeEach(angular.mock.inject(function($rootScope, $controller) {

		scope = $rootScope.$new();

		controller = $controller('contactController', { $scope : scope });

	}));

	it('Message should be defined', function() {
		expect(scope.message).toBeDefined();
	});

	it('Message equals to ', function() {
		expect(scope.message).toEqual('Hello contactController.');
	});
});