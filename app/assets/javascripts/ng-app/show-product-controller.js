angular
	.module("ootd")
  .controller("showProductController", ['filterFilter', '$scope', '$http', '$resource', '$stateParams', function(filterFilter, $scope, $http, $resource, $stateParams){
	  var Product = $resource('api/products/:id', {id:'@id'});
	  // Gets current product and array of product images
	  Product.get({id: $stateParams.id}, function(data){
	  	$scope.product = data['product'];
	  	$scope.productImages = data['product']['images'];
	  });

	  var Favorite = $resource('api/favorites/:id', {id:'@id'});
	  // Creates a new favorite. User ID is added in the FavoritesController
	  $scope.createFavorite = function() {
	  	console.log("create favorite called!");
	  	console.log("product id: " + $scope.product.id)
	  	new Favorite({
		  	product_id: $scope.product.id
	  	}).$save();
	  }

	  $scope.destroyFavorite = function(favorite) {
	  	Favorite.get({id: favorite.id}, function(favorite){
	  		favorite.$delete();
	  	})
	  }


}]);