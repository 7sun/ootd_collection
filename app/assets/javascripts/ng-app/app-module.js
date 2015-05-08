angular
	.module("ootd", ['ngResource', 'templates', 'ui.router', 'ngAnimate'])
	.config(['$httpProvider', '$stateProvider' , '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {
      	$httpProvider.defaults.headers.common['X-CSRF-Token'] =
          $('meta[name=csrf-token]').attr('content');

        $stateProvider
        	.state("home", {
        		// url: "",
        		templateUrl: "pages/home.html",
                controller: "homeController"
                ,
                resolve: {
                    currentUser: ['usersFactory', function(usersFactory) {
                        return usersFactory.getUser()
                        .then(function(object){
                            return object.data;
                        })
                    }]
                }
        	})
            .state("contact", {
                // url: "/contact",
                templateUrl: "pages/contact.html"
            })
            .state("about", {
                // url: "/about",
                templateUrl: "pages/about.html"
            })
            .state("stockists", {
                // url:"/stockists",
                templateUrl: "stockists/stockists.html",
                controller: "stockistsController"
            })
        	.state("products", {
        		// url:"/products",
        		templateUrl: "products/products.html",
        		controller: "productsController",
                resolve: {
                    allProducts: ['productsFactory', function(productsFactory) {
                        return productsFactory.getAllProducts()
                        .then(function(object){
                            return object.data.products;
                        })
                    }],
                    currentUser: ['usersFactory', function(usersFactory) {
                        return usersFactory.getUser()
                        .then(function(object){
                            return object.data;
                        })
                    }]
                }
        	})
        	.state("showproduct", {
        		// url:"/products/:id",
        		templateUrl: "products/showproduct.html",
        		controller: "showProductController",
                params: {id: null},
                resolve: {
                    currentUser: ['usersFactory', function(usersFactory) {
                        return usersFactory.getUser()
                        .then(function(object){
                            return object.data;
                        })
                    }],
                    showProduct: ['productsFactory', '$stateParams', function(productsFactory, $stateParams) {
                        return productsFactory.getProduct($stateParams.id)
                        .then(function(object){
                            return object.data.product;
                        })
                    }]
                }
        	})
            .state("userfavorites", {
                // url: "/favorites",
                templateUrl: "favorites/favorites.html",
                controller: "favoritesController"
            })
            .state("lookbook", {
                // url: "/lookbook",
                templateUrl: "lookbook/lookbook.html"
            })

    }])

    .run(['$state', function($state){
        $state.go('home');
    }])

    .directive('onFinishRender', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                if (scope.$last === true) {
                    $timeout(function () {
                        scope.$emit('ngRepeatFinished');
                    });
                }
            }
        }
    });

    