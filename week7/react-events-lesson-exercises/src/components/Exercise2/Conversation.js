import React, { Component } from 'react';

class Conversation extends Component {
  render() {
    return (
      <div >
        <button onClick={this.props.displayList}>Back</button>
        {this.props.convo.map(c=> <div key={c.text}>
         { c.sender ==="self" ? "Me" : this.props.sender} :{c.text}</div>
        )}
        
      </div>
    );
  }
}

export default Conversation;
