angular
	.module("ootd")
  .controller("homeController", ["currentUser", '$scope', function(currentUser, $scope){
  		// $scope.currentUser;
  		$scope.currentUser = currentUser;
  		console.log("set current user: " + currentUser.id)

	}]);