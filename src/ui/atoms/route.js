import React from 'react'
import styled from 'styled-components'

const Time = styled.span`
  font-size: 25px;
  color: black;
`

const City = styled.span`
  font-size: 13px;
  color: black;
  opacity: 0.9;
`

const Date = styled.span`
  font-size: 11px;
  color: black;
  opaciti: 0.8;
`

const Wrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  &>span:first-child{
    margin-bottom: 5px;
  }
  &>span:nth-child(2){
    margin-bottom: 5px;
  }
`

export const RouteTicket = ({time, city, date}) => (
  <Wrapper>
    <Time>{time}</Time>
    <City>{city}</City>
    <Date>{date}</Date>
  </Wrapper> 
) 