import React from 'react';
import ReactDOM from 'react-dom';

var Colors = require('../constants/Colors');

var Ingredients = React.createClass({
  getInitialState: function() {
    return {data: [] };
  },

  render: function() {
      var bullet = {
          textAlign: 'left',
      };

      var list = {
          marginBottom: '15px',
      };

      return (
      <ul>
        {this.props.items.map(function(item) { return <li style={bullet}>{item}</li>;})}
      </ul>
    );
  },

});

module.exports = Ingredients;