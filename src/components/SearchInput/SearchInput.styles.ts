import styled from "styled-components";
import { Input } from "../Input";

export const StyledInput = styled(Input)`
  background: yellow;
  & > input {
    font-size: 0.8em;
  }
`;
