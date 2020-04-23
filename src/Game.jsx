import React from "react";
import styled from "styled-components";

import Board from "./Board"

const Root = styled.div`
  width:100%;
  height:100%;
`;

const Game = (props) => {
  return (
    <Root>
      <Board />
    </Root>
  );
}

export default Game;