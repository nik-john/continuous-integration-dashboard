'use strict';

describe('Directive: statusBlip', function () {

  // load the directive's module
  beforeEach(module('crossoverCiDashboardApp'));

  beforeEach(module('template-module'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.data = {status: {key: 'foo'}};
    element = angular.element('<status-blip  data="data" blip="Bar">' +
			'</status-blip>');
    $compile(element)(scope);  
    $rootScope.$digest();
  }));

  it('should render title and have class', inject(function () {
    expect(element.find('h5')).toBeDefined();
    expect(element.find('h5').text()).toEqual('Bar');
    expect(element.find('div.box').hasClass('foo')).toBeTruthy();
  }));
});
