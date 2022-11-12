import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 1200px;
  margin: 20px auto;

  @media (max-width: 1240px) {
    width: 900px;
  }

  @media (max-width: 940px) {
    width: 600px;
  }

  @media (max-width: 640px) {
    width: calc(100% - 40px);
    margin: 20px;
  }
`;

type StyledWrapperPropsType = {
  isInitiated: boolean;
};

export const StyledWrapper = styled.div<StyledWrapperPropsType>`
  display: flex;
  column-gap: 32px;
  align-items: ${(props) => (props.isInitiated ? "flex-start" : "initial")};

  @media (max-width: 940px) {
    flex-direction: column;
    row-gap: 32px;
    align-items: initial;
  }
`;
