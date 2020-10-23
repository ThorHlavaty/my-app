import React from "react";

class Greeter extends React.Component {
  render() {
    return <h1>Hello, {this.props.name ? this.props.name : "you"}!</h1>;
  }
}

export default Greeter;
