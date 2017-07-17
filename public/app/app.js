var app = angular.module('App', ['ui.router', 'ui.bootstrap', 'myCtrls']);
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/home.html',
            controller: 'HomeCtrl'
        })

    $locationProvider.html5Mode(true);
}]);

