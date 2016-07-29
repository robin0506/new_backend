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
        otherwise('/welcome');

    }
  	])
