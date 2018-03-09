import React, { Component } from "react";
import { Ticket } from "./ui/organisms/ticket";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Ticket
        price={"23200"}
        timeFrom={"09:25"}
        cityFrom={"VVO, Владивосток"}
        dateFrom={"9 окт 2016, Пт"}
        transfer={"2"}
        timeTo={"09:25"}
        cityTo={"VVO, Владивосток"}
        dateTo={"9 окт 2016, Пт"}
      />
    );
  }
}

export default App;
