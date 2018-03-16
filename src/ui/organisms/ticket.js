import React from "react";
import styled from "styled-components";
import { LeftSideTicket } from "../molecules";
import { RightSideTicket } from "../molecules";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 480px;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  background-color: white;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Ticket = ({
  price,
  timeFrom,
  cityFrom,
  dateFrom,
  transfer,
  timeTo,
  cityTo,
  dateTo
}) => (
  <Wrapper>
    <LeftSideTicket price={price} />
    <RightSideTicket
      timeFrom={timeFrom}
      cityFrom={cityFrom}
      dateFrom={dateFrom}
      transfer={transfer}
      timeTo={timeTo}
      cityTo={cityTo}
      dateTo={dateTo}
    />
  </Wrapper>
);
