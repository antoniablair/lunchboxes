import React from 'react';
import ReactDOM from 'react-dom';

var RecipeActions = require('../actions/RecipeActions');
var Colors = require('../constants/Colors');
var SearchStore = require('../stores/SearchStore');

/**
 * Search box for looking up new recipes and lunch ideas.
 *
 * Note: This store contains some methods that are not being
 * used yet but will be used to handle show UI elements
 * down the road for things like 'No results found!'.
 **/

function getSearchState() {
  return {
    displayError: SearchStore.errorStatus(),
    displayWelcome: SearchStore.welcomeStatus(),
    errorMsg: SearchStore.getErrorMsg(),
    searchTerm: SearchStore.getSearchTerm(),
  }
}

// Form for user to enter a food and find new lunch ideas
var SearchBox = React.createClass ({
  getInitialState: function() {
    var state = getSearchState();
    return state
  },
  
  handleSubmitSearch: function(e) {
    e.preventDefault();
    RecipeActions.updateSearchTerm(this.state.searchTerm);
  },
  
  handleSearchTyping: function(e) {
    // this allows the user to see what they are typing
    this.setState({ searchTerm: e.target.value});
  },

  render: function() {
    var searchContainer = {
      color: Colors.charcoal,
      margin: '10px 30px 30px 30px',
      fontFamily: 'Roboto',
      fontWeight: '100',
      fontSize: '17px',
      marginBottom: '30px',
    };

    var button = {
      color: Colors.paper,
      backgroundColor: Colors.charcoal,
      border: 'none',
      paddingLeft: '30px',
      paddingRight: '30px',
    }

    return (
      <div style={searchContainer} key='searchBox'>
        <form onSubmit={this.handleSubmitSearch}>
        <input
               type='text'
               placeholder={(this.state.searchTerm != '') ? this.state.searchTerm : 'search' }
               value={this.state.searchTerm}
               onChange={this.handleSearchTyping} />
        <button type='submit' style={button}>Search for Recipes</button>
        </form>
      </div>
    );
  },
});

module.exports = SearchBox;