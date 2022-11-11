import React from "react";
import { StyledInput } from "./SearchInput.styles";

export type SearchInputPropsType = {
  disabled: boolean;
  value: string;
  setValue: (value: string) => void;
};

export const SearchInput = ({
  disabled,
  value,
  setValue,
}: SearchInputPropsType) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <StyledInput
      autoComplete="off"
      disabled={disabled}
      icon="search.svg"
      name="search"
      placeholder="Search Users"
      value={value}
      onChange={onChange}
      type="text"
    />
  );
};
