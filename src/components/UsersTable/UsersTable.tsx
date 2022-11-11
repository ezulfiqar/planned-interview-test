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
  isLoading: boolean;
  users: UserType[];
};

export const UsersTable = ({ isLoading, users }: UsersTablePropsType) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <StyledCard>
      <SearchInput setValue={setSearchValue} value={searchValue} />
      <StyledHr />
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
    </StyledCard>
  );
};
