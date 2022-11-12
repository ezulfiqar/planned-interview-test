import React, { useState } from "react";
import { UsersFilter, UsersTable } from "..";
import { userApi } from "../../api";
import { UserType } from "../../types";
import { StyledContainer, StyledWrapper } from "./Container.styles";

export const Container = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [minAge, setMinAge] = useState<number>();
  const [maxAge, setMaxAge] = useState<number>();

  const handleRetrieveUsers = async () => {
    setIsLoading(true);

    const newUsers = await userApi().fetchUsers();
    setUsers(newUsers);

    setIsLoading(false);
    setHasLoaded(true);
  };

  const displayUsers = users
    .filter((user) =>
      `${user.name.firstName} ${user.name.lastName}`
        .toLowerCase()
        .includes(searchValue.toLowerCase())
    )
    .filter((user) => {
      if (minAge && maxAge) {
        return user.age >= minAge && user.age <= maxAge;
      } else if (minAge) {
        return user.age >= minAge;
      } else if (maxAge) {
        return user.age <= maxAge;
      }
      return true;
    })
    .sort(
      (a, b) =>
        `${a.name.firstName} ${a.name.lastName}`.localeCompare(
          `${b.name.firstName} ${b.name.lastName}`
        ) || b.age - a.age
    );

  return (
    <StyledContainer>
      <h2>Users</h2>
      <StyledWrapper isInitiated={hasLoaded || isLoading}>
        <UsersFilter
          handleMaxAge={setMaxAge}
          handleMinAge={setMinAge}
          handleRetrieveUsers={handleRetrieveUsers}
          maxAge={maxAge}
          minAge={minAge}
        />
        <UsersTable
          handleSearch={setSearchValue}
          hasLoaded={hasLoaded}
          isLoading={isLoading}
          searchValue={searchValue}
          users={displayUsers}
        />
      </StyledWrapper>
    </StyledContainer>
  );
};
