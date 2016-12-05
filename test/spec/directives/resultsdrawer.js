'use strict';

describe('Directive: resultsDrawer', function () {

  // load the directive's module
  beforeEach(module('crossoverCiDashboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<results-drawer></results-drawer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the resultsDrawer directive');
  }));
});
