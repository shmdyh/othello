import React from "react";
import ReactDom from "react-dom";

import Game from "./Game";

/**
 * ルートコンポーネント
 */
const App = () => {
    return (
    <Game />
    );
};


const appElement = document.getElementById("app");


ReactDom.render(<App />, appElement);
