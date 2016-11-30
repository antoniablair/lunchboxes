import React from 'react';
import ReactDOM from 'react-dom';

var Promise = require('bluebird');
var Colors = require('../constants/Colors');

var Card = React.createClass ({
  getInitialState: function() {
    return {data: [] };
  },
  
  render: function() {
    var cardStyle = {
      width: '250px',
      height: '400px',
      display: 'block',
      color: Colors.black,
      backgroundColor: Colors.paper,
      fontFamily: 'Roboto',
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
      <div style={cardStyle}>
        <h3 style={title}> Onigiri </h3>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
});

ReactDOM.render(<Lunch/>, document.getElementById('lunch'));