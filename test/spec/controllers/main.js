'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('crossoverCiDashboardApp'));

var MainCtrl,
  scope;

// Initialize the controller and a mock scope
beforeEach(inject(function ($controller, $rootScope) {
  scope = $rootScope.$new();
  MainCtrl = $controller('MainCtrl', {
    $scope: scope
  });
}));

it('should attach a display object', function () {
    expect(scope.display.arr).toBeDefined();
    expect(scope.display.toggleDisplay).toBeDefined();
    expect(scope.display.metrics).toBeDefined();
  });
});
