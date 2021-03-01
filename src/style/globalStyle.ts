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
    font-family: 'Roboto', sans-serif;
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
.lock-scroll {
  overflow: hidden;
  height: 100vh;
}

  div#root {
    display: flex;
    flex-direction: column;
  }

  ol {
    display:block;
    list-style-position: inside;
  }

  section {
    padding-top: 2rem;
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
    font-family: 'Corben',regular;
    text-transform: uppercase;
    margin-bottom: 3rem;
    font-size: 3rem;
  }
.image-item {
  padding: 20px 20px 20px 20px;
}

`;

export default GlobalStyle;
