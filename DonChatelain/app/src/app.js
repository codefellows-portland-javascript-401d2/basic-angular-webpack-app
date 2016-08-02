const greeting = require('./greeting');
const angular = require('angular');
const material = require('angular-material');

require(__dirname + '/css/main.css');

const app = angular.module('app', [material]); //sets a new module
// angular.module('app'); // gets an already set module

app.controller('main', function($scope) {
  $scope.sayColor = 'red';
  $scope.color = {
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255)
  };
  $scope.$watch('sayColor', (color) => {
    console.log(color, $scope.sayColor);
  });
  $scope.greeting = greeting;
});

// console.log(greeting('portland'));