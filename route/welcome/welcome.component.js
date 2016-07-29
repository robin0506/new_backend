'use strict';

angular.
  module('welcome').
  component('welcome',{
  	templateUrl:'route/welcome/welcome.template.html',
  	controller: ['myUtil',function(myUtil){
  		this.user = myUtil.test();
  	}]

  });