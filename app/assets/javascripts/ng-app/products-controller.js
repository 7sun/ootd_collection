angular
	.module("ootd")
  .controller("productsController", ['Products',
                                      '$rootScope',
                                      'filterFilter',
                                      '$scope',
                                      '$http',
                                      '$timeout',
                                      function(
                                        Products,
                                        $rootScope,
                                        filterFilter,
                                        $scope, 
                                        $http, 
                                        $timeout){





      $rootScope.currentUser; 
      $scope.products = new Products();
      $timeout(function(){
        // $scope.products = products.getAllProducts();
        // Creates filtered arrays for each product category
        $scope.productsArray = $scope.products;
        $scope.topsArray = filterFilter($scope.products, 'tops');
        $scope.pantsArray = filterFilter($scope.products, 'pants');
        $scope.skirtsArray = filterFilter($scope.products, 'skirt');
        $scope.dressesArray = filterFilter($scope.products, 'dresses');
        $scope.jumpsuitsArray = filterFilter($scope.products, 'jumpsuits');
        $scope.jacketsArray = filterFilter($scope.products, 'jackets');
      })

			
	    // Called when the heart icon is clicked. 
		  $scope.toggleFavorite = function(product){
        var idName = '#heart-' + product;
		  	if ( $(idName).hasClass("red") ){
		  		destroyFavorite(product);
		  	}
		  	else {
		  		createFavorite(product);
		  			// Call the current user API again to ensure the favorites list includes the newly created favorite
		  			$http.get('/api/currentuser').success(function(data){
              $rootScope.currentUser = data;
		  				// currentUser = data;
		  				checkForFavorite();
		  			})
		  	}
		  }

  	  // Creates a new favorite. User ID is added in the rails FavoritesController
  	  var createFavorite = function(product) {
  	  	$http.post('/api/favorites/', {product_id: product})
  	  	.success(function(){
  	  		var idName = "#heart-" + product;
  				$(idName).addClass("red");
  	  	});
  	  }

  	  // Destroys user's favorite. 
  	  var destroyFavorite = function(product) {
  	  	var userFaves = $rootScope.currentUser.favorites;
  	  	for(var i = 0; i < userFaves.length; i++) {
    			if(userFaves[i].product_id == product){
    				var favorite = userFaves[i];
    				$http.delete('/api/favorites/' + favorite.id)
    				.success(function(){
    					var idName = "#heart-" + product;
  						$(idName).removeClass("red");
              $http.get('/api/currentuser').success(function(data){
                $rootScope.currentUser = data;
              })
    				})
    			}
    		}
    	}

      // Check if user has favorited the product
      var checkForFavorite = function(){
        var faves = $rootScope.currentUser.favorites;
        for(var i = 0; i < faves.length; i++) {
          var idName = "#heart-" + faves[i].product_id;
          $(idName).addClass("red");
          console.log(faves[i].product_id);
      	}
      }
      
      // Waits for ngRpeat to finish before checking for favorites to add red hearts
      $scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
        console.log("checked for favorites on load");
        checkForFavorite();
      });

	}]);

