import React from "react";
import styled from "styled-components";
import { Checkbox } from "../atoms";

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.span`
  width: 100%;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  color: gray;
  text-transform: uppercase;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.05);
  height: 220px;
`;

export const List = ({
  checkedAll,
  withoutTransf,
  oneTransf,
  twoTransf,
  threeTransf,
  allCheckHandler,
  zeroCheckHandler,
  oneCheckHandler,
  twoCheckHandler,
  threeCheckHandler
}) => (
  <FilterWrapper>
    <Header>Количество пересадок</Header>
    <Wrapper>
      <Checkbox onClick={allCheckHandler} titleName={"Все"} name="All"/>
      <Checkbox onClick={zeroCheckHandler} titleName={"Без пересадок"} />
      <Checkbox onClick={oneCheckHandler} titleName={"1 пересадка"} />
      <Checkbox onClick={twoCheckHandler} titleName={"2 пересадки"} />
      <Checkbox onClick={threeCheckHandler} titleName={"3 пересадки"} />
    </Wrapper>
  </FilterWrapper>
);
