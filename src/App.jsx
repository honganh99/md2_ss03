import React, { Component } from "react";
import Bai9 from "./Componentns/Bai9";
import Bai10 from "./Componentns/Bai10";
import InputSong from "./Componentns/Bai11_15/InputSong";

export default class App extends Component {
  render() {
    return (
      <div>
        <Bai9></Bai9>
        <Bai10></Bai10>
        <InputSong></InputSong>
      </div>
    );
  }
}
