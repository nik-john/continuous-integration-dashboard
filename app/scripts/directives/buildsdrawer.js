'use strict';

/**
 * @ngdoc directive
 * @name crossoverCiDashboardApp.directive:buildsDrawer
 * @description
 * # buildsDrawer
 */
angular.module('crossoverCiDashboardApp')
  .directive('buildsDrawer', function () {
    return {
      templateUrl: '/views/buildsdrawer.html',
      restrict: 'E',
      scope: {
        data: '=',
      },
      replace: true
    };
  });
