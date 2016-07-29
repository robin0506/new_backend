
angular.
  module('core').
  service('NameService',['$http', '$filter',function ($http, $filter){
  	
  	function filterData(data, filter) {
		return $filter('filter')(data, filter);
	}

	function orderData(data, params) {
		return params.sorting() ? $filter('orderBy')(data, params.orderBy())
				: filteredData;
	}

	function sliceData(data, params) {
		return data.slice((params.page() - 1) * params.count(), params.page()
				* params.count())
	}

	function transformData(data, filter, params) {
		return sliceData(orderData(filterData(data, filter), params), params);
	}

	this.getData = function($defer, params, filter, url, $location) {
		// ng缓存开关 if (service.cachedData.length>0) {
		// console.log("using cached data")
		// var filteredData = filterData(service.cachedData, filter);
		// var transformedData = sliceData(
		// orderData(filteredData, params), params);
		// params.total(filteredData.length)
		// $defer.resolve(transformedData);
		// } else {
		console.log("fetching data")
		$http.get(url).success(function(resp) {
			console.log(resp);
			console.log("开始...........................")
			// console.log(data.data._content+"...........................")
			// angular.copy(resp, service.cachedData)
			params.total(resp.data.length)
			var filteredData = $filter('filter')(resp.data, filter);
			var transformedData = transformData(resp.data, filter, params)

			$defer.resolve(transformedData);
		}).error(function(data, status) {
			ExceptionMethod(status, data);
		});
	}	
  }]);





angular.
  module('core').
  service('PageService1',function($http,$filter){
	function filterData(data, filter) {
		return $filter('filter')(data, filter);
	}

	function orderData(data, params) {
		return params.sorting() ? $filter('orderBy')(data, params.orderBy())
				: filteredData;
	}

	function sliceData(data, params) {
		return data.slice(0, 20)
	}

	function transformData(data, filter, params) {
		return sliceData(orderData(filterData(data, filter), params), params);
	}


	this.getData = function($defer, params, filter, url, $location) {
		$http.get(url + "&page=" + (params.page() - 1) + "&size=20")
				.success(
						function(resp) {
							// angular.copy(resp, service.cachedData)

							params.total(resp.data._total)
							var filteredData = $filter('filter')(
									resp.data._content, filter);
							var transformedData = transformData(
									resp.data._content, filter, params);
							$defer.resolve(transformedData);
						}).error(function(data, status) {
					ExceptionMethod(status, data);
				});	
	};
	
  })