'use strict';

/**
 * @ngdoc directive
 * @name crossoverCiDashboardApp.directive:functionalTestsDrawer
 * @description
 * # functionalTestsDrawer
 */
angular.module('crossoverCiDashboardApp')
  .directive('functionalTestsDrawer', function () {
    return {
      templateUrl: 'views/functionaltestsdrawer.html',
      restrict: 'E',
      scope: {
        data: '='
      },
      replace: true
    };
  });
