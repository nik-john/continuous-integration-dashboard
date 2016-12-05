'use strict';

describe('Directive: unitTestsDrawer', function () {

  // load the directive's module
  beforeEach(module('crossoverCiDashboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<unit-tests-drawer></unit-tests-drawer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the unitTestsDrawer directive');
  }));
});
