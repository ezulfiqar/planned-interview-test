import styled from "styled-components";

export const Skeleton = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  height: 1em;
  width: 100%;
  animation: skeletonLoading 1s linear infinite alternate;
`;
