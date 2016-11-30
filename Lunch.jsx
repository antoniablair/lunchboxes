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
    console.log("Going to fetch recipes");
    RecipeData.get(searchTerm).bind(this).then(function(data) {
      this.setState({ data: data});
      return true;
    }).catch(function(e) {
      return false;
    })
  },
  
  componentDidMount: function() {
    // todo fetchRecipes with whatever result is typed into the Search Bar
    this.fetchRecipes('onigiri');
  },
  
  
  render: function() {
    var cardStyle = {
      color: Colors.black,
      backgroundColor: Colors.paper,
      fontFamily: 'Roboto',
      width: '250px',
      height: '400px',
      display: 'block',
      cursor: 'pointer',
      marginRight: '10px',
      marginLeft: '10px',
      borderRadius: '5%',
      fontWeight: '300', 
      overflow: 'hidden',
    };
    
    var title = {
      color: Colors.paper,
      backgroundColor: Colors.charcoal,
      textAlign: 'center',
      paddingTop: '35px',
      paddingBottom: '25px',
      width: '100%',
      fontWeight: '100',
      marginTop: '-10px',
    }
    
    var text = {
      lineHeight: '20px',
      fontSize: '15px',
    }
    
      return (
      <div>
        <Card />
      </div>
    );
  }
});

ReactDOM.render(<Recipe/>, document.getElementById('recipeContainer'));