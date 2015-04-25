angular
	.module("ootd")
	.config(['$httpProvider', function($httpProvider) {
  	$httpProvider.defaults.headers.common['X-CSRF-Token'] =
      $('meta[name=csrf-token]').attr('content');
  }])
  .controller("productController", ['filterFilter', '$scope', '$http', '$resource', function(filterFilter, $scope, $http, $resource){
		var Product = $resource('/api/products/:id', {id:'@id'},
			{
				'update': { method: 'patch'},
				// Returned products are Objects
				'query': { method: 'get', isArray: false}
			}
		);

		// Temporary image loading test for product page
		Product.query(function(data){
			$scope.productImages = data["products"][7]['images'];
		});

		// Fetches all Products from DB
		Product.query(function(data){
			console.log('Fetched products!', 'Data', data);
			$scope.products = data["products"];
			// Creates filtered arrays for each product category
			$scope.productsArray = $scope.products;
			$scope.topsArray = filterFilter($scope.products, 'tops');
			$scope.pantsArray = filterFilter($scope.products, 'pants');
			$scope.skirtsArray = filterFilter($scope.products, 'skirt');
			$scope.dressesArray = filterFilter($scope.products, 'dresses');
			$scope.jacketsArray = filterFilter($scope.products, 'jackets');
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

