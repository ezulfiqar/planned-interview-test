import React from "react";
import { StyledInput } from "./SearchInput.styles";

export type SearchInputPropsType = {
  value: string;
  setValue: (value: string) => void;
};

export const SearchInput = ({ value, setValue }: SearchInputPropsType) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("change", event);
    setValue(event.target.value);
  };

  return (
    <StyledInput
      autoComplete="off"
      icon="search.svg"
      name="search"
      placeholder="Search Users"
      value={value}
      onChange={onChange}
      type="text"
    />
  );
};
