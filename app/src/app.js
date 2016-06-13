const greeting = require('./greeting');
const angular = require('angular');

require('./css/main.css');

const app = angular.module('app', []); //sets a new module
// angular.module('app'); // gets an already set module

app.controller('main', function($scope) {
  // $scope.place = 'pdx';
  $scope.greeting = greeting;
});

// console.log(greeting('portland'));