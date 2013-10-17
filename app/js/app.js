'use strict';

/* App Module */

var owl = angular.module('owl', ['ngRoute'])

owl.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'partials/index.html'}).
      otherwise({redirectTo: '/'});
}]);