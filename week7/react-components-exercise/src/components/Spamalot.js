import Spam from "./Spam";
import React, { Component } from "react";
import log_debug_messages from "jest-cli/build/lib/log_debug_messages";

class Spamalot extends Component {
  
  render() {
    const spamArray = [];
    for (let i = 0; i < 500; i++) {
        spamArray.push(<Spam />)
    }
    return (
       <div id="ex-2">{spamArray}</div>
    );
}
  }


export default Spamalot;
