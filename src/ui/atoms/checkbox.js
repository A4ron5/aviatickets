import React from "react";
import styled from "styled-components";

const CustomCheckbox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #f2fcff;
  border: 1px solid #0cb2e1;
  border-radius: 4px;
  margin: 10px 10px;
  &::after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const Check = styled.input.attrs({
  type: "checkbox"
})`
  display: none;
  &:checked ~ ${CustomCheckbox} {
    display: block;
  }
`;

const Label = styled.label`
  display: block;
  width: 100%;
  padding: 7px 5px;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  &:hover {
    background: #f1fcff;
  }
  ${Check} {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  ${CustomCheckbox}::after {
    left: 7px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: solid #0cb2e1;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  ${Check}:checked ~ ${CustomCheckbox}::after {
    display: block;
  }
`;

const CheckboxTitle = styled.span`
  padding-left: 35px;
  font-size: 16px;
  opacity: 0.8;
`;

export const Checkbox = ({ checked }) => (
  <Label>
    <Check checked={checked} />
    <CustomCheckbox />
    <CheckboxTitle>Без пересадок</CheckboxTitle>
  </Label>
);
