angular.module('App', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/404');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/home.html',
            controller: 'HomeCtrl'
        })
        .state('comics', {
        	url: '/comics',
        	templateUrl: 'app/views/comic.html',
        	controller: 'ComicCtrl'
        })
    $locationProvider.html5Mode(true);
}]);

