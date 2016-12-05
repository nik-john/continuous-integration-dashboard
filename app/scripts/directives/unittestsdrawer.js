'use strict';

/**
 * @ngdoc directive
 * @name crossoverCiDashboardApp.directive:unitTestsDrawer
 * @description
 * # unitTestsDrawer
 */
angular.module('crossoverCiDashboardApp')
  .directive('unitTestsDrawer', function () {
    return {
      templateUrl: '/views/unittestsdrawer.html',
      restrict: 'E',
      scope: {
        data: '=',
      },
      replace: true
    };
  });
