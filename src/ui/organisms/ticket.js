import React from 'react'
import styled from 'styled-components'
import { LeftSideTicket } from '../molecules'
import { RightSideTicket } from '../molecules'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 540px;
  box-shadow: 0 0 5px gray;
  border-radius: 5px;

`;

export const Ticket = ({price, timeFrom, cityFrom, dateFrom, transfer, timeTo, cityTo, dateTo}) => (
  <Wrapper>
    <LeftSideTicket price={price}></LeftSideTicket>
    <RightSideTicket
      timeFrom={timeFrom}
      cityFrom={cityFrom}
      dateFrom={dateFrom}
      transfer={transfer}
      timeTo={timeTo}
      cityTo={cityTo}
      dateTo={dateTo}
    ></RightSideTicket>
  </Wrapper>
)