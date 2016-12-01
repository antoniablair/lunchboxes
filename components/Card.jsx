import React from 'react';
import ReactDOM from 'react-dom';

var Promise = require('bluebird');
var Colors = require('../constants/Colors');
var Styles = require('../constants/CommonStyles');
var Ingredients = require('../components/Ingredients.jsx');

var Card = React.createClass({
  getInitialState: function() {
    return {data: [] };
  },
  
  render: function() {
    var cardStyle = {
      width: '250px',
      height: '250px',
      display: 'block',
      textAlign: 'center',
      color: Colors.black,
      backgroundColor: Colors.paper,
      fontFamily: 'Roboto',
      cursor: 'pointer',
      borderRadius: '5%',
      fontWeight: '300', 
      overflow: 'hidden',
      margin: '0px auto 30px auto',
    };
    
    var title = {
      color: Colors.paper,
      backgroundColor: Colors.charcoal,
      textAlign: 'center',
      padding: '35px 15px 25px 15px',
      width: '100%',
      fontWeight: '100',
      marginTop: '-10px',
      fontSize: '22px',
    };

    var text = {
      lineHeight: '20px',
      fontSize: '15px',
    };

    var show = {
      display: 'block',
    };

    var hide = Styles.hide;
    var show = Styles.show;

    var thumbnail = {
      marginBottom: '15px',
      marginRight: 'auto',
      marginLeft: 'auto',
    };
    
      return (
      <a href={this.props.recipe.href} key={this.props.key} target='_blank'>
        <div style={cardStyle}>
          <h3 style={title}> {this.props.recipe.title} </h3>
          <img style={(this.props.recipe.thumbnail !== '') ? Object.assign(show, thumbnail) : hide} src={this.props.recipe.thumbnail} />
          <Ingredients items={this.props.recipe.ingredients} />
        </div>
      </a>
    );
  }
});

module.exports = Card;