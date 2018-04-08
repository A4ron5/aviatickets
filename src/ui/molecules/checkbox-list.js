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
  @media (max-width: 800px) {
    
  }
`;

export const List = ({
  checkedAll,
  withoutTransf,
  oneTransf,
  twoTransf,
  threeTransf,
  checkHandler
}) => (
  <FilterWrapper>
    <Header>Количество пересадок</Header>
    <Wrapper>
      <Checkbox onClick={checkHandler} titleName={"Все"} name="All"/>
      <Checkbox titleName={"Без пересадок"} />
      <Checkbox titleName={"1 пересадка"} />
      <Checkbox titleName={"2 пересадки"} />
      <Checkbox titleName={"3 пересадки"} />
    </Wrapper>
  </FilterWrapper>
);
