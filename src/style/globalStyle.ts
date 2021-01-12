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
    color: ${theme.colors.grey};
    background-color: ${theme.colors.black};
  }

  body {
    &.ReactModal__Body--open  {
      overflow: hidden;
      height: 100vh;
    }
}

  div#root {
    display: flex;
    flex-direction: column;
  }

  section {
    padding-bottom: 5rem;
  }

  .wrapper {
    margin-right: auto;
    margin-left: auto;
    max-width: 960px;
    padding-right: 10px;
    padding-left: 10px;
  }

  .section-title {
    text-transform: uppercase;
    font-size: 3rem;
  }
.image-item {
  padding: 20px 20px 20px 20px;
}

`;

export default GlobalStyle;
