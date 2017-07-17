angular.module('myCtrls', ['somethingServices'])
.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
	$http({
		url: 'https://api.themoviedb.org/3/movie/550?',
		params: {
		api_key: '319d947494f89873025c8ccfc5c78927'
		}
	}).then(function success(res) {
		console.log(res)
		$scope.movie = res.data
	}).catch(function error(err) {
		console.log(err)
	})
}])
