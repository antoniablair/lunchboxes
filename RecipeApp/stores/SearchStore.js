var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Colors = require('../constants/Colors');
var RecipeConstants = require('../constants/RecipeConstants');
var RecipeData = require('../utils/RecipeData');

/**
* This store contains information regarding the user's searches
* and activity. The error states and welcome messages / prompts have not
* been developed yet.
**/

var _searches = {
  'errorStatus': false,
  'welcomeStatus': true,
  'errorMsg': 'No results found!',
  'searchTerm': 'onigiri',
};

var CHANGE_EVENT = 'change';

function loadRecipeData(searchTerm) {
  return new Promise(function (resolve, reject) {
    RecipeData.get(searchTerm).then(function(data) {
        _searches['recipes'] = data['recipes'];
    })
  })
}

function updateSearchTerm(searchTerm) {
  _searches['searchTerm'] = searchTerm;
}

var SearchStore = assign({}, EventEmitter.prototype, {
  errorStatus: function() {
    return _searches['errorStatus'];
  },

  welcomeStatus: function() {
    return _searches['welcomeStatus'];
  },

  getErrorMsg: function() {
    return _searches['errorMsg'];
  },

  getSearchTerm: function() {
    console.log('getSearchTerm');
    console.log(_searches['searchTerm']);
    return _searches['searchTerm'];
  },

  getTypedTerm: function() {
    return _searches['typedTerm'];
  },

  emitChange: function(callback) {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  dispatcherIndex: AppDispatcher.register(function(payload) {
    var action = payload.action;
    var searchTerm;

    switch(action.actionType) {
      case RecipeConstants.SHOW_ERROR:
        console.log("Do something to show error msg");
        SearchStore.emitChange();
      break;

      case RecipeConstants.HIDE_ERROR:
        console.log("Todo: hide error msg");
        SearchStore.emitChange();
      break;

      case RecipeConstants.UPDATE_SEARCH_TERM:
        searchTerm = action.searchTerm;

        updateSearchTerm(searchTerm);
        SearchStore.emitChange();
      break;
    }
    return true;
  })
});

module.exports = SearchStore;