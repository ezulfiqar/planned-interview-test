import React from "react";
import { StyledCard } from "./UserFilter.styles";

export const UsersFilter = () => {
  return (
    <StyledCard>
      min: <input name="minAge" value="0" type="number" />
      max: <input name="maxAge" value="100" type="number" />
      <button type="button">Filter by age</button>
      <button type="button">Retrieve Users</button>
    </StyledCard>
  );
};
