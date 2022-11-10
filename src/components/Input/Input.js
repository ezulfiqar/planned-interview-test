import React from "react";
import { StyledDiv, StyledInput, StyleLabel } from "./Input.styles";

export const Input = (props) => {
  const { label, name, value, type } = props;
  return (
    <StyledDiv>
      <StyleLabel for={name}>{label}</StyleLabel>
      <StyledInput name={name} value={value} type={type} />
    </StyledDiv>
  );
};
