angular
	.module("ootd")
	.factory("productsFactory", ['$http', '$stateParams', function($http, $stateParams){
		var products = {};
		var url = '/api/products/';

		products.getProduct = function(id){
			console.log(url + id);
			return $http.get(url + id);
		}

		products.getAllProducts = function(){
			return $http.get(url);
		}
		
		return products;
	}]);