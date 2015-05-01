angular
	.module("ootd", ['ngResource', 'ngAnimate', 'ui.router', 'templates'])
	.config(['$httpProvider', '$stateProvider' , '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {
  	$httpProvider.defaults.headers.common['X-CSRF-Token'] =
      $('meta[name=csrf-token]').attr('content');

    $stateProvider
    	.state("home", {
    		url: "",
    		templateUrl: "assets/pages/index.html"
            // ,
            // resolve: {
            //     currentUser: function(UsersFactory) {
            //         return UsersFactory.getUser();
            //     }
            // }
            // Inject "currentUser" into the controller for access
    	})
        .state("contact", {
            url: "/contact",
            templateUrl: "assets/pages/contact.html"
        })
        .state("about", {
            url: "/about",
            templateUrl: "assets/pages/about.html"
        })
        .state("stockists", {
            url:"/stockists",
            templateUrl: "assets/stockists/index.html",
            controller: "stockistsController"
        })
    	.state("products", {
    		url:"/products",
    		templateUrl: "assets/products/index.html",
    		controller: "productsController"
    	})
    	.state("showproduct", {
    		url:"/products/:id",
    		templateUrl: 'assets/products/show.html',
    		controller: "showProductController"
    	})

  }])