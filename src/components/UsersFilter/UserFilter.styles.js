import styled from "styled-components";
import { Card } from "../Card";

export const StyledCard = styled(Card)`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const StyledButton = styled.button`
  background-color: #52a27e;
  color: white;
  padding: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    background-color: #74b497;
  }
  &:active {
    background-color: #418164;
  }

  transition: background-color 100ms;
`;
