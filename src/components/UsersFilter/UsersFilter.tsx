import React from "react";
import { Input } from "../Input";
import { StyledButton, StyledCard } from "./UserFilter.styles";

export type UserFilterPropsType = {
  handleMaxAge: (age: number) => void;
  handleMinAge: (age: number) => void;
  handleRetrieveUsers: () => void;
  maxAge?: number;
  minAge?: number;
};

export const UsersFilter = ({
  handleMaxAge,
  handleMinAge,
  handleRetrieveUsers,
  maxAge,
  minAge,
}: UserFilterPropsType) => {
  const handleMaxAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleMaxAge(parseInt(event.target.value));
  };

  const handleMinAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleMinAge(parseInt(event.target.value));
  };

  return (
    <StyledCard>
      <Input
        label="Min"
        name="minAge"
        onChange={handleMinAgeChange}
        type="number"
        value={minAge?.toString() || ""}
      />
      <Input
        label="Max"
        name="maxAge"
        onChange={handleMaxAgeChange}
        type="number"
        value={maxAge?.toString() || ""}
      />
      <StyledButton onClick={handleRetrieveUsers} type="button">
        Retrieve Users
      </StyledButton>
    </StyledCard>
  );
};
