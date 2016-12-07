'use strict';

/**
 * @ngdoc function
 * @name crossoverCiDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the crossoverCiDashboardApp
 */
angular.module('crossoverCiDashboardApp')
  .controller('MainCtrl', function ($scope, BuildData) {
    $scope.display = {
      arr: [],
      toggleDisplay: function (index) {
        var arr = $scope.display.arr,
          curr = arr[index];
        arr = [];
        arr[index] = !curr;
        $scope.display.arr = arr;
      },
      metrics: {
        up: 'glyphicon-arrow-up pass',
        down: 'glyphicon-arrow-down fail',
        equal: 'glyphicon-record equal',
        default: 'glyphicon glyphicon-minus pending'
      }
    };
    $scope.data = BuildData.getData().map(function (item) {
      item.start = new Date(item.start);
      return item;
    });
    $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    $scope.chartData = [300, 500, 200];
  });
