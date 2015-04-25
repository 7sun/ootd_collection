angular
	.module("ootd", ['ngResource', 'ngAnimate', 'ui.router', 'templates'])
	.config(['$httpProvider', '$stateProvider' , '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {
  	$httpProvider.defaults.headers.common['X-CSRF-Token'] =
      $('meta[name=csrf-token]').attr('content');

    $stateProvider
    	.state("home", {
    		url: "",
    		template: "<h1>Sweet like bear meat</h1>"
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