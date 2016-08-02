const angular = require('angular');
const cowgreet = require('./cowgreet');
require('./css/main.css');

const app = angular.module('app', []);
app.controller('main', function($scope){
  $scope.cowtalk = 'Tokyo';
  $scope.greeting = cowgreet;

  $scope.names = [
    'small',
    'beavis.zen',
    'kitty',
    'koala',
    'chick',
    'hellokitty',
    'milk',
    'cheese',
    'skeleton',
    'elephant',
    'ghostbusters',
    'doge',
    'bunny',
    'bud-frogs'
  ];
});
