import React from "react";
import styled from "styled-components";
import { RouteTicket, Transfer } from "../atoms";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 20px;
  width: 310px;
`;

export const RightSideTicket = ({
  timeFrom,
  cityFrom,
  dateFrom,
  transfer,
  timeTo,
  cityTo,
  dateTo
}) => (
  <Wrapper>
    <RouteTicket time={timeFrom} city={cityFrom} date={dateFrom} />
    <Transfer>{transfer} ПЕРЕСАДОК</Transfer>
    <RouteTicket right={true} time={timeTo} city={cityTo} date={dateTo} />
  </Wrapper>
);
