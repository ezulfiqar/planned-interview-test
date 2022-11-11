import React, { useState } from "react";
import { UsersFilter, UsersTable } from "..";
import { userApi } from "../../api";
import { UserType } from "../../types";
import { StyledContainer, StyledWrapper } from "./Container.styles";

export const Container = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);

  const handleRetrieveUsers = async () => {
    setIsLoading(true);

    const newUsers = await userApi().fetchUsers();
    setUsers(newUsers);

    setIsLoading(false);
  };

  return (
    <StyledContainer>
      <h2>Users</h2>
      <StyledWrapper>
        <UsersFilter handleRetrieveUsers={handleRetrieveUsers} />
        <UsersTable isLoading={isLoading} users={users} />
      </StyledWrapper>
    </StyledContainer>
  );
};
