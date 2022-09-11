import React, { Component } from "react";

class Quote extends Component {
  likeQuote = () => {
    this.props.likeQuote(this.props.quote.id); // this invokes the parent's (SpotCheck4) likeQuote method, and passes it *this* quote's ID
  };

  render() {
    let q = this.props.quote;
    return (
      <div key={q.id}>
        <sup>{q.likes}</sup>
        <span onClick={this.likeQuote}>+</span>
        <span>{q.text}</span>
      </div>
    );
  }
}

export default Quote;
