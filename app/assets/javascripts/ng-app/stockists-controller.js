angular
	.module("ootd")
  .controller("stockistsController", ['filterFilter', '$scope', '$http', '$resource', function(filterFilter, $scope, $http, $resource){
		var Stockist = $resource('/api/stockists/:id', {id:'@id'},
			{
				// Returned stockists are Objects
				'query': { method: 'get', isArray: false}
			}
		);

		// Fetches all Stockists from DB
		Stockist.query(function(data){
			console.log('Fetched stockists!', 'Data', data);
			$scope.stockists = data["stockists"];
		});

	}]);