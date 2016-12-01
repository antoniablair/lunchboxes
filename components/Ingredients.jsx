import React from 'react';
import ReactDOM from 'react-dom';

var Colors = require('../constants/Colors');

var Ingredients = React.createClass({
  getInitialState: function() {
    return {data: [] };
  },

  render: function() {
      var items = {
          textAlign: 'left',
          width: '80%',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
      };


      return (
      <div style={items}>
        <p>{this.props.items}</p>
      </div>
    );
  },

});

module.exports = Ingredients;