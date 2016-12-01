import React from 'react';
import ReactDOM from 'react-dom';

var RecipeActions = require('./actions/RecipeActions');
var Colors = require('./constants/Colors');
var Card = require('./components/Card.jsx');
var SearchBox = require('./components/SearchBox.jsx');
var SearchStore = require('./stores/SearchStore');
var ReorderRecipes = require('./utils/ReorderRecipes');


function getRecipeAppState() {
  return {
    searchTerm: SearchStore.getSearchTerm(),
    recipes: SearchStore.getRecipes(),
  }
}

var Recipe = React.createClass ({
  getInitialState: function() {
    var state = getRecipeAppState();
    return state;
  },

  componentDidMount: function() {
    // todo:
    // call the initial fetchRecipes with whatever search term is a URL parameter.
    // If no search term available, fall back to the default search term

    if (this.state.recipes === undefined || this.state.recipes === '') {
      if (this.state.searchTerm !== undefined) {
        RecipeActions.fetchRecipes(this.state.searchTerm);
      }
    }
    SearchStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    SearchStore.removeChangeListener(this._onChange);
  },

  componentWillReceiveProps: function() {
    console.log('component will receive props');
  },
  
  render: function() {
    return (
      <div key='recipeContainer'>
        <SearchBox />
        {(this.state.recipes !== undefined && this.state.recipes.length > 0) ? this.renderCards(this.state.recipes) : ''}
      </div>
    );
  },

/**
 * Render recipes onto the page in the form of card components.
 */

  renderCards: function(recipes) {
    var output = [];

    if (recipes !== undefined && recipes.length > 0) {
      for (var i = 0; i < recipes.length; i++) {
        var currentRecipe = recipes[i];
        output.push(<div className='col-xs-12 col-sm-4' key={i}><Card recipe={currentRecipe} number={'recipe' + i} /></div>);
      }
    }
    return output;
  },

  _onChange: function() {
    this.setState(getRecipeAppState());
  }
});


ReactDOM.render(<Recipe />, document.getElementById('recipeContainer'));