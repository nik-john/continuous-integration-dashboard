'use strict';

describe('Directive: metricsDrawer', function () {

  // load the directive's module
  beforeEach(module('crossoverCiDashboardApp'));
  beforeEach(module('template-module'));
  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.data = {
      test: {
        trend: 'up',
        val: 100
      },
      maintainability: {
        trend: 'down',
        val: 20
      },
      security: {
        trend: 'equal',
        val: 50
      },
      workmanship: {
        trend: null,
        val: null
      }
    };
    scope.display = {
      metrics: {
        up: 'up',
        down: 'down',
        equal: 'record',
        default: 'minus'
      }
    };
    element = angular.element('<metrics-drawer data="data" display="display">' +
      '</metrics-drawer>');
    $compile(element)(scope);
    $rootScope.$digest();
  }));

  it('should contain title', inject(function () {
    var h5Element = element.find('h5');
    expect(h5Element).toBeDefined();
    expect(h5Element.text()).toEqual('Metrics');
  }));
  it('should display status', inject(function () {
    var testStatus = element.find('.metric-container > p:first-child');
    expect(testStatus).toBeDefined();
    expect(testStatus.hasClass('up')).toEqual(true);
    expect(testStatus.find('i').text()).toEqual('100');
  }));
  it('should contain 4 items', inject(function () {
    var container = element.find('.metric-container');
    expect(container).toBeDefined();
    expect(container.find('p').length).toEqual(4);    
  }));
  it('should render default when null data', inject(function () {
    var workmanshipStatus = element.find('.metric-container > p:nth-child(4)');
    expect(workmanshipStatus).toBeDefined();
    expect(workmanshipStatus.hasClass('minus')).toEqual(true);
  }));
});
