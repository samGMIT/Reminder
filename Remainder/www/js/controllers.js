angular.module('starter.controllers', [])



.controller('OneCtrl', function($scope) {
	
	 $scope.data = {};
	$scope.response = "before ";
    $scope.submit = function(){
        var link = 'http://localhost/Reminder/api.php';
		    $scope.response = "after ";
		
 
        
		$http.post(link, {username : $scope.data.username}).then(function (res){
         $scope.response = "res.data " ;
			
        });
		
  };
})

.controller('TwoCtrl', function($scope) {})

.controller('ThreeCtrl', function($scope) {});
