const angular = require ('angular');
const greeting = require('./greeting');
const cowsay = require('./cowsay');
const cowsay2 = require('./cowsay2');
require('./css/main.css');

const app = angular.module('app', [])
.controller('cow', function($scope) {
  $scope.cowsay = cowsay;
});


app.controller('cow2', function($scope) {
  $scope.cowsay2 = cowsay2;
});

app.controller('greetz', function($scope){
  $scope.hello = 'Make the cows talk!';
});
