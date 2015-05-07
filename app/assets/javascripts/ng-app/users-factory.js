angular
	.module("ootd")
	.factory("usersFactory", ['$http', function($http){
		var currentUser = {};
		var url = '/api/currentuser';
		console.log("usersFactory url var: " + url)
		currentUser.getUser = function(){
			// return $http.get(url);
			return {name:"bob", id: 100};
		}
		return currentUser;
	}])