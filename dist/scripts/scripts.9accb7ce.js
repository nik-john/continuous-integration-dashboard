"use strict";angular.module("crossoverCiDashboardApp",["ngAnimate","chart.js"]).config(["ChartJsProvider",function(a){a.setOptions({responsive:!1})}]),angular.module("crossoverCiDashboardApp").controller("MainCtrl",["$scope","BuildData",function(a,b){a.display={arr:[],toggleDisplay:function(b){var c=a.display.arr,d=c[b];c=[],c[b]=!d,a.display.arr=c},metrics:{up:"glyphicon-arrow-up",down:"glyphicon-arrow-down",equal:"glyphicon-record",default:"glyphicon glyphicon-minus"}},a.data=b.getData().map(function(a){return a.start=new Date(a.start),a}),a.labels=["Download Sales","In-Store Sales","Mail-Order Sales"],a.chartData=[300,500,200]}]),angular.module("crossoverCiDashboardApp").factory("BuildData",function(){var a={type:"build",id:"5842dcff8891396ff1e3a7f7",owner:{userName:"njohn"},start:"Tue Feb 02 2016 02:54:43 GMT+0000 (UTC)",metrics:{status:{label:"Fail",key:"fail"},workmanship:{trend:"down",val:39,status:{label:"Fail",key:"fail"}},security:{trend:null,val:null,status:{label:null,key:null}},maintainability:{trend:"equal",val:80,status:{label:"Equal",key:"equal"}},test:{trend:"up",val:62,status:{label:"Pass",key:"pass"}}},build:{release:{status:"pending"},debug:{status:"pending"},status:{label:"Pending",key:"pending"}},unitTest:{tests:{pass:null,total:null},coverage:null,status:{key:"pending",label:"Pending"}},functionalTest:{tests:{pass:null,total:null},coverage:null,status:{key:"pending",label:"Pending"}},result:{actions:[{key:"find_issues",label:"Find Issues"}],reason:{key:"metrics_reduction",label:"Metrics Reduction"},status:{short:"fail",key:"change_rejected",label:"Change Rejected"}}},b={type:"build",id:"5842dcffed2d17b7511bf8cc",owner:{userName:"tpriy"},start:"Fri Nov 04 2016 11:04:37 GMT+0000 (UTC)",metrics:{status:{label:"Pass",key:"pass",status:{label:"Pass",key:"pass"}},workmanship:{trend:"equal",val:69,status:{label:"Pass",key:"pass"}},security:{trend:"up",val:38,status:{label:"Pass",key:"pass"}},maintainability:{trend:"up",val:40,status:{label:"Pass",key:"pass"}},test:{trend:"up",val:82,status:{label:"Pass",key:"pass"}}},build:{release:{status:"pass"},debug:{status:"pass"},status:{label:"Pending",key:"pending"}},unitTest:{tests:{pass:800,total:1e3},coverage:23,status:{key:"pass",label:"Pass"}},functionalTest:{tests:{pass:800,total:1e3},coverage:23,status:{key:"pass",label:"Pass"}},result:{actions:[{key:"find_issues",label:"Find Issues"}],reason:{key:"auto_merged",label:"Auto-Merged"},status:{short:"accepted",key:"change_accepted",label:"Change Accepted"}}},c={type:"build",id:"5842dcffed2d17b7511bf8cc",owner:{userName:"tpriy"},start:"Fri Nov 04 2016 11:04:37 GMT+0000 (UTC)",metrics:{status:{label:"Pass",key:"pass",status:{label:"Pass",key:"pass"}},workmanship:{trend:"equal",val:69,status:{label:"Pass",key:"pass"}},security:{trend:"up",val:38,status:{label:"Pass",key:"pass"}},maintainability:{trend:"up",val:40,status:{label:"Pass",key:"pass"}},test:{trend:"up",val:82,status:{label:"Pass",key:"pass"}}},build:{release:{status:"pass"},debug:{status:"pass"},status:{label:"Pending",key:"pending"}},unitTest:{tests:{pass:800,total:1e3},coverage:23,status:{key:"pass",label:"Pass"}},functionalTest:{tests:{pass:null,total:null},coverage:null,status:{key:"pending",label:"Pass"}},result:{actions:[{key:"find_issues",label:"Find Issues"}],reason:{key:"auto_merged",label:"Auto-Merged"},status:{short:"accepted",key:"change_accepted",label:"Change Accepted"}}},d={result:{actions:[{key:"find_issues",label:"Find Issues"}],reason:{key:"auto_merged",label:"Auto-Merged"},status:{short:"accepted",key:"change_accepted",label:"Change Accepted"}},functionalTest:{tests:{pass:800,total:1e3},coverage:23,status:{key:"pass",label:"Pass"}},unitTest:{tests:{pass:800,total:1e3},coverage:23,status:{key:"pass",label:"Pass"}},build:{release:{status:"fail"},debug:{status:"fail"},status:{label:"Pending",key:"pending"}},metrics:{status:{label:"Pass",key:"pass"},workmanship:{trend:"down",val:97,status:{label:"Pass",key:"pass"}},security:{trend:"equal",val:60,status:{label:"Pass",key:"pass"}},maintainability:{trend:"up",val:63,status:{label:"Pass",key:"pass"}},test:{trend:"equal",val:93,status:{label:"Pass",key:"pass"}}},start:"Thu Jun 09 2016 18:03:17 GMT+0000 (UTC)",owner:{userName:"gmenon"},id:"5842dcff2ed90090b59cb2cd",type:"build"},e={result:{actions:[{key:"find_issues",label:"Find Issues"}],reason:{key:"auto_merged",label:"Auto-Merged"},status:{short:"accepted",key:"change_accepted",label:"Change Accepted"}},functionalTest:{tests:{pass:800,total:1e3},coverage:23,status:{key:"pass",label:"Pass"}},unitTest:{tests:{pass:800,total:1e3},coverage:23,status:{key:"pass",label:"Pass"}},build:{release:{status:"fail"},debug:{status:"pass"},status:{label:"Pending",key:"pending"}},metrics:{status:{label:"Pass",key:"pass"},workmanship:{trend:"down",val:97,status:{label:"Pass",key:"pass"}},security:{trend:"equal",val:60,status:{label:"Pass",key:"pass"}},maintainability:{trend:"up",val:63,status:{label:"Pass",key:"pass"}},test:{trend:"equal",val:93,status:{label:"Pass",key:"pass"}}},start:"Sat Aug 27 2016 01:58:59 GMT+0000 (UTC)",owner:{userName:"adeep"},id:"5842dcff57a5316e0b526262",type:"build"},f={result:{actions:[{key:"find_issues",label:"Find Issues"}],reason:{key:"auto_merged",label:"Auto-Merged"},status:{short:"accepted",key:"change_accepted",label:"Change Accepted"}},functionalTest:{tests:{pass:800,total:1e3},coverage:23,status:{key:"pass",label:"Pass"}},unitTest:{tests:{pass:800,total:1e3},coverage:23,status:{key:"pass",label:"Pass"}},build:{release:{status:"pass"},debug:{status:"fail"},status:{label:"Pending",key:"pending"}},metrics:{status:{label:"Pass",key:"pass"},workmanship:{trend:"down",val:97,status:{label:"Pass",key:"pass"}},security:{trend:"equal",val:60,status:{label:"Pass",key:"pass"}},maintainability:{trend:"up",val:63,status:{label:"Pass",key:"pass"}},test:{trend:"equal",val:93,status:{label:"Pass",key:"pass"}}},start:"Fri Sep 02 2016 21:52:19 GMT+0000 (UTC)",owner:{userName:"tpriy"},id:"5842dcff80de13f4b192ad62",type:"build"},g=[a,b,c,d,e,f];return{getData:function(){return g}}}),angular.module("crossoverCiDashboardApp").directive("statusBlip",function(){return{templateUrl:"views/statusblip.html",restrict:"E",scope:{blip:"@",data:"="},replace:!0}}),angular.module("crossoverCiDashboardApp").directive("metricsDrawer",function(){return{templateUrl:"views/metricsdrawer.html",restrict:"E",scope:{blip:"@",data:"=",display:"="},replace:!0}}),angular.module("crossoverCiDashboardApp").directive("buildsDrawer",function(){return{templateUrl:"views/buildsdrawer.html",restrict:"E",scope:{data:"="},replace:!0}}),angular.module("crossoverCiDashboardApp").directive("unitTestsDrawer",function(){return{templateUrl:"views/unittestsdrawer.html",restrict:"E",scope:{data:"="},replace:!0}}),angular.module("crossoverCiDashboardApp").directive("functionalTestsDrawer",function(){return{templateUrl:"views/functionaltestsdrawer.html",restrict:"E",scope:{data:"="},replace:!0}}),angular.module("crossoverCiDashboardApp").directive("resultsDrawer",function(){return{templateUrl:"views/resultsdrawer.html",restrict:"E",scope:{data:"="},replace:!0}}),angular.module("crossoverCiDashboardApp").run(["$templateCache",function(a){a.put("views/buildsdrawer.html",'<div class="col-sm-2 col-xs-3 chart-container"> <h5 class="row text-muted truncate text-light" ng-bind="\'Build\'"></h5> <div class="default" ng-class="data.debug.status" ng-if="data.debug.status === \'pending\'"> <i class="glyphicon glyphicon-remove-circle"></i> </div> <p class="build-icon" ng-class="data.debug.status" ng-if="data.debug.status !== \'pending\'"> <i class="glyphicon glyphicon-wrench"></i> <span ng-bind="\'Debug\'" class="build-title text-light"></span> </p> <div class="default" ng-class="data.release.status" ng-if="data.release.status === \'pending\'"> <i class="glyphicon glyphicon-remove-circle"></i> </div> <p class="build-icon" ng-class="data.release.status" ng-if="data.release.status !== \'pending\'"> <i class="glyphicon glyphicon-gift"></i> <span ng-bind="\'Release\'" class="build-title text-light"></span> </p> </div>'),a.put("views/functionaltestsdrawer.html",'<div class="col-sm-2 col-xs-3 chart-container"> <h5 class="row truncate text-light text-muted" ng-bind="\'Functional Tests\'"></h5> <div class="default" ng-class="data.status.key" ng-if="data.status.key === \'pending\'"> <i class="glyphicon glyphicon-remove-circle"></i></div> <div class="row wrap"> <canvas id="functional" class="chart chart-pie" chart-data="[data.tests.pass, data.tests.total - data.tests.pass]" chart-labels="[\'Pass\', \'Fail\']" height="50" width="100" ng-if="data.status.key !== \'pending\'"> </canvas> <div class="default" ng-class="data.status.key" ng-if="data.status.key === \'pending\'"> <i class="glyphicon glyphicon-remove-circle"></i></div> <canvas id="unit-coverage" class="chart chart-doughnut" chart-data="[data.coverage, 100 - data.coverage]" chart-labels="[\'Covered\', \'Not Covered\']" height="50" width="130" ng-if="data.status.key !== \'pending\'"> </canvas> </div> </div>'),a.put("views/main.html",'<div data-ng-repeat="row in data" class="pipeline-container {{row.result.status.short}}" ng-class="{\'expanded\' : display.arr[$index]}" ng-click="display.toggleDisplay($index)"> <div class="row head" ng-class="{\'expanded\' : display.arr[$index]}"> <div class="type col-xs-1"> <span class="glyphicon glyphicon-tasks type-icon" ng-class="row.result.status.short" ng-show="row.type===\'changelist\'"></span> <span class="glyphicon glyphicon-fire type-icon" ng-class="row.result.status.short" ng-show="row.type===\'build\'"></span> </div> <div class="username col-xs-2" ng-bind="row.owner.userName || \'--\'"></div> <div class="start-time col-xs-2 visible-md visible-lg box-container"> <span class="row" ng-bind="row.start | date : \'mediumDate\'"></span> <span class="row" ng-bind="row.start | date : \'mediumTime\'"></span> </div> <status-blip blip="Metrics" data="row.metrics"></status-blip> <status-blip blip="Build" data="row.build"></status-blip> <status-blip blip="Unit Tests" data="row.unitTest"></status-blip> <status-blip blip="Functional Tests" data="row.functionalTest"></status-blip> </div> <div class="row drawer" ng-if="display.arr[$index]"> <metrics-drawer data="row.metrics" display="display"></metrics-drawer> <builds-drawer data="row.build" display="display"></builds-drawer> <unit-tests-drawer data="row.unitTest" display="display"></unit-tests-drawer> <functional-tests-drawer data="row.functionalTest" display="display"></functional-tests-drawer> <results-drawer data="row.result" display="display"></results-drawer> </div> </div>'),a.put("views/metricsdrawer.html",'<div class="col-sm-2 col-xs-3 chart-container"> <h5 class="row text-muted truncate text-light" ng-bind="\'Metrics\'"></h5> <div class="row metric-container"> <p class="metric col-xs-6 glyphicon {{display.metrics[data.test.trend || \'default\']}}" ng-class="data.test.status.key"> <i class="metric-val" ng-bind="data.test.val"></i> </p> <p class="metric col-xs-6 glyphicon {{display.metrics[data.security.trend || \'default\']}}" ng-class="data.security.status.key"> <i class="metric-val" ng-bind="data.security.val"></i> </p> <p class="metric col-xs-6 glyphicon {{display.metrics[data.maintainability.trend || \'default\']}}" ng-class="data.maintainability.status.key"> <i class="metric-val" ng-bind="data.maintainability.val"></i> </p> <p class="metric col-xs-6 glyphicon {{display.metrics[data.workmanship.trend || \'default\']}}" ng-class="data.workmanship.status.key"> <i class="metric-val" ng-bind="data.workmanship.val"></i> </p> </div> </div>'),a.put("views/resultsdrawer.html",'<div class="col-sm-4 col-xs-12 chart-container result"> <h5 class="row truncate text-light text-muted" ng-bind="\'Result\'"></h5> <div class="row wrap"> <h4 ng-bind="data.status.label" class="text-light {{data.status.short}}"></h4> </div> <div class="row wrap"> <h4 ng-bind="data.reason.label" class="text-info"></h4> </div> <div class="row wrap"> <button ng-repeat="action in data.actions" class="btn btn-info actions" ng-bind="action.label"> </button> </div> </div>'),a.put("views/statusblip.html",'<div class="{{blip.toLowerCase()}} col-xs-2 box-container"> <h5 class="row box-title text-muted truncate text-light" ng-bind="blip"></h5> <div class="box" ng-class="data.status.key"></div> </div>'),a.put("views/unittestsdrawer.html",'<div class="col-sm-2 col-xs-3 chart-container"> <h5 class="row text-muted truncate text-light" ng-bind="\'Unit Tests\'"></h5> <div class="row wrap"> <div class="default" ng-class="data.status.key" ng-if="data.status.key === \'pending\'"> <i class="glyphicon glyphicon-remove-circle"></i> </div> <canvas id="unit" class="chart chart-pie text-muted" chart-data="[data.tests.pass, data.tests.total - data.tests.pass]" chart-labels="[\'Pass\', \'Fail\']" height="50" width="100" ng-if="data.status.key !== \'pending\'"> </canvas> <div class="default" ng-class="data.status.key" ng-if="data.status.key === \'pending\'"> <i class="glyphicon glyphicon-remove-circle"></i></div> <canvas id="unit-coverage" class="chart chart-doughnut" chart-data="[data.coverage, 100 - data.coverage]" chart-labels="[\'Covered\', \'Not Covered\']" height="50" width="130" ng-if="data.status.key !== \'pending\'"> </canvas> </div> </div>')}]);