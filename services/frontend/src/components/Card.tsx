import styled from "@emotion/styled";
import { cardBackground, mediaQuery1200 } from "../styleConstants";

export const Card = styled.div`
  border-radius: 16px;
  padding: 16px;
  border: 1px solid transparent;
  background-color: ${cardBackground};
  flex-grow: 1;
  min-height: 110px;
  align-items: center;
  justify-content: center;
  display: flex;
  ${mediaQuery1200} {
    min-height: 140px;
    flex-basis: 195px;
  }
`;

export const ShortCard = styled(Card)`
  padding: 8px 32px;
  min-height: fit-content !important;
`;
