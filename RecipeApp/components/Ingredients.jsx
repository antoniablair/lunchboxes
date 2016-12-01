import React from 'react';
import ReactDOM from 'react-dom';

var Colors = require('../constants/Colors');
var Styles = require('../constants/CommonStyles');

/**
 * Ingredients contained in the recipes
 * Todo: Cut after certain character limit, add fixed margin
 **/


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
        <p>{this.props.showPicture === true ? (this.props.items).split(' ').splice(0,10).join(' ').replace(/,\s*$/, '') : this.props.items}</p>
      </div>
    );
  },



});

module.exports = Ingredients;