import React from "react";
import { Input } from "../Input";
import { StyledButton, StyledCard } from "./UserFilter.styles";

export const UsersFilter = () => {
  return (
    <StyledCard>
      <Input label="Min" name="minAge" value="0" type="number" />
      <Input label="Max" name="maxAge" value="100" type="number" />
      <StyledButton type="button">Retrieve Users</StyledButton>
    </StyledCard>
  );
};
