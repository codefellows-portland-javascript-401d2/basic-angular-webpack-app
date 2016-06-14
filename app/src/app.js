require('./app.css');

const angular = require('angular');

const app = angular.module('app', []);

app.controller('main', ($scope) => {
  $scope.greeting = 'Hello World!';
});
