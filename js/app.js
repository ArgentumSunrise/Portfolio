var app = angular.module('portfolioApp', []);


app.controller('portfolioCtrl', ['$scope', function ($scope) {
    $scope.orderly = "Arduous";
}]);

function shadowToggle(isButton, subject) {
    var x = (isButton ? "button" : "txt");
    subject.toggleClass(x + "-active");
}