'use strict';

/* Controllers */

owl.
  controller('QDetailCtrl', ['$scope', '$routeParams', 'Data', function($scope, $routeParams, Data) {
  	$scope.question = Data.qetQ($routeParams.id);
    $scope.addComment = function(comment){
      Data.addComment( comment, $routeParams.id);
    }
  }]).
  controller('FeedCtrl', ['$scope', 'Data', function($scope, Data) {
  	$scope.questions = Data.qetQs();
  }]).
  controller('NewQCtrl', ['$scope', 'Data', function($scope, Data) {
  	$scope.addQuestion = Data.addQ;
  }]).
  controller('QSumCtrl', ['$scope', 'Data', function($scope, Data) {
  	$scope.upVote = function(){
  		Data.upVote($scope.question);
  	}
  }]);