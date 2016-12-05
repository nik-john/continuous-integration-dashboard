'use strict';

/**
 * @ngdoc overview
 * @name crossoverCiDashboardApp
 * @description
 * # crossoverCiDashboardApp
 *
 * Main module of the application.
 */
angular
  .module('crossoverCiDashboardApp', [
    'ngAnimate',
    'chart.js'
  ])
  .config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts
    ChartJsProvider.setOptions({
      responsive: false
    });
  }]);
