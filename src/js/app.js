const angular = require('angular');
require('./css/style.css');
const cs = require('./cowsay');
const app = angular.module('app', []);
app.controller('main', $scope => {
  $scope.cowOut = cs;
});
