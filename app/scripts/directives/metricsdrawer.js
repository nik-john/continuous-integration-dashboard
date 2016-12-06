'use strict';

/**
 * @ngdoc directive
 * @name crossoverCiDashboardApp.directive:metricsDrawer
 * @description
 * # metricsDrawer
 */
angular.module('crossoverCiDashboardApp')
  .directive('metricsDrawer', function () {
    return {
      templateUrl: 'views/metricsdrawer.html',
      restrict: 'E',
      scope: {
        blip: '@',
        data: '=',
        display: '='
      },
      replace: true
    };
  });
