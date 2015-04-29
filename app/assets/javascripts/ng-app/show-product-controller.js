angular
	.module("ootd")
  .controller("showProductController", ['filterFilter', '$scope', '$http', '$resource', '$stateParams', function(filterFilter, $scope, $http, $resource, $stateParams){
	  var Product = $resource('api/products/:id', {id:'@id'});
	  Product.get({id: $stateParams.id}, function(data){
	  	$scope.product = data['product'];
	  	$scope.productImages = data['product']['images'];
	  	console.log("images: " + $scope.productImages);
	  });


}]);