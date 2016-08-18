'use strict';

angular.
  module('backEnd').
  config(['$locationProvider','$routeProvider',
    function config($locationProvider,$routeProvider){
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/welcome',{
        	template:'<welcome></welcome>'
        }).
        when('/actManage-act',{
          template:'<actmanage-act></actmanage-act>'
        }).
        when('/account-signin',{
          template:'<account-signin></account-signin>'
        }).
        when('/actManage-addact',{
          template:'<actmanage-addact></actmanage-addact>'
        }).
        otherwise('/welcome');

    }
  	]);


angular.
  module('backEnd').
  controller('navController',['$scope','$location',function($scope,$location){
    console.log('nav');
    $scope.test= 'llb';
    $scope.logout = function(){
      window.localStorage.clear();
      $location.path('/account-signin')
    };
  }])
