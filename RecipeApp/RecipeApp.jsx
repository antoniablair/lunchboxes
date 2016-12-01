import React from 'react';
import ReactDOM from 'react-dom';

var Colors = require('./constants/Colors');
var Card = require('./components/Card.jsx');
var SearchBox = require('./components/SearchBox.jsx');
var SearchStore = require('./stores/SearchStore');
var RecipeData = require('./utils/RecipeData');
var ReorderRecipes = require('./utils/ReorderRecipes');


function getRecipeAppState() {
  return {
    searchTerm: SearchStore.getSearchTerm(),
  }
}

var Recipe = React.createClass ({
  getInitialState: function() {
    var state = getRecipeAppState();
    return state;
  },
  
  fetchRecipes: function(searchTerm) {
    RecipeData.get(searchTerm).bind(this).then(function(data) {
      var orderedRecipes = ReorderRecipes.byImage(data);
      this.setState({ data: orderedRecipes});
      return true;
    }).catch(function(e) {
      return false;
    })
  },

  componentDidMount: function() {
    // todo:
    // call the initial fetchRecipes with whatever search term is a URL parameter.
    // If no search term available, fall back to the default search term
    SearchStore.addChangeListener(this._onChange);
    this.fetchRecipes(this.state.searchTerm);
  },

  componentWillUnmount: function() {
    SearchStore.removeChangeListener(this._onChange);
  },

  componentWillUpdate: function() {
    this.fetchRecipes(this.state.searchTerm);
  },
  
  render: function() {
    return (
      <div key='recipeContainer'>
        <SearchBox />
        {(this.state.data !== undefined && this.state.data.length > 0) ? this.renderCards(this.state.data) : ''}
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