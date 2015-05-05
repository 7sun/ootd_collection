angular
	.module("ootd")
  .controller("productsController", ['allProducts', 'filterFilter', '$scope', function(allProducts, filterFilter, $scope){

			$scope.products = allProducts;
			
			// Creates filtered arrays for each product category
			$scope.productsArray = $scope.products;
			$scope.topsArray = filterFilter($scope.products, 'tops');
			$scope.pantsArray = filterFilter($scope.products, 'pants');
			$scope.skirtsArray = filterFilter($scope.products, 'skirt');
			$scope.dressesArray = filterFilter($scope.products, 'dresses');
			$scope.jacketsArray = filterFilter($scope.products, 'jackets');

	}]);

