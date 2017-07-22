angular.module('App', ['ui.router', 'ui.bootstrap'])
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
            .state('events', {
                url: '/events',
                templateUrl: 'app/views/events.html',
                controller: 'EventCtrl'
            })
            .state('series', {
                url: '/series',
                templateUrl: 'app/views/series.html',
                controller: 'SeriesCtrl'
            })

        $locationProvider.html5Mode(true);
    }]);