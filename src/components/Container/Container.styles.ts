import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 1024px;
  margin: 20px auto;
`;

type StyledWrapperPropsType = {
  isInitiated: boolean;
};

export const StyledWrapper = styled.div<StyledWrapperPropsType>`
  display: flex;
  column-gap: 32px;
  align-items: ${(props) => (props.isInitiated ? "flex-start" : "initial")};
`;
