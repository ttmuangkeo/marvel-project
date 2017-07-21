angular.module('myCtrls', ['somethingServices'])
.controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
	 $scope.searchTerm = 'spider-man';
	 $scope.onLoad  = function() {
	$http({
		url: '/api/characters' 
	}).then(function success(res) {
		console.log(res)
		$scope.characters = res.data.data
	}).catch(function error(err) {
		console.log(err);
	})
	 	
	 }

}])

