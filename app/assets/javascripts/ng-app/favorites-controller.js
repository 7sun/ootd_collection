angular
	.module("ootd")
  .controller("favoritesController", ['usersFactory', '$scope', '$http', '$resource', '$stateParams', function(usersFactory, $scope, $http, $resource, $stateParams){
  	$http.get('/api/favorites').success(function(data){
  		console.log("Fetched Favorites Data! " + data);
  		$scope.favProducts = data['favorites'];
  	});


	}]);