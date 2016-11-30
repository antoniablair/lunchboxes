import React from 'react';
import ReactDOM from 'react-dom';

var SearchStore = require('../stores/SearchStore');

function getSearchState() {
    return {
        displayError: SearchStore.errorStatus(),
        displayWelcome: SearchStore.welcomeStatus(),
        errorMsg: SearchStore.getErrorMsg(),
        searchTerm: SearchStore.getSearchTerm(),
        recipesLoaded: SearchStore.recipesStatus(),
    }
}

// Form for user to enter a food and find new lunch ideas
var SearchBox = React.createClass ({
  getInitialState: function() {
    var state = getSearchState();
    return state
  },
  
  componentDidMount: function() {
      SearchStore.addChangeListener(this._onChange);
  },
  
  componentWillUnmount: function() {
      SearchStore.removeChangeListener(this._onChange);
  },
  
  searchFood: function() {
      RecipeActions.updateSearchTerm(this.state.searchTerm);
  },
  
  handleSubmitSearch: function(e) {
      e.preventDefault();
      this.searchFood();
  },
  
  handleSearchTyping: function(e) {
    // callback because state is async
    this.setState({ searchTerm: e.target.value}, function afterSearchTyping() 
    {this.checkSearchTerm()})
  },
  
  checkSearchTerm: function() {
    // If want to do any checking, such as to make 
    // sure the search term is not an integer, could do that here
    this.updateSearchTerm();
  },
  
  setUrlParams: function() {
    //   grab params from the URL to use as the initial 
  },

  render: function() {
    var searchContainer = {
      color: Colors.charcoal, 
    }
    
      return (
      <div class={searchContainer}>
        <form style={zipcodeForm} onSubmit={this.handleSubmitSearch}>
        <input style={searchInput} type='text' placeholder={(this.state.searchTerm != '') ? this.state.searchTerm : 'search' />
        value={this.state.searchTerm}
        onChange={this.handleSearchTyping} />
        </form>
      </div>
    );
  }
});

module.exports = SearchBox;