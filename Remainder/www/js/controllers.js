angular.module('starter.controllers', [])

.controller('oneCtrl', function($scope, $http) {
    $scope.data = {};
 
    $scope.submit = function(){
        var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
 
        $http.post(link, {username : $scope.data.username}).then(function (res){
            $scope.response = res.data;
        });
    };
});

.controller('twoCtrl', function($scope) {})

.controller('threeCtrl', function($scope) {});
