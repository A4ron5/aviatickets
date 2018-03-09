import React from 'react'
import styled from 'styled-components'

const Time = styled.span`
  font-size: 27px;
  color: black;
  opacity: 0.9
  text-align: ${props => props.right && 'right'};
`

const City = styled.span`
  font-size: 11px;
  font-weight: bold;
  color: black;
  opacity: 0.7;
  text-align: ${props => props.right && 'right'};  
`

const Date = styled.span`
  font-size: 11px;
  color: black;
  opacity: 0.5;
  text-align: ${props => props.right && 'right'};
  
`

const Wrapper = styled.div`
  width: 115px;
  display: flex;
  flex-direction: column;
  &>span:first-child{
    margin-bottom: 5px;
  }
  &>span:nth-child(2){
    margin-bottom: 5px;
  }
`

export const RouteTicket = ({time, city, date, right}) => (
  <Wrapper>
    <Time right={right}>{time}</Time>
    <City right={right}>{city}</City>
    <Date right={right}>{date}</Date>
  </Wrapper> 
) 