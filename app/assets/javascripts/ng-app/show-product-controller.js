angular
	.module("ootd")
  .controller("showProductController", ['$rootScope', 'showProduct', '$scope', '$http', '$resource', '$stateParams', '$timeout', function($rootScope, showProduct, $scope, $http, $resource, $stateParams, $timeout){

	  var Favorite = $resource('api/favorites/:id', {id:'@id'});
	  var userFavorited;
	  $scope.product = showProduct;

	  $timeout(function(){
	  	$scope.productImages = showProduct.images;
      // Calls checkForFavorite when page loads to determine if heart icon should be filled
      checkForFavorite();
      console.log("user faves: " + $rootScope.currentUser.favorites)
	  })


    // Called when the heart icon is clicked. 
    $scope.toggleFavorite = function(product){
      if ( $(".heart").hasClass("red") ){
        destroyFavorite($scope.favorite);
      }
      else {
        createFavorite();
        // Call the current user API again to ensure the favorites list includes the newly created favorite
        $http.get('/api/currentuser').success(function(data){
          $rootScope.currentUser = data;
          console.log("user faves: " + $rootScope.currentUser.favorites)
          checkForFavorite();
        })
      }
    }

	  // Creates a new favorite. User ID is added in the rails FavoritesController
	  var createFavorite = function() {
	  	new Favorite({
		  	product_id: $scope.product.id
	  	}).$save(function(){
				$(".heart").addClass("red");
	  	});
	  }

	  // Destroys user's favorite. 
	  var destroyFavorite = function(favorite) {
	  	Favorite.get({id: favorite.id}, function(favorite){
	  		favorite.$delete(function(){
          $(".heart").removeClass("red");
          $http.get('/api/currentuser').success(function(data){
            $rootScope.currentUser = data;
            console.log("user faves: " + $rootScope.currentUser.favorites)
          });
        });
	  	});
	  }

    // Check if user has favorited the current product
    var checkForFavorite = function(){
      var faves = $rootScope.currentUser.favorites;
      if (faves.length > 0) {
        for(var i = 0; i < faves.length; i++) {
          if(faves[i].product_id == $scope.product.id){
            $(".heart").addClass("red");
            $scope.favorite = faves[i];
            console.log(faves[i].product_id);
          }
        }
      }
    }




}]);