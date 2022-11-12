import styled from "styled-components";

type StyledDivPropsType = {
  disabled?: boolean;
};

export const StyledDiv = styled.div<StyledDivPropsType>`
  background-color: ${(props) => (props.disabled ? "#fafafa" : "initial")};
  border-radius: 6px;
  border: 2px solid #f4f5f7;
  padding: 12px;
  color: #aeb1b7;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLabel = styled.label`
  margin-right: 16px;
`;

export const StyledIcon = styled.img`
  margin-right: 12px;
  height: 1em;
  width: 1em;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 1em;
  &::placeholder {
    color: #aeb1b7;
    opacity: 1;
  }
`;
