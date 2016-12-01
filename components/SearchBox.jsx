import React from 'react';
import ReactDOM from 'react-dom';

var RecipeActions = require('../actions/RecipeActions');

var Colors = require('../constants/Colors');
var SearchStore = require('../stores/SearchStore');

function getSearchState() {
  return {
    displayError: SearchStore.errorStatus(),
    displayWelcome: SearchStore.welcomeStatus(),
    errorMsg: SearchStore.getErrorMsg(),
    searchTerm: SearchStore.getSearchTerm(),
    typedTerm: SearchStore.getTypedTerm(),
  }
}

// Form for user to enter a food and find new lunch ideas
var SearchBox = React.createClass ({
  getInitialState: function() {
    var state = getSearchState();
    return state
  },

  //componentDidMount: function() {
  //  SearchStore.addChangeListener(this._onChange);
  //},
  //
  //componentWillUnmount: function() {
  //  SearchStore.removeChangeListener(this._onChange);
  //},
  
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
      fontSize: '20px',
    };

    var button = {
      color: Colors.paper,
      backgroundColor: Colors.charcoal,
      border: 'none',
      paddingLeft: '10px',
      paddingRight: '10px',
    }

    // Todo: make it change appearance after user submits

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