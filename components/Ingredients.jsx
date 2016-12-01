import React from 'react';
import ReactDOM from 'react-dom';

var Colors = require('../constants/Colors');
var Styles = require('../constants/CommonStyles');

var Ingredients = React.createClass({
  getInitialState: function() {
    return {data: [] };
  },

  render: function() {
    var items = {
      width: '80%',
    };


    return (
      <div style={Object.assign(items, Styles.center)}>
        <p>{this.props.items}</p>
      </div>
    );
  },

});

module.exports = Ingredients;