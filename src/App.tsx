import GlobalStyle from "./style/globalStyle";
import { Theme } from "./style/theme";
import Routes from "./route";

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Routes />
    </Theme>
  );
};

export default App;
