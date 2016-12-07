'use strict';

describe('Directive: unitTestsDrawer', function () {

  // load the directive's module
  beforeEach(module('crossoverCiDashboardApp'));
  beforeEach(module('template-module'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.data = {
      'tests': {
        'pass': null,
        'total': null
      },
      'coverage': null,
      'status': {
        'key': 'pending',
        'label': 'Pending'
      }
    };

    element = angular.element('<unit-tests-drawer data="data">' +
      '</unit-tests-drawer>');
    $compile(element)(scope);
    $rootScope.$digest();
  }));

  it('should render default when no data is available', inject(function () {
    var defaultContainer = element.find('.default');
    expect(defaultContainer.length).toBeGreaterThan(0);
  }));
  
  it('should not render canvas when no data is available', inject(function () {
    var canvas = element.find('canvas');
    expect(canvas.length).toEqual(0);
  }));
  
});
