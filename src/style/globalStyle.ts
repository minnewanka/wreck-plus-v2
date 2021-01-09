import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'futura-pt', 'Open sans';
    font-weight: 400;
  }

  div#root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }


`;

export default GlobalStyle;
