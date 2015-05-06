angular
	.module("ootd", ['ngResource', 'ngAnimate', 'ui.router', 'templates'])
	.config(['$httpProvider', '$stateProvider' , '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {
  	$httpProvider.defaults.headers.common['X-CSRF-Token'] =
      $('meta[name=csrf-token]').attr('content');

    $stateProvider
    	.state("home", {
    		url: "",
    		templateUrl: "pages/index.html", //removes assets/ from path for heroku
            controller: "homeController",
            resolve: {
                currentUser: function(usersFactory) {
                    return usersFactory.getUser()
                    .then(function(object){
                        return object.data;
                    })
                }
            }
    	})
        .state("contact", {
            url: "/contact",
            templateUrl: "pages/contact.html" //removes  from path for heroku
        })
        .state("about", {
            url: "/about",
            templateUrl: "pages/about.html" //removes  from path for heroku
        })
        .state("stockists", {
            url:"/stockists",
            templateUrl: "stockists/index.html", //removes  from path for heroku
            controller: "stockistsController"
        })
    	.state("products", {
    		url:"/products",
    		templateUrl: "products/index.html", //removes  from path for heroku
    		controller: "productsController",
            resolve: {
                allProducts: function(productsFactory) {
                    return productsFactory.getAllProducts()
                    .then(function(object){
                        return object.data.products;
                    })
                },
                currentUser: function(usersFactory) {
                    return usersFactory.getUser()
                    .then(function(object){
                        return object.data;
                    })
                }
            }
    	})
    	.state("showproduct", {
    		url:"/products/:id",
    		templateUrl: 'products/show.html', //removes  from path for heroku
    		controller: "showProductController",
            resolve: {
                currentUser: function(usersFactory) {
                    return usersFactory.getUser()
                    .then(function(object){
                        return object.data;
                    })
                },
                showProduct: function(productsFactory, $stateParams) {
                    return productsFactory.getProduct($stateParams.id)
                    .then(function(object){
                        return object.data.product;
                    })
                }
            }
    	})
        .state("userfavorites", {
            url: "/favorites",
            templateUrl: 'favorites/index.html', //removes  from path for heroku
            controller: "favoritesController"
        })

  }])