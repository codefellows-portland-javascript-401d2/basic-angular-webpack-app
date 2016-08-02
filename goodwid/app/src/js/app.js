require('../css/style.css');
const angular = require('angular');
const app = angular.module('app', []);
const cs = require('./cowsay');

app.controller('main', $scope => {
  $scope.saysTheCow = 'moo';
  $scope.cow = cs;
});
