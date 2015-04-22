angular
	.module("ootd", ['ngResource'])
	.config(['$httpProvider', function($httpProvider) {
  	$httpProvider.defaults.headers.common['X-CSRF-Token'] =
      $('meta[name=csrf-token]').attr('content');
  }])
  .controller("productController", ['$scope', '$http', '$resource', function($scope, $http, $resource){
		var Product = $resource('/api/products/:id', {id:'@id'},
			{
				'update': { method: 'patch'},
				'query': { method: 'get', isArray: false}
			}
		);

		Product.query(function(data){
			console.log('Fetched products!', 'Data', data);
			$scope.products = data["products"];
		});

		$scope.createProduct = function(){
			// Need to add attributes for collection and images
			new Product({
				collection_id: $scope.newProduct.collection_id,
				category: $scope.newProduct.category,
				style_num: $scope.newProduct.style_num,
				style: $scope.newProduct.style,
				color: $scope.newProduct.color,
				materials: $scope.newProduct.materials,
				description: $scope.newProduct.description
			}).$save(function(data){
				$scope.products.unshift(data);
				$scope.newProduct = null
			});
		}

		$scope.saveProduct = function(product) {
			product.$update();
		}

		$scope.destroyProduct = function(product, index) {
			$scope.product = Product.get({id: product.id}, function(product){
				product.$delete();
				$scope.products.splice(index, 1);
			})
		}

	}]);

