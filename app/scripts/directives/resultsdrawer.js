'use strict';

/**
 * @ngdoc directive
 * @name crossoverCiDashboardApp.directive:resultsDrawer
 * @description
 * # resultsDrawer
 */
angular.module('crossoverCiDashboardApp')
  .directive('resultsDrawer', function () {
    return {
      templateUrl: '/views/resultsdrawer.html',
      restrict: 'E',
      scope: {
        data: '='
      },
      replace: true
    };
  });
