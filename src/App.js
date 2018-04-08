import React, { Component } from "react";
import styled from "styled-components";
import { Tickets } from "./features/ticket-list/tickets";
import { List } from "./ui/molecules";
import { connect } from 'react-redux'
import { all, withoutStops, oneStop, twoStops, threeStops } from './actions'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 100px;
  width: 735px;
`;

const TicketsWrapper = styled.div``;

class Application extends Component {

  allCheckHandler = (e) => {
    this.props.dispatch(all(e.target.checked))
  }

  zeroCheckHandler = (e) => {
    this.props.dispatch(withoutStops(e.target.checked))
  }

  oneCheckHandler = (e) => {
    this.props.dispatch(oneStop(e.target.checked))
  }

  twoCheckHandler = (e) => {
    this.props.dispatch(twoStops(e.target.checked))
  }

  threeCheckHandler = (e) => {
    this.props.dispatch(threeStops(e.target.checked))
  }

  render() {
    return (
        <Wrapper>
          <List 
            allCheckHandler={this.allCheckHandler} 
            zeroCheckHandler={this.zeroCheckHandler} 
            oneCheckHandler={this.oneCheckHandler} 
            twoCheckHandler={this.twoCheckHandler} 
            threeCheckHandler={this.threeCheckHandler} 
            />
          <TicketsWrapper>
            <Tickets />
          </TicketsWrapper>
        </Wrapper>
    );
  }
}

export const App = connect()(Application);
