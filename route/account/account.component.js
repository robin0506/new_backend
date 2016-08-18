'use strict';

angular.module('account')
.component('accountSignin',{
	templateUrl:'route/account/signIn.template.html',
	controller:['$scope','$http','$rootScope','$location','URLService',function signinController($scope, $http, $rootScope,
		$location, URLService){
		$('.sidebar-nav').parent().hide();
		$('.navbar').hide();
			$scope.test='llb';
			$scope.loginform = function() {
				//console.log('login');
				//alert('click');
					//return;
				$http.get(
						URLService.getUrl
								+ "/api/albatross/v1/adminapp/access-token?username="
								+ $scope.login.username + "&password="
								+ $scope.login.password)
						.success(
								function(data) {
									$rootScope.username = data.data.username;
									window.localStorage.setItem("username",
											data.data.profile.username);
									window.localStorage.setItem("nickname",
											data.data.profile.nickname);
									window.localStorage.setItem("usertoken",
											data.data.access_token);
									window.localStorage.setItem("userrole",
											data.data.roles);
									window.localStorage.setItem("userid",
											data.data.profile.id);
									window.localStorage.setItem("user_id",
											data.data.profile.user_id);
									$("#getuser").html(data.data.profile.username);
									$('.sidebar-nav').parent().show();
									$('.navbar').show();
									$location.path('/welcome');
								}).error(function(data, status) {
							if (status == "401") {
								alert("您无权限访问该页面请联系管理员");
								window.location.href = "#/login";
							} else if (status == "400") {
								alert("请检查填写内容是否不合法或者没填");
							} else if (status == "403") {
								alert("服务器拒绝了您的访问请重新登录")
								window.location.href = "#/login";
							} else if (status == "404") {
								alert("用户名or密码错误！请重新输入");
							} else if (status == "408") {
								alert("请求超时请重新刷新页面");
							}
						});
			};
		
		
		
	}]
})