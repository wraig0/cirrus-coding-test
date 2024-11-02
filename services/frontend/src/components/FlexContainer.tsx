/* @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { mediaQuery1200 } from "../styleConstants";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;

  ${mediaQuery1200} {
    flex-direction: row;
  }
`;
