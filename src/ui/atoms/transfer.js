import styled from 'styled-components'

export const Transfer = styled.span`
  position: relative;
  font-size: 11px;
  color: gray;
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 1px;
    background-color: gray;
  }
`
