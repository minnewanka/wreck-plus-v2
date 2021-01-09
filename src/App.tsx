import GlobalStyle from "./style/globalStyle";
import { Theme } from "./style/theme";
import Routes from "./route";

const App = () => {
  return (
    <div>
      <Theme>
        <GlobalStyle />
        <Routes />
      </Theme>
    </div>
  );
};

export default App;
