import styled from "styled-components";

export const Transfer = styled.span`
  position: relative;
  padding: 0 14px;
  padding-top: 4px;
  font-size: 9px;
  color: gray;
  opacity: 0.7;
  &::after {
    position: absolute;
    content: "";
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90px;
    height: 1px;
    opacity: 0.7;
    background-color: gray;
  }
`;
