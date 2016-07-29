angular.
  module('core').
  service('myUtil',function(){
  	
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
			window.location.href = "#!/login";
		}
		// else if(localStorage.getItem("userrole").indexOf("ROLE_USER")==-1){
		// alert("您无权限访问页面请联系管理远开通相关权限");
		// location.href="#/index";
		// }
		else if (localStorage.getItem("userrole").indexOf("ROLE_ADMIN") == -1
				&& localStorage.getItem("userrole").indexOf("ROLE_STUFF") == -1) {
			alert("您无权限访问页面请联系管理远开通相关权限");
			window.location.href = "#!/welcome";
		}
	}

  });
