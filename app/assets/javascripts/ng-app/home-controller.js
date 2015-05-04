angular
	.module("ootd")
  .controller("homeController", ['currentUser', 'filterFilter', '$scope', '$http', '$resource', function(currentUser, filterFilter, $scope, $http, $resource){

  	console.log(currentUser.data)
  	$scope.currentUser = currentUser.data;

	}]);