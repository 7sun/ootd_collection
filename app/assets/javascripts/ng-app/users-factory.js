angular
	.module("ootd")
	.factory("usersFactory", ['$http', function($http){
		var currentUser = {};
		var url = '/api/currentuser';
		currentUser.getUser = function(){
			return $http.get(url);
			// return "bob";
		}
		return currentUser;
	}])