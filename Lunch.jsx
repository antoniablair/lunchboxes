import React from 'react';
import ReactDOM from 'react-dom';
var Promise = require('bluebird');
var Colors = require('./constants/Colors');

class Lunch extends React.Component {
  render() {
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
    };
    
    var title = {
      color: Colors.paper,
      backgroundColor: Colors.charcoal,
      textAlign: 'center',
      paddingTop: '15px',
      paddingBottom: '15px',
      width: '100%',
      fontWeight: '100',
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
}

ReactDOM.render(<Lunch/>, document.getElementById('lunch'));