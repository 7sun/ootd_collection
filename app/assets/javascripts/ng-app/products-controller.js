angular
	.module("ootd")
  .controller("productsController", ['allProducts', 'currentUser', 'filterFilter', '$scope', '$http', function(allProducts, currentUser, filterFilter, $scope, $http){

			$scope.products = allProducts;
			var currentUser = currentUser;
			
			// Creates filtered arrays for each product category
			$scope.productsArray = $scope.products;
			$scope.topsArray = filterFilter($scope.products, 'tops');
			$scope.pantsArray = filterFilter($scope.products, 'pants');
			$scope.skirtsArray = filterFilter($scope.products, 'skirt');
			$scope.dressesArray = filterFilter($scope.products, 'dresses');
			$scope.jacketsArray = filterFilter($scope.products, 'jackets');


	    // Called when the heart icon is clicked. 
		  $scope.toggleFavorite = function(index, product){
		  	if (window['faves' + [index]] == true){
		  		destroyFavorite(index, product);
		  		window['faves' + [index]] = false;
		  	}
		  	else {
		  		createFavorite(index, product);
		  			// Call the current user API again to ensure the favorites list includes the newly created favorite
		  			$http.get('/api/currentuser').success(function(data){
		  				currentUser = data;
		  				checkForFavorite();
		  			})
		  	}
		  }

  	  // Creates a new favorite. User ID is added in the rails FavoritesController
  	  var createFavorite = function(index, product) {
  	  	$http.post('/api/favorites/', {product_id: product})
  	  	.success(function(){
  	  		var idName = "#heart-" + index;
  				$(idName).toggleClass("fa-heart-o fa-heart");
  	  	});
  	  }

  	  // Destroys user's favorite. 
  	  var destroyFavorite = function(index, product) {
  	  	var userFaves = currentUser.favorites;
  	  	for(var i = 0; i < userFaves.length; i++) {
    			if(userFaves[i].product_id == product){
    				var favorite = userFaves[i];
    				$http.delete('/api/favorites/' + favorite.id)
    				.success(function(){
    					var idName = "#heart-" + index;
  						$(idName).toggleClass("fa-heart-o fa-heart");
    				})
    			}
    		}
    	}


      // Check if user has favorited the product
      var checkForFavorite = function(){
      	for(var i = 0; i < $scope.products.length; i++) {
      		var faves = $scope.products[i].favorites;
      		for(var j = 0; j < faves.length; j++) {
      			if(faves[j].user_id == currentUser.id){
      				var idName = "#heart-" + [i];
      				$(idName).removeClass("fa-heart-o");
      				$(idName).addClass("fa-heart");
      				window['faves' + [i]] = true;
      			}
      		}
      	}
      }

      // Waits 20ms for ng-repeat to load all icons before adding the fa-heart class.
      setTimeout(
      	function(){
      		checkForFavorite();
      	}, 20);

	}]);

