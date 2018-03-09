import React, { Component } from 'react';
import { LeftSideTicket } from './ui/molecules/left-side-ticket'
import { RightSideTicket } from './ui/molecules/right-side-ticket'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <RightSideTicket
        timeFrom={'09:25'}
        cityFrom={'VVO, Владивосток'}
        dateFrom={'9 окт 2016, Пт'}
        transfer={'2'}
        timeTo={'09:25'}
        cityTo={'VVO, Владивосток'}
        dateTo={'9 окт 2016, Пт'}
      >
      </RightSideTicket>
    );
  }
}

export default App;
