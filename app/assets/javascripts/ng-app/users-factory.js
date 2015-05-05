angular
	.module("ootd")
	.factory("usersFactory", ['$http', function($http){
		var currentUser = {};
		var url = '/api/currentuser';
		currentUser.getUser = function(id){
			return $http.get(url);
		}
		return currentUser;
	}])

// angular
// 	.module("ootd")
// 	.factory("usersFactory", ['$http', '$q', function($http, $q){
// 		var service = {};
// 		var url = '/api/currentuser';

// 		service.getCurrentUser = function() {
// 			var def = $q.defer();
// 			$http.get(url).success(function (data) {
// 	    	def.resolve(data);
// 			});
// 			return def.promise;
// 		}

// 		return service;
// 	}])