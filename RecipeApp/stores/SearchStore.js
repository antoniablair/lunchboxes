var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Colors = require('../constants/Colors');
var RecipeConstants = require('../constants/RecipeConstants');
var RecipeData = require('../utils/RecipeData');
var ReorderRecipes = require('../utils/ReorderRecipes');

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
  'recipes': '',
};

var CHANGE_EVENT = 'change';

function updateSearchTerm(searchTerm) {
  _searches['searchTerm'] = searchTerm;
}

function fetchRecipes(searchTerm) {
  RecipeData.get(searchTerm).bind(this).then(function(data) {
    var orderedRecipes = ReorderRecipes.byImage(data);
    _searches['recipes'] = orderedRecipes;
    SearchStore.emitChange();
    return true;
  }).catch(function(e) {
    return false;
  })
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

  getRecipes: function() {
    return _searches['recipes'];
  },

  getSearchTerm: function() {
    return _searches['searchTerm'];
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

      case RecipeConstants.FETCH_RECIPES:
        searchTerm = action.searchTerm;

        fetchRecipes(searchTerm);
      break;

      case RecipeConstants.UPDATE_SEARCH_TERM:
        searchTerm = action.searchTerm;

        updateSearchTerm(searchTerm);
        fetchRecipes(searchTerm);
      break;
    }
    return true;
  })
});

module.exports = SearchStore;