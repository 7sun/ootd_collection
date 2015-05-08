angular
	.module("ootd")
  .controller("showProductController", ['currentUser', 'showProduct', '$scope', '$http', '$resource', '$stateParams', '$timeout', function(currentUser, showProduct, $scope, $http, $resource, $stateParams, $timeout){

	  var Favorite = $resource('api/favorites/:id', {id:'@id'});
	  var userFavorited;
	  $scope.currentUser = currentUser;
	  $scope.product = showProduct;

	  $timeout(function(){
	  	$scope.productImages = showProduct.images;
	  })


    // Called when the heart icon is clicked. 
	  $scope.toggleFavorite = function(){
	  	if (userFavorited){
	  		destroyFavorite($scope.favorite);
	  		userFavorited = false;
	  	}
	  	else {
	  		createFavorite();
	  		$http.get('/api/products/' + $stateParams.id).success(function(data){
	  			$scope.product.favorites = data.product.favorites;
	  			checkForFavorite();
	  		});
	  	}
	  }

	  // Creates a new favorite. User ID is added in the rails FavoritesController
	  var createFavorite = function() {
	  	console.log("create favorite called!");
	  	console.log("product id: " + $scope.product.id)
	  	new Favorite({
		  	product_id: $scope.product.id
	  	}).$save(function(){
				$(".heart").addClass("red");
	  	});
	  }

	  // Destroys user's favorite. 
	  var destroyFavorite = function(favorite) {
	  	Favorite.get({id: favorite.id}, function(favorite){
	  		console.log(favorite);
	  		console.log("favorite deleted!");
	  		favorite.$delete();
				$(".heart").removeClass("red");
	  	})
	  }

    // Check if user has favorited the current product
    var checkForFavorite = function(){
  		favs = $scope.product.favorites;
  		if(favs.length == 0) {
  			console.log("No favorites :(");
  			userFavorited = false;
  		}
  		else {
    		for(var i = 0; i < favs.length; i++) {
    			if(favs[i].user_id == $scope.currentUser.id){
    				console.log("The current user has favorited this product");
    				$(".heart").addClass("red");
    				userFavorited = true;
    				$scope.favorite = favs[i];
    			}
    			else{
    				console.log("This user did not favorite this :(");
    				userFavorited = false;
    			}
    		}
    	}
    	console.log("userfavorite?: " + userFavorited);
	  }

	  // Calls checkForFavorite when page loads to determine if heart icon should be filled
	  checkForFavorite();


}]);