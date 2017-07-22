angular.module('App')
    .controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.searchTerm = '';
        $scope.search = function() {
            console.log($scope.searchTerm)
            $http({
                url: '/api/characters',
                params: {
                    searchTerm: $scope.searchTerm,
                }
            }).then(function success(res) {
                console.log(res);
                $scope.characters = res.data.data;
            }).catch(function error(err) {
                console.log(err);
            });
        }
    }])
    .controller('ComicCtrl', ['$scope', '$http', function($scope, $http) {
        $scope.comics = null;
        $http({
            url: '/api/comics'
        }).then(function success(res) {
            console.log(res.data.data)
            $scope.comics = res.data.data
        }).catch(function err(err) {
            console.log(err);
        });
    }])
    .controller('EventCtrl', ['$scope', '$http', function($scope, $http) {
    	$scope.searchTerm = '';
    	$scope.search = function() {    		
    	$http({
    		url: 'api/events',
    		params: {
    			searchTerm: $scope.searchTerm
    		}
    	}).then(function success(res) {
    		$scope.events = res.data.data
    		console.log(res) 
    	}).catch(function error(err) {
    		console.log(err)
    	});
    	}
    }])
    .controller('SeriesCtrl', ['$scope', '$http', function($scope, $http) {
    	$scope.searchTerm = '';
    	$scope.search = function() {
    	$http({
    		url: 'api/series',
    		params: {
    			searchTerm: $scope.searchTerm
    		}
    	}).then(function success(res) {
    		console.log(res)
    		$scope.series = res.data.data
    	}).catch(function error(err) {
    		console.log(err)
    	});
    	}
    }])








