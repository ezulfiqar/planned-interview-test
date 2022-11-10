import React from "react";
import { UsersFilter, UsersTable } from "../";
import { StyledContainer, StyledWrapper } from "./Container.styles";

export const Container = () => {
  return (
    <StyledContainer>
      <h2>Users</h2>
      <StyledWrapper>
        <UsersFilter />
        <UsersTable />
      </StyledWrapper>
    </StyledContainer>
  );
};
