import React from "react";
import { UserType } from "../../types";
import { SearchInput } from "../SearchInput";
import { Skeleton } from "../Skeleton";
import {
  StyledCard,
  StyledHr,
  StyledTable,
  StyledRow,
  StyledHeaderRow,
} from "./UsersTable.styles";

const LoadingTable = () => {
  return (
    <StyledTable>
      <thead>
        <StyledHeaderRow>
          <th></th>
          <th>
            <Skeleton />
          </th>
          <th>
            <Skeleton />
          </th>
        </StyledHeaderRow>
      </thead>
      <tbody>
        {[0, 1, 2].map((index) => (
          <StyledRow key={index}>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
            <td>
              <Skeleton />
            </td>
          </StyledRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

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
    users.length > 0 ? (
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
      {isLoading ? (
        <LoadingTable />
      ) : hasLoaded ? (
        userContent
      ) : (
        <div>Use the button to retrieve users!</div>
      )}
    </StyledCard>
  );
};
