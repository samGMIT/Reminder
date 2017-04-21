angular.module('starter.controllers', [])



.controller('OneCtrl', function($scope, $http) {
	
	 $scope.data = {};
	$scope.response = "before ";
    $scope.submit = function(){
        var link = 'http://localhost/Reminder/api.php';
		    $scope.response = "after ";
		
 
        
		$http.post(link, {username : $scope.data.username}).then(function (res){
         $scope.response = res.data;
			
        });
		
  };
})

.controller('TwoCtrl', function($scope, ionicTimePicker)  {
	
	$scope.openTimePicker1 = function () {
      var ipObj1 = {
        callback: function (val) {
          if (typeof (val) === 'undefined') {
            console.log('Time not selected');
          } else {
            var selectedTime = new Date(val * 1000);
            console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M');
          }
        },
        inputTime: 0,
        format: 12,
        setLabel: 'Set'
      };
      ionicTimePicker.openTimePicker(ipObj1);
    };
})

.controller('ThreeCtrl', function($scope) {});
