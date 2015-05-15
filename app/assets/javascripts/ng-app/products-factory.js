angular
	.module("ootd")
	.factory("Products", ['$http', '$stateParams', function($http, $stateParams){
		// var products = {};
		// var url = '/api/products/';

		// products.getProduct = function(id){
		// 	console.log(url + id);
		// 	return $http.get(url + id);
		// }

		var Products = function(){
			this.products = [];
			this.busy = false;
			this.from = 1;
		};

		Products.prototype.loadMore = function(){
			if (this.busy) return;
			
			this.busy = true;
			var results = 2;
			var url = '/api/products/';
			var products_url = url + "?results=" + results + "&start=" + this.from
			$http({method: "get", url: products_url, cache: true}).success(function(object){
				console.log(object.products);
				var products = object.products;
				for (var i=0; i < products.length; i++){
					console.log("product num" + i + " :" + products[i]['style_num']);
					this.products.push(products[i]);
				}
				this.from += 2;
				this.busy = false;
			}.bind(this));
		};
		
		return Products;
	}]);