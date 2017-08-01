angular.module('App')
    .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.searchTerm = '';
        var key = 'AIzaSyAvXicL5S7E64gpIVFNNxYkwgTyvAKijdU';
        var ytvideo = [];
        $scope.search = function() {
            $scope.myInterval = 0;
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
                console.log('series', res);
                $scope.series = res.data.data;
            }).catch(function error(err) {
                console.log(err);
            });
            $http({
                url: 'api/events',
                params: {
                    searchTerm: $scope.searchTerm
                }
            }).then(function success(res) {
                console.log('events', res);
                $scope.events = res.data.data;
            }).catch(function error(err) {
                console.log(err);
            });
            $http({
                url: 'https://api.themoviedb.org/3/search/movie?',
                params: {
                    api_key: '319d947494f89873025c8ccfc5c78927',
                    query: $scope.searchTerm
                }
            }).then(function success(res) {
                $scope.movies = res.data.results;
                console.log('movies', res);
            }).catch(function error(err) {
                console.log(err);
            });
            $http({
                url: 'https://www.googleapis.com/youtube/v3/search',
                params: {
                    part: 'snippet',
                    key: key,
                    q: $scope.searchTerm + 'trailer',
                    maxResults: 3
                }
            }).then(function success(res) {
                if (res.status == 200) {
                    var items = res.data.items;
                    items.forEach(function(item) {
                        ytvideo.push(item.id.videoId);
                    });
                    $scope.video = ytvideo;
                    console.log($scope.video)
                }
            }).catch(function error(err) {
                console.log(err)
            });
        };
    }]);