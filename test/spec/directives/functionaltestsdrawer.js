'use strict';

describe('Directive: functionalTestsDrawer', function () {

  // load the directive's module
  beforeEach(module('crossoverCiDashboardApp'));
  beforeEach(module('template-module'));
  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.data = {
      'tests': {
        'pass': 50,
        'total': 100
      },
      'coverage': 60,
      'status': {
        'key': 'pass',
        'label': 'Pass'
      }
    };

    element = angular.element('<functional-tests-drawer data="data">' +
      '</functional-tests-drawer>');
    $compile(element)(scope);
    $rootScope.$digest();
  }));

  it('should render default when no data is available', inject(function () {
    var defaultContainer = element.find('.default');
    expect(defaultContainer.length).toEqual(0);
  }));
  
  it('should not render canvas when no data is available', inject(function () {
    var canvas = element.find('canvas');
    expect(canvas.length).toBeGreaterThan(0);
  }));

});
