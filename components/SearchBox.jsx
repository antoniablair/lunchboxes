import React from 'react';
import ReactDOM from 'react-dom';

var Promise = require('bluebird');
var Colors = require('../constants/Colors');

var SearchBox = React.createClass ({
  getInitialState: function() {
    return {data: [] };
  },
  
  render: function() {
    var title = {
      color: Colors.charcoal, 
    }
    
      return (
      <div>
        <p>Search</p>
      </div>
    );
  }
});