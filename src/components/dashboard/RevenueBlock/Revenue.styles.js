import styled from "styled-components";
import { BlockWrapStyles } from "../../../styles/global/default";

export const RevenueWrap = styled.div`
  ${BlockWrapStyles}
  .bar-chart {
    width: 100%;
    height: 250px;
    margin-top: 30px;

    .recharts-legend-item {
      align-items: center !important;
    }
  }
`;
