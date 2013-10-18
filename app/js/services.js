'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
owl.
  service('Data', ['$filter', function($filter){
  	var _idField = 'id';
  	var _questions = [{id: 1, points: 3, question: "hi", answer: "mom"}, {id: 2, points: 1, question: "maaa", answer: "baa"}];
    var _findById = function(id){
    	var result = -1;
    	for(var i=0, l=_questions.length; i < l; i++){
    	    if(_questions[i].id == id){
    	    	result = i;
    	    	break;
    	    }
    	}
    	return result;
    }
    var _addQ = function (qText) {

    	var id = Math.floor(Math.random() * (200 - 10 + 1) + 10);
      _questions.push({question: qText, id: id, answer: "", points: 0});
    }
    this.addQ = _addQ;

    var _getQs = function () {
      return _questions;
    }

    this.qetQs = _getQs;

    var _getQ = function (id) {
      var i = _findById(id);
      return (i == -1 ) ? {} : _questions[i];
    }

    this.qetQ = _getQ;

    var _upVote = function (question) {
    	var i = _findById(question.id);
    	if(i != -1){
    		_questions[i].points++
    	}

    }

    this.upVote = _upVote;
  }]);