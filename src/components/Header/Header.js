import React from "react";
import { HeaderContainer } from "./Header.styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <img alt="logo" src="/logo.svg" />
      <h3>Planned Test</h3>
    </HeaderContainer>
  );
};
