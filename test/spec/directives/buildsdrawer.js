'use strict';

describe('Directive: buildsDrawer', function () {

  // load the directive's module
  beforeEach(module('crossoverCiDashboardApp'));
  beforeEach(module('template-module'));
  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.data = {
      debug: { status: 'foo' },
      release: { status: 'pending' }
    };
    element = angular.element('<builds-drawer data="data"></builds-drawer>');
    $compile(element)(scope);
    $rootScope.$digest();
  }));

  it('should render icons when data is available', inject(function () {
    var debugDefault = element.find('.build-metric.default'),
      debugIcon = element.find('.build-icon.build-metric');
    expect(debugDefault.length).toEqual(0);
    expect(debugIcon).toBeDefined();

  }));
  it('should render default icons when data is not available', inject(function () {
      var releaseDefault = element.find('default.build-release'),
        releaseIcon = element.find('.build-icon.build-release');
      expect(releaseDefault).toBeDefined();
      expect(releaseIcon.length).toEqual(0);
  }));
});
