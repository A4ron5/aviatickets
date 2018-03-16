import React, { Component } from "react";
import styled from "styled-components";
import { Tickets } from "./features/ticket-list/tickets";
import { Checkbox } from "./ui/atoms";
import { List } from "./ui/molecules";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 100px;
  width: 750px;
`;

const TicketsWrapper = styled.div``;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <List />
        <TicketsWrapper>
          <Tickets />
        </TicketsWrapper>
      </Wrapper>
    );
  }
}

export default App;
