import React from 'react'
import styled from 'styled-components'
import { RouteTicket, Transfer } from '../atoms'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 20px;
`

export const RightSideTicket = ({timeFrom, cityFrom, dateFrom, transfer, timeTo, cityTo, dateTo}) => (
  <Wrapper>
    <RouteTicket
      timeFrom={timeFrom}
      cityFrom={cityFrom}
      dateFrom={dateFrom}
    ></RouteTicket>
    <Transfer>{transfer} ПЕРЕСАДОК</Transfer>
    <RouteTicket
      timeTo={timeTo}
      cityTo={cityTo}
      dateTo={dateTo}
    ></RouteTicket>
  </Wrapper>
)