'use strict';

describe('Service: BuildData', function () {

  // load the service's module
  beforeEach(module('crossoverCiDashboardApp'));

  // instantiate service
  var BuildData;
  beforeEach(inject(function (_BuildData_) {
    BuildData = _BuildData_;
  }));

  it('should do something', function () {
    expect(BuildData.getData().length).toEqual(6);
  });

});
