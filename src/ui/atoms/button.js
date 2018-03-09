import styled from 'styled-components'
import React from 'react'

const ButtonWrapper = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #FF6D00;
  padding: 0;
  color: #fff;
  letter-spacing: 0.3px;
  &:hover {
    opacity: 0.8;
  }
  &>span:first-child{
    margin-bottom: 3px;
  }
`

export const Button = ({price}) => (
  <ButtonWrapper>
    <span>Купить</span>
    <span>за { price } Р</span>
  </ButtonWrapper>
)