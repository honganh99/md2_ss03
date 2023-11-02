import React, { Component } from "react";

export default class Bai9 extends Component {
  // Khoi tao lop:
  constructor() {
    // goi lop:
    super();
    // khai bao state:
    this.state = {
      name: "Nhat Anh",
      question: "Hang out with me?",
      answer: "No!",
      toggle: false,
    };
  }

  //   goi ham handleChange:
  handleChange = () => {
    this.setState({
      answer: "Yes!!!",
    });
  };
  render() {
    return (
      <>
        <h2>Bai 9:</h2>
        <p>
          {this.state.name} - {this.state.question}
        </p>
        <p>Say: {this.state.answer}</p>
        <button onClick={this.handleChange}>Click me</button>
      </>
    );
  }
}
