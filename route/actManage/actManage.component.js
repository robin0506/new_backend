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
			+ /*"lixingbin:1470035095279:94204f2c5fd1b601347d7ae0a4e8c69c"*/ localStorage.getItem("usertoken"), 10);
    	console.log(2);
    	$scope.add = function(){
    		$location.path('/actManage-addact');
    	}
    }]
  });

angular.
  module('actManage').
  component('actmanageAddact',{
  	templateUrl:'route/actManage/addAct.template.html',
  	controller:['$scope','$http','ngTableParams','NameService','$location','URLService','myUtil',
    function addAct($scope,$http,ngTableParams,NameService,$location,URLService,myUtil){
    	$scope.submit = function(){
    		console.log('1');
    	}
    }]
  })

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