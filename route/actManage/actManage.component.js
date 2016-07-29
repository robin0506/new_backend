'use strict';

angular.
  module('actManage').
  component('actmanageAct',{
    templateUrl: 'route/actManage/act.template.html',
    controller:['$scope','$http','ngTableParams','NameService','$location','URLService','myUtil',
    function($scope,$http,ngTableParams,NameService,$location,URLService,myUtil){
    	//console.log(myUtil.test());
    	myUtil.authvalidate();
    	console.log(1);
    	myUtil.Commonmethod($scope, ngTableParams, NameService, URLService.getUrl
			+ "/api/albatross/v1/adminapp/activities/?access_token="
			+ "lixingbin:1469788958016:37231288f226204fdca53fdedc4b69dd" /*localStorage.getItem("usertoken")*/, 10);
    	console.log(2);
    }]
  });

/*
  mainApp.controller('activityController', function($scope, $http, ngTableParams,
		NameService, $location, URLService) {
	$("#caidan").show();
	authvalidate();
	$scope.deleteData = function(data, type) {
		var replacedata = data.replace("activity", "");
		var deleteType = type;
		if (deleteType == "GAMBLING") {
			CommonDelete(data, $http, URLService.getUrl
					+ '/api/albatross/v1/adminapp/activities/gambling/'
					+ replacedata + '?access_token='
					+ localStorage.getItem("usertoken"), "1");
		} else if (deleteType == "LIFESHOW") {
			CommonDelete(data, $http, URLService.getUrl
					+ '/api/albatross/v1/adminapp/activities/life-show/'
					+ replacedata + '?access_token='
					+ localStorage.getItem("usertoken"), "1");
		}

	};
	// //
	Commonmethod($scope, ngTableParams, NameService, URLService.getUrl
			+ "/api/albatross/v1/adminapp/activities/?access_token="
			+ localStorage.getItem("usertoken"), 10);

});

*/