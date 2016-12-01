import React from 'react';
import ReactDOM from 'react-dom';

var Card = require('./components/Card.jsx');
var Colors = require('./constants/Colors');

var RecipeData = require('./utils/RecipeData');
var ReorderRecipes = require('./utils/ReorderRecipes');


var Recipe = React.createClass ({
  getInitialState: function() {
    return {data: [] };
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
    // If no search term available, fall back to a starter search term like ramen
    this.fetchRecipes('onigiri');
  },
  
  render: function() {
    return (
      <div key='recipeContainer'>
        {(this.state.data.length > 0) ? this.renderCards(this.state.data) : ''}
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
        output.push(<div className='col-xs-12 col-sm-4'><Card recipe={currentRecipe} number={i} /></div>);
      }
    }
    return output;
  }

});


ReactDOM.render(<Recipe />, document.getElementById('recipeContainer'));