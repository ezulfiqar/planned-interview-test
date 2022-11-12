import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 1024px;
  margin: 20px auto;
`;

type StyledWrapperPropsType = {
  hasLoaded: boolean;
};

export const StyledWrapper = styled.div<StyledWrapperPropsType>`
  display: flex;
  column-gap: 32px;
  align-items: ${(props) => (props.hasLoaded ? "flex-start" : "initial")};
`;
