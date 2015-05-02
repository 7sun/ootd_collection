angular
	.module("ootd")
  .controller("showProductController", ['usersFactory', 'filterFilter', '$scope', '$http', '$resource', '$stateParams', function(usersFactory, filterFilter, $scope, $http, $resource, $stateParams){
	  var Product = $resource('api/products/:id', {id:'@id'});
	  var Favorite = $resource('api/favorites/:id', {id:'@id'});
	  var userFavorited;
	  $scope.product;

	  // Gets current product and array of product images
	  Product.get({id: $stateParams.id}, function(data){
	  	$scope.product = data['product'];
	  	$scope.productImages = data['product']['images'];
	  });

	  // Gets current user then checks if user has favorited the current product
    usersFactory.getUser()
      .success(function (data) {
          $scope.currentUser = data;
          checkForFavorite();
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
				$(".heart").toggleClass("fa-heart-o fa-heart");
	  	});
	  }

	  // Destroys user's favorite. 
	  var destroyFavorite = function(favorite) {
	  	Favorite.get({id: favorite.id}, function(favorite){
	  		console.log(favorite);
	  		console.log("favorite deleted!");
	  		favorite.$delete();
				$(".heart").toggleClass("fa-heart-o fa-heart");
	  	})
	  }

    // Check if user has favorited the current product
    var checkForFavorite = function(){
  		favs = $scope.product.favorites;
  		console.log("favs: " + favs);
  		if(favs.length == 0) {
  			console.log("No favorites :(");
  			userFavorited = false;
  		}
  		else {
    		for(var i = 0; i < favs.length; i++) {
    			if(favs[i].user_id == $scope.currentUser.id){
    				console.log("The current user has favorited this product");
    				$(".heart").removeClass("fa-heart-o");
    				$(".heart").addClass("fa-heart");
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




}]);