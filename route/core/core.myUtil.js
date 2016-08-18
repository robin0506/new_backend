angular.
  module('core').
  service('myUtil',['$location',function($location){
  	
  	this.test =function(){
  		return 'test';
  	}

  	this.Commonmethod =	function (scope, ngTableParams, NameService, url, count, $location) {
		var data = NameService.data;
		scope.tableParams = new ngTableParams({
			page : 1, // show first page
			count : count, // count per page
			sorting : {
				name : 'desc'
			}
		}, {
			total : 0, // length of data
			getData : function($defer, params) {
				NameService.getData($defer, params, scope.filter, url, $location);
			}
		});
		console.log(3);
		scope.$watch("filter.$", function() {
			scope.tableParams.reload();
		});
	}; 
	
	 this.authvalidate = function() {
		if (localStorage.getItem("usertoken") == null) {
			$location.path('/account-signin');
		}
		// else if(localStorage.getItem("userrole").indexOf("ROLE_USER")==-1){
		// alert("您无权限访问页面请联系管理远开通相关权限");
		// location.href="#/index";
		// }
		else if (localStorage.getItem("userrole").indexOf("ROLE_ADMIN") == -1
				&& localStorage.getItem("userrole").indexOf("ROLE_STUFF") == -1) {
			alert("您无权限访问页面请联系管理远开通相关权限");
			$location.path('/welcome')
		}
	}

	 this.ExceptionMethod = function(status, data) {
		if (status == "401") {
			alert("您无权限访问该页面请联系管理员");
			$location.path('/account-signin');
			//window.location.href = "#/login";
		} else if (status == "400") {
			alert("请检查填写内容是否不合法或者没填"+data.messages);
		} else if (status == "403") {
			alert("服务器拒绝了您的访问请重新登录");
			$location.path('/account-signin');
			//window.location.href = "#/login";
		} else if (status == "404") {
			alert("打开的页面请求无结果请联系管理员");
		} else if (status == "408") {
			alert("请求超时请重新刷新页面");
		}
	}
  }]);
