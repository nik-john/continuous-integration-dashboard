'use strict';

/**
 * @ngdoc directive
 * @name crossoverCiDashboardApp.directive:statusBlip
 * @description
 * # statusBlip
 */
angular.module('crossoverCiDashboardApp')
  .directive('statusBlip', function () {
    return {
      templateUrl: 'views/statusblip.html',
      restrict: 'E',
      scope: {
        blip: '@',
        data: '=',
      },
      replace: true
    };
  });
