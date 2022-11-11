import React from "react";
import {
  StyledDiv,
  StyledIcon,
  StyledInput,
  StyledLabel,
} from "./Input.styles";

export type InputPropsType = {
  autoComplete?: string;
  icon?: string;
  label?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: string;
  type: string;
};

export const Input = ({
  autoComplete,
  icon,
  label,
  name,
  onChange,
  placeholder,
  value,
  type,
}: InputPropsType) => {
  return (
    <StyledDiv>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      {icon && <StyledIcon alt="icon" src={`/${icon}`} />}
      <StyledInput
        autoComplete={autoComplete}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        type={type}
      />
    </StyledDiv>
  );
};
