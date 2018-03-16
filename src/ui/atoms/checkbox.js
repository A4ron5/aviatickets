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
  border-radius: 5px;
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
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
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

export const Checkbox = ({ checked }) => (
  <Label>
    <Check checked={checked} />
    <CustomCheckbox />
  </Label>
);
