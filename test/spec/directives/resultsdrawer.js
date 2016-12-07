'use strict';

describe('Directive: resultsDrawer', function () {

  // load the directive's module
  beforeEach(module('crossoverCiDashboardApp'));
  beforeEach(module('template-module'));
  var successElement, failElement, scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    scope.failData = {
      'actions': [
        {
          'key': 'find_issues',
          'label': 'Find Issues'
        }
      ],
      'reason': {
        'key': 'metrics_reduction',
        'label': 'Metrics Reduction'
      },
      'status': {
        'short': 'fail',
        'key': 'change_rejected',
        'label': 'Change Rejected'
      }
    };
    scope.successData = {
      'actions': [
        {
          'key': 'find_issues',
          'label': 'Find Issues'
        }
      ],
      'reason': {
        'key': 'auto_merged',
        'label': 'Auto-Merged'
      },
      'status': {
        'short': 'accepted',
        'key': 'change_accepted',
        'label': 'Change Accepted'
      }
    };

    successElement = angular.element('<results-drawer data="successData">' +
      '</results-drawer>');
    failElement = angular.element('<results-drawer data="failData">' +
      '</results-drawer>');
    $compile(successElement)(scope);
    $compile(failElement)(scope);
    $rootScope.$digest();
  }));

  it('should list out success reason, status and actions', inject(function () {
    expect(successElement.find('.result-status').text()).toEqual('Change Accepted');
    expect(successElement.find('.result-reason').text()).toEqual('Auto-Merged');
    expect(successElement.find('.actions').length).toEqual(1);
  }));
  
  it('should list out failure reason, status and actions', inject(function () {
    expect(failElement.find('.result-status').text()).toEqual('Change Rejected');
    expect(failElement.find('.result-reason').text()).toEqual('Metrics Reduction');
    expect(failElement.find('.actions').length).toEqual(1);
  }));

});
