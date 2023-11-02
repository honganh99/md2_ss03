import React, { Component } from "react";
import Sort from "./Sort";
import ListSong from "./ListSong";

export default class InputSong extends Component {
  // khoi tao lop
  constructor() {
    // goi lop
    super();
    // khai bao state
    this.state = {
      listSong: "",
      arrListSong: [],
    };
    this.handleChangInput = (e) => {
      this.setState({
        listSong: e.target.value,
      });
    };
    this.handleSubmit = (e) => {
      e.preventDefault();
      this.setState({
        arrListSong: [...this.state.arrListSong, this.state.listSong],
        ListSong: "",
      });
    };
  }
  deleteSong = (e) => {
    let arr = [...this.state.arrListSong];
    arr.splice(e, 1);
    this.setState({
      arrListSong: arr,
    });
  };
  handleSort = (value) => {
    console.log(value);
  };
  render() {
    return (
      <>
        <Sort sort={this.handleSort}>
          <form action="" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.listSong}
              name=""
              id=""
              onChange={this.handleChangInput}
            />
            <button type="submit">Thêm</button>
          </form>
          <ListSong
            delete={this.deleteSong}
            arrListSong={this.state.arrListSong}
          ></ListSong>
        </Sort>
      </>
    );
  }
}
