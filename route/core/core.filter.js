
// 自定义过滤器
angular.module('core').filter("isablefilter", function() {
	return function(isable) {
		if (isable == 1) {
			isable = "是";
		} else {
			isable = "否";
		}
		return isable;
	}

})
angular.module('core').filter("isenable", function() {
	return function(isable) {
		if (isable == true) {
			isable = "是";
		} else {
			isable = "否";
		}
		return isable;
	}

})
angular.module('core').filter("isrecommend", function() {
	return function(isrecommend) {
		if (isrecommend == "true") {
			isrecommend = "是";
		} else {
			isrecommend = "否";
		}
		return isrecommend;
	}

})
angular.module('core').filter("istype", function() {
	return function(istype) {
		if (istype == "GAMBLING") {
			istype = "竞猜活动";
		} else if (istype == "LIFESHOW") {
			istype = "传图点赞";
		} else {
			istype = "无";
		}
		return istype;
	}

})