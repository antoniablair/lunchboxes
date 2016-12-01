var AppDispatcher = require('../dispatcher/AppDispatcher');

/**
* Respond to actions in the view
* **/

var RecipeActions = {
    updateSearchTerm: function(searchTerm) {
        AppDispatcher.handleAction({
            actionType: 'UPDATE_SEARCH_TERM',
            searchTerm: searchTerm,
        })
    },
    
    fetchRecipes: function(searchTerm) {
        AppDispatcher.handleAction({
            actionType: 'FETCH_RECIPES',
            searchTerm: searchTerm,
        })
    },
    
}

module.exports = RecipeActions;