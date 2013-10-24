'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
owl.
  service('Data', ['$filter', function($filter){
  	var _idField = 'id';
  	var _questions = [{id: 1, points: 3, author: "Vivian Chan", comments: ["esta bien", "he"], question: "Is it ok to have moment's of doubt in my idea?", answer: "- yes it is, if you\'re not doubting your idea then you\'re not fully testing the idea. Everyone you try to sell\/pitch it to will doubt your idea especially at the beginning (even if they don\'t tell you directly), so if you can\'t see why they doubt you then you won\'t be able to find the answers to put their doubts to rest. \r\n- I definitely had moments of doubt, wondering whether I was solving something that wasn\'t really a real need, but when in doubt - ask!  Doubt creates questions? And it makes you think of solutions to the questions and that\'s what entrepreneurship is all about - endless problem solving from all angles. \r\n- I sometimes lost faith until I spoke with colleagues\/friends (who were my target audience) about the pain\/problem I was experiencing and what kept me going was when they all agreed and started sharing their own versions of the same pain\/problem. That happened a few times, which gave me the confidence to know that I was actually working on a problem that everyone was experiencing and wasn\'t solved.\r\n- Then I think its easier to come up with ideas once the pain\/problem is proven"},
  	 {id: 2, points: 1, author: "Andrew Jervis", comments: ["esta bien"], question: "How do you handle confrontations with your cofounder?", answer: "Felix and my self often disagree and can have a confrontations with each other about CM related activity (more or less daily). However confrontation and transparency re disagreeing (or agreeing) with each other is critical for a team that functions well IMO. However whats perhaps even more important than this is understanding that confrontations around the business should be strictly non personal and occur for the greater good of the company. For example you should be able to have a heated debate at 8.50pm about user acquisition but then be able to let it all flow over you and enjoy a pint in the pub with your co-founder and the rest of the cohort at 9.00pm. \r\n"}];

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

    /* Public methods */

    var _getQ = function (id) {
      var i = _findById(id);
      return (i == -1 ) ? {} : _questions[i];
    }

    this.qetQ = _getQ;

    var _addComment = function (commentText, qId) {
      var qIndex = _findById(qId);
      _questions[qIndex].comments.push(commentText);
    }
    this.addComment = _addComment;

    var _addQ = function (qText) {

      var id = Math.floor(Math.random() * (200 - 10 + 1) + 10);
      _questions.push({question: qText, id: id, answer: "", comments: [], points: 0});
    }
    this.addQ = _addQ;

    var _getQs = function () {
      return _questions;
    }

    this.qetQs = _getQs;

    var _upVote = function (question) {
    	var i = _findById(question.id);
    	if(i != -1){
    		_questions[i].points++
    	}

    }

    this.upVote = _upVote;
  }]);