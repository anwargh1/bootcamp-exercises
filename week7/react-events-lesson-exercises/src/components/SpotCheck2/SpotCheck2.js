import React, { Component } from "react";

export const Home = function () {
 return <div>Welcome to our page</div>;
};

export const About = function () {
 return <div>It’s great here</div>;
};

export class SpotCheck2 extends Component {
  constructor() {
    super();
    this.state = {
      showHome: true,
    };
  }
  toggle = () => {
    this.setState({
      showHome: !this.state.showHome,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        {this.state.showHome ? <Home /> : <About />}
      </div>
    );
  }
}
