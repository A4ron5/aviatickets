import styled from "styled-components";
import React from "react";

const ButtonWrapper = styled.button`
  padding: 7px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  outline: none;
  background-color: #ff6d00;
  color: #fff;
  letter-spacing: 0.3px;
  &:hover {
    opacity: 0.8;
  }
  & > span:first-child {
    margin-bottom: 3px;
  }
`;

export const Button = ({ price }) => (
  <ButtonWrapper>
    <span>Купить</span>
    <span>за {price} Р</span>
  </ButtonWrapper>
);
