import React from "react";
import styled from "styled-components";
import { Button, AirlaneImg } from "../atoms";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  &:img {
    margin-bottom: 10px;
  }
  &::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    width: 1px;
    height: 100%;
    background-color: gray;
    opacity: 0.15;
  }
`;

export const LeftSideTicket = ({ price }) => (
  <Wrapper>
    <AirlaneImg alt={" "} />
    <Button price={price} />
  </Wrapper>
);
