angular
	.module("ootd", ['ngResource', 'templates', 'ui.router', 'ngAnimate'])
	.config(['$httpProvider', '$stateProvider' , '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider) {
      	$httpProvider.defaults.headers.common['X-CSRF-Token'] =
          $('meta[name=csrf-token]').attr('content');

        $stateProvider
            .state("home", {
                // url: "",
                templateUrl: "pages/home.html",
                controller: "sessionsController"
            })
            .state("home.login", {
                templateUrl: "pages/login.html",
                controller: "sessionsController"
            })
            .state("main", {
                templateUrl: "pages/main.html"
            })
            .state("main.contact", {
                // url: "/contact",
                templateUrl: "pages/contact.html"
            })
            .state("main.about", {
                // url: "/about",
                templateUrl: "pages/about.html"
            })
            .state("main.stockists", {
                // url:"/stockists",
                templateUrl: "stockists/stockists.html",
                controller: "stockistsController"
            })
        	.state("main.products", {
        		// url:"/products",
        		templateUrl: "products/products.html",
        		controller: "productsController",
                resolve: {
                    allProducts: ['productsFactory', function(productsFactory) {
                        return productsFactory.getAllProducts()
                        .then(function(object){
                            return object.data.products;
                        })
                    }]
                }
        	})
        	.state("main.showproduct", {
        		// url:"/products/:id",
        		templateUrl: "products/showproduct.html",
        		controller: "showProductController",
                params: {id: null},
                resolve: {
                    showProduct: ['productsFactory', '$stateParams', function(productsFactory, $stateParams) {
                        return productsFactory.getProduct($stateParams.id)
                        .then(function(object){
                            return object.data.product;
                        })
                    }]
                }
        	})
            .state("main.userfavorites", {
                // url: "/favorites",
                templateUrl: "favorites/favorites.html",
                controller: "favoritesController"
            })
            .state("main.lookbook", {
                // url: "/lookbook",
                templateUrl: "lookbook/lookbook.html"
            })

    }])

    .run(['$state', function($state){
        $state.go('home');
    }])

    .directive('onFinishRender', function($timeout){
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
    })

    .directive('routeLoadingIndicator', function($rootScope){
      return {
        restrict:'E',
        template:"<div class='spinner'><h1 ng-if='isRouteLoading'>Loading...<i class='fa fa-spinner fa-spin'></i></h1></div>",
        link:function(scope, elem, attrs){
          scope.isRouteLoading = false;

          $rootScope.$on('$routeChangeStart', function(){
            scope.isRouteLoading = true;
          });

          $rootScope.$on('$routeChangeSuccess', function(){
            scope.isRouteLoading = false;
          });
        }
      };
    });

    