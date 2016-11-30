var AppDispatcher = require('../dispatcher/AppDispatcher');

/**
* Respond to actions in the view
* **/

var RecipeActions = {
    updateSearchTerm: function(searchTerm) {
        AppDispatcher.handleAction({
            actionType: 'UPDATE_SEARCH_TERM',
        })
    },
    
    fetchRecipes: function(searchTerm) {
        AppDispatcher.handleAction({
            actionType: 'FETCH_RECIPES',
        })
    },
    
}

module.exports = RecipeActions;