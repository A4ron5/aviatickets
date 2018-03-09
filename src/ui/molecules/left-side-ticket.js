import React from 'react'
import styled from 'styled-components'
import { Button, AirlaneImg } from '../atoms'

const Wrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  &:img {
    margin-bottom: 10px;
  }
`

export const LeftSideTicket = ({}) => (
  <Wrapper>
    <AirlaneImg></AirlaneImg>
    <Button price={23700}></Button>
  </Wrapper>
)