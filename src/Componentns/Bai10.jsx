import React, { Component } from "react";

export default class Bai10 extends Component {
  // khoi tao lop:
  constructor() {
    // goi lop:
    super();
    // khai bao state:
    this.state = {
      texInput: "",
    };
  }

  //   khai bao ham handleInput:
  handleInput = (e) => {
    this.setState({
      texInput: e.target.value,
    });
  };

  //   khai bao ham hadleSubmitForm:
  hadleSubmitForm = (e) => {
    e.preventDefault();
    this.setState({
      texInput: "",
    });
  };
  render() {
    return (
      <>
        <h2>Bai 10:</h2>
        <form onSubmit={this.hadleSubmitForm}>
          <input
            type="text"
            value={this.state.texInput}
            onChange={this.handleInput}
          />
          <button type="submit">Submit</button>
        </form>
        <p>Ban vua nhap: {this.state.texInput}</p>
      </>
    );
  }
}
