import React, { Component } from "react";

export default class Sort extends Component {
  // khoi tao lop:
  constructor() {
    // tao lop
    super();
    // khai bao state
    this.state = {
      value: "",
    };
  }
  //   khai bao ham handleChangeSort
  handleChangeSort = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    this.props.sort(this.state.value);
    return (
      <>
        <select name="" onChange={this.handleChangeSort} id="">
          <option value="">Sắp xếp theo</option>
          <option value="name">Bảng chữ cái</option>
        </select>
      </>
    );
  }
}
