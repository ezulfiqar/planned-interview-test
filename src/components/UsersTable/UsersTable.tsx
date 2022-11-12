import React from "react";
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
  handleSearch: (value: string) => void;
  hasLoaded: boolean;
  isLoading: boolean;
  searchValue: string;
  users: UserType[];
};

export const UsersTable = ({
  handleSearch,
  hasLoaded,
  isLoading,
  searchValue,
  users,
}: UsersTablePropsType) => {
  const userContent =
    hasLoaded && users.length > 0 ? (
      <StyledTable>
        <thead>
          <StyledHeaderRow>
            <th></th>
            <th>Name</th>
            <th>Age</th>
          </StyledHeaderRow>
        </thead>
        <tbody>
          {users.map((user) => (
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
      <div>No results found</div>
    );
  return (
    <StyledCard>
      <SearchInput
        disabled={!hasLoaded}
        setValue={handleSearch}
        value={searchValue}
      />
      <StyledHr />
      {hasLoaded ? userContent : <div>Use the button to retrieve users!</div>}
    </StyledCard>
  );
};
