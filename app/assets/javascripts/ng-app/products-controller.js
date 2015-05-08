angular
	.module("ootd")
  .controller("productsController", ['allProducts', 'currentUser', 'filterFilter', '$scope', '$http', '$timeout', function(allProducts, currentUser, filterFilter, $scope, $http, $timeout){

      var currentUser = currentUser;
      $scope.products = [];
      $timeout(function(){
        $scope.products = allProducts;
        // Creates filtered arrays for each product category
        $scope.productsArray = $scope.products;
        $scope.topsArray = filterFilter($scope.products, 'tops');
        $scope.pantsArray = filterFilter($scope.products, 'pants');
        $scope.skirtsArray = filterFilter($scope.products, 'skirt');
        $scope.dressesArray = filterFilter($scope.products, 'dresses');
        $scope.jacketsArray = filterFilter($scope.products, 'jackets');
      })
			



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
  				$(idName).addClass("red");
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
  						$(idName).removeClass("red");
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
      				$(idName).addClass("red");
      				window['faves' + [i]] = true;
      			}
      		}
      	}
      }

      $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
        checkForFavorite();
      });

	}]);

