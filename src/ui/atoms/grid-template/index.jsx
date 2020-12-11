import styled from "styled-components";
import { Grid } from "../grid";

export const GridTemplate = styled(Grid)``;
GridTemplate.defaultProps = {
  width: "100%",
  height: "calc(100vh - 64px)",
  position: "absolute",
  top: 64,
  // gridTemplateRows: ["repeat(8, 1fr)", null, null, "repeat(5, 1fr)"],
  gridTemplateColumns: ["repeat(8, 1fr)", null, null, "repeat(9, 1fr)"],
  // gridTemplateRows: ["repeat(5, 1fr)"],
  // gridTemplateColumns: "repeat(9, 1fr)",
  gridGap: 24
  // gridGap: [24, null, "10px 40px", "40px 78px"]
};
