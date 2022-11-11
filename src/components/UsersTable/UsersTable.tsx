import React, { useState } from "react";
import { UserType } from "../../types";
import { SearchInput } from "../SearchInput";
import {
  StyledCard,
  StyledHr,
  StyledTable,
  StyledRow,
  StyledHeaderRow,
} from "./UsersTable.styles";

export type UsersTablePropsType = {
  hasLoaded: boolean;
  isLoading: boolean;
  users: UserType[];
};

export const UsersTable = ({
  hasLoaded,
  isLoading,
  users,
}: UsersTablePropsType) => {
  const [searchValue, setSearchValue] = useState("");
  const hasUsers = users.length > 0 && !isLoading;

  return (
    <StyledCard>
      <SearchInput
        disabled={!hasUsers}
        setValue={setSearchValue}
        value={searchValue}
      />
      <StyledHr />
      {hasLoaded ? (
        <StyledTable>
          <thead>
            <StyledHeaderRow>
              <th></th>
              <th>Name</th>
              <th>Age</th>
            </StyledHeaderRow>
          </thead>
          <tbody>
            {users
              .filter((user) =>
                `${user.name.firstName} ${user.name.lastName}`
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
              .map((user) => (
                <StyledRow key={user.email}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    {user.name.firstName} {user.name.lastName}
                  </td>
                  <td>{user.age}</td>
                </StyledRow>
              ))}
          </tbody>
        </StyledTable>
      ) : (
        <div>Use the button to retrieve users!</div>
      )}
    </StyledCard>
  );
};
