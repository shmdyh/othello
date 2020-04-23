import React from "react";
import styled from "styled-components";

import Cell from "./Cell";

const Root = styled.div`
  width:540px;
  height:540px;
  //border: 1px solid;
  background-color: #485d3f

`;

const Game = (props) => {
  return (
    <Root>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </Root>
  );
}

export default Game;