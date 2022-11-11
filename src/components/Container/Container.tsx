import React from "react";
import { UsersFilter, UsersTable } from "..";
import { useUsers } from "../../hooks";
import { StyledContainer, StyledWrapper } from "./Container.styles";

export const Container = () => {
  const { isLoading, users } = useUsers();

  return (
    <StyledContainer>
      <h2>Users</h2>
      <StyledWrapper>
        <UsersFilter />
        <UsersTable isLoading={isLoading} users={users} />
      </StyledWrapper>
    </StyledContainer>
  );
};
