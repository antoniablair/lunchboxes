import React from 'react';
import ReactDOM from 'react-dom';

var Promise = require('bluebird');
var Card = require('./components/Card.jsx');
var Test = require('./components/Test.jsx');
var Colors = require('./constants/Colors');

var RecipeData = require('./utils/RecipeData');



var Recipe = React.createClass ({
  getInitialState: function() {
    return {data: [] };
  },
  
  fetchRecipes: function(searchTerm) {
    RecipeData.get(searchTerm).bind(this).then(function(data) {
      this.setState({ data: data});
      console.log(this.state.data);
      return true;
    }).catch(function(e) {
      return false;
    })
  },
  
  componentDidMount: function() {
    // todo: this is a placeholder.
    // fetchRecipes with whatever search term is typed into the Search Bar or URL parameter.
    // If no search term available, fall back to a default search term defined in constants.
    this.fetchRecipes('onigiri');
    setInterval(this.fetchRecipes, this.props.pollInterval);
  },
  
  
  render: function() {
      return (
      <div>
        {this.renderCards(this.state.data)}
      </div>
    );
  },

/**
 * Render recipes onto the page in the form of card components.
 */

  renderCards: function(recipes) {
    console.log("Render cards");
    var output = [];
    if (recipes != undefined && recipes != null) {
      for (var i = 0; i < recipes.length; i++) {
        currentRecipe = recipes[i];

        output.push(<Card recipe={currentRecipe} key={i} />);
      }
    }
    return output;
  }

});


ReactDOM.render(<Recipe/>, document.getElementById('recipeContainer'));