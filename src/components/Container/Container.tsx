import React, { useState } from "react";
import { UsersFilter, UsersTable } from "..";
import { userApi } from "../../api";
import { UserType } from "../../types";
import { StyledContainer, StyledWrapper } from "./Container.styles";

export const Container = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);

  const handleRetrieveUsers = async () => {
    setIsLoading(true);

    const newUsers = await userApi().fetchUsers();
    setUsers(newUsers);

    setIsLoading(false);
    setHasLoaded(true);
  };

  const displayUsers = users.sort(
    (a, b) =>
      `${a.name.firstName} ${a.name.lastName}`.localeCompare(
        `${b.name.firstName} ${b.name.lastName}`
      ) || b.age - a.age
  );

  return (
    <StyledContainer>
      <h2>Users</h2>
      <StyledWrapper>
        <UsersFilter handleRetrieveUsers={handleRetrieveUsers} />
        <UsersTable
          hasLoaded={hasLoaded}
          isLoading={isLoading}
          users={displayUsers}
        />
      </StyledWrapper>
    </StyledContainer>
  );
};
