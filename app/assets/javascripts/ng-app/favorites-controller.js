angular
	.module("ootd")
  .controller("favoritesController", ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams){
  	$http.get('/api/favorites').success(function(data){
  		console.log("Fetched Favorites Data! " + data);
  		$scope.favProducts = data['favorites'];
  	});


	}]);