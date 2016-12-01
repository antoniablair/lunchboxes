var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var RecipeConstants = require('../constants/RecipeConstants');
var RecipeData = require('../utils/RecipeData');

var AppDispatcher = require('../dispatcher/AppDispatcher');

var _searches = {
  'errorStatus': false,
  'welcomeStatus': true,
  'errorMsg': 'No results found!',
  'searchTerm': 'onigiri',
  'recipes': '',
};

var CHANGE_EVENT = 'change';

function loadRecipeData(searchTerm) {
  return new Promise(function (resolve, reject) {
    RecipeData.get(searchTerm).then(function(data) {
        _searches['recipes'] = data['recipes'];
    })
  })
}

var SearchStore = assign({}, EventEmitter.prototype, {
  updateErrorMsg: function(errorMsg) {
    _searches['errorMsg'] = errorMsg;
  },

  emitChange: function(callback) {
    this.on(CHANGE_EVENT, callback);
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

        loadRecipeData(searchTerm).then(function(data) {
           SearchStore.emitChange();
        }).catch(function(e, data) {
            // fail silently for now
        });
      break;
      }
    })
})