angular
	.module("ootd")
  .controller("homeController", ['currentUser', '$scope', function(currentUser, $scope){
  	$scope.currentUser = currentUser;

	}]);