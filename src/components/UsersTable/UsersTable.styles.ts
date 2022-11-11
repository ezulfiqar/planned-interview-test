import styled from "styled-components";
import { Card } from "../Card";

export const StyledCard = styled(Card)`
  flex: 2;
`;

export const StyledHr = styled.hr`
  border-top: 1px solid #f4f5f7;
  margin: 16px -16px;
`;

export const StyledTable = styled.table`
  width: calc(100% + 32px);
  border-collapse: collapse;
  margin-left: -16px;
`;

export const StyledRow = styled.tr`
  border-bottom: 2px solid #f4f5f7;
  & > td {
    padding: 16px;
  }
`;

export const StyledHeaderRow = styled.tr`
  text-align: left;
  & > th {
    padding: 16px;
  }
`;
