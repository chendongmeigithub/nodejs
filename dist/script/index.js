var index = angular.module('index',[]);
index.controller("navController", function($scope) {
    $scope.infoList = getNav();
}).controller("aboutController", function($scope) {
    $scope.infoList = myInfo();
}).controller("linkController", function($scope) {
    $scope.infoList = linkExchange();
});