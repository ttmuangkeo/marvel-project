angular.module('App')
    .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.searchTerm = '';



        $scope.search = function() {
            $scope.myInterval = 8000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            $http({
                url: '/api/characters',
                params: {
                    searchTerm: $scope.searchTerm,
                }
            }).then(function success(res) {
                console.log('characters', res);
                $scope.characters = res.data.data;
            }).catch(function error(err) {
                console.log(err);
            });
            $http({
                url: 'api/series',
                params: {
                    searchTerm: $scope.searchTerm
                }
            }).then(function success(res) {
                console.log('series', res)
                $scope.series = res.data.data;
            }).catch(function error(err) {
                console.log(err)
            });
            $http({
                url: 'api/events',
                params: {
                    searchTerm: $scope.searchTerm
                }
            }).then(function success(res) {
                console.log('events', res)
                $scope.events = res.data.data;
            }).catch(function error(err) {
                console.log(err)
            });
        $http({
            url: 'https://api.themoviedb.org/3/search/movie?',
            params: {
                api_key: '319d947494f89873025c8ccfc5c78927',
                query: $scope.searchTerm
            }
        }).then(function success(res) {
            $scope.movies = res.data.results
            console.log('movies', res)
        }).catch(function error(err) {
            console.log(err);
        })
        };
    }])

// .controller('ComicCtrl', ['$scope', '$http', function($scope, $http) {
//         $scope.comics = null;
//         $http({
//             url: '/api/comics'
//         }).then(function success(res) {
//             console.log(res.data.data)
//             $scope.comics = res.data.data
//         }).catch(function err(err) {
//             console.log(err);
//         });
//     }])
//     .controller('EventCtrl', ['$scope', '$http', function($scope, $http) {
//         $scope.searchTerm = '';
//         $scope.search = function() {
//             $http({
//                 url: 'api/events',
//                 params: {
//                     searchTerm: $scope.searchTerm
//                 }
//             }).then(function success(res) {
//                 $scope.events = res.data.data
//                 console.log(res)
//             }).catch(function error(err) {
//                 console.log(err)
//             });
//         }
//     }])
//     .controller('SeriesCtrl', ['$scope', '$http', function($scope, $http) {
//         $scope.searchTerm = '';
//         $scope.search = function() {
//             $http({
//                 url: 'api/series',
//                 params: {
//                     searchTerm: $scope.searchTerm
//                 }
//             }).then(function success(res) {
//                 console.log(res)
//                 $scope.series = res.data.data
//             }).catch(function error(err) {
//                 console.log(err)
//             });
//         }
//     }])