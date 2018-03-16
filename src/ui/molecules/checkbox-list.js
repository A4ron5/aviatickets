import React from "react";
import styled from "styled-components";
import { Checkbox } from "../atoms";

const Wrapper = styled.div`
  width: 100%;
`;

const Header = styled.span`
  width: 100%;
  padding: 10px 0;
  padding-left: 17px;
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
  threeTransf
}) => (
  <FilterWrapper>
    <Header>Количество пересадок</Header>
    <Wrapper>
      <Checkbox checked={checkedAll} titleName={"Все"} />
      <Checkbox checked={withoutTransf} titleName={"Без пересадок"} />
      <Checkbox checked={oneTransf} titleName={"1 пересадка"} />
      <Checkbox checked={twoTransf} titleName={"2 пересадки"} />
      <Checkbox checked={threeTransf} titleName={"3 пересадки"} />
    </Wrapper>
  </FilterWrapper>
);
