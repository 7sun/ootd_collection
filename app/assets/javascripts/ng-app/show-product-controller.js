angular
	.module("ootd")
  .controller("showProductController", ['usersFactory', 'filterFilter', '$scope', '$http', '$resource', '$stateParams', function(usersFactory, filterFilter, $scope, $http, $resource, $stateParams){
	  var Product = $resource('api/products/:id', {id:'@id'});
	  // Gets current product and array of product images
	  Product.get({id: $stateParams.id}, function(data){
	  	$scope.product = data['product'];
	  	$scope.productImages = data['product']['images'];
	  });

	  var Favorite = $resource('api/favorites/:id', {id:'@id'});

	  $scope.toggleFavorite = function(){
	  	if ($scope.userFavorited){
	  		$scope.destroyFavorite($scope.favorite);
	  	}
	  	else {
	  		$scope.createFavorite();
	  		$scope.userFavorited = true;
	  	}
	  }

	  // Creates a new favorite. User ID is added in the FavoritesController
	  $scope.createFavorite = function() {
	  	console.log("create favorite called!");
	  	console.log("product id: " + $scope.product.id)
	  	new Favorite({
		  	product_id: $scope.product.id
	  	}).$save(function(){
				$(".heart").toggleClass("fa-heart-o fa-heart");
	  	});
	  }

	  $scope.destroyFavorite = function(favorite) {
	  	Favorite.get({id: favorite.id}, function(favorite){
	  		console.log(favorite);
	  		favorite.$delete();
				$(".heart").toggleClass("fa-heart-o fa-heart");
	  	})
	  }

    usersFactory.getUser()
      .success(function (data) {
          $scope.currentUser = data;
    // usersFactory.getUser().then(function(data) {
    // 	$scope.currentUser = data;

        favs = $scope.product.favorites
        if(favs.length == 0) {
        	console.log("No favorites :(");
        }
        for(var i = 0; i < favs.length; i++) {
        	if(favs[i].user_id == $scope.currentUser.id){
        		console.log("The current user has favorited this product");
        		$(".heart").toggleClass("fa-heart-o fa-heart");
        		$scope.userFavorited = true;
        		$scope.favorite = favs[i];
        	}
        	else{
        		console.log("This user did not favorite this :(");
        	}
        }
    })



}]);