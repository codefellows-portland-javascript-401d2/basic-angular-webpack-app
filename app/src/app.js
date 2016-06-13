const angular = require ('angular');
const greeting = require('./greeting');
const cowsay = require('./cowsay');
require('./css/main.css');

const app = angular.module('app', [])
.controller('main', function($scope) {
  $scope.place = 'pdx';
  $scope.greeting = greeting;
});
app.controller('cow', function($scope) {
  $scope.cowsay = cowsay;
});
