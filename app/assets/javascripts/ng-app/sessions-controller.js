angular
	.module("ootd")
  .controller("sessionsController", ['usersFactory', '$scope', '$rootScope', '$http', '$state', function(usersFactory, $scope, $rootScope, $http, $state){
  	
    console.log("loads session controller");
  	usersFactory.getUser()
    .then(function(object){
        $rootScope.currentUser = object.data;
        console.log(object.data);
    })

  	$scope.login = function() {
  	  $http.post('/api/login', {user: {email: $scope.email, password: $scope.password}}).success(function(data){
  	    if(data.error) {
  	      // $('.error-flash').addClass('alert alert-danger').html('<span class="glyphicon glyphicon-exclamation-sign"></span> ' + data.error);
  	      console.log("incorrect login info");
  	    } else {
  	      $http.get('/api/currentuser').success(function(data){
  	        if(data) {
  	          $rootScope.currentUser = data;
  	          console.log($scope.currentUser);
  	          console.log("logged in!");
  	          $state.go("main.products");
  	        }
  	      });
  	    }
  	  });
  	};

  	$scope.logout = function() {
  		$http.get('api/logout').success(function(){
        console.log("logout api called!");
  			$http.get('/api/currentuser').success(function(){
			    $rootScope.currentUser = false;
			    console.log("logged out!");
			   	$state.go("home");
        })
      })
    }

  }]);