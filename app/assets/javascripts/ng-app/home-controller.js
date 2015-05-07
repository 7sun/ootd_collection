angular
	.module("ootd")
  .controller("homeController", ['currentUser', '$scope', function(currentUser, $scope){
  	if(currentUser){
  		$scope.currentUser = currentUser;
  		console.log("set current user: " + currentUser)
  	}
  	else {
  		console.log("no current user here!");
  	}

	}]);