import GlobalStyle from "./style/globalStyle";
import { Theme } from "./style/theme";
import Routes from "./route";
import { Layout } from "./components";

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Layout>
        <Routes />
      </Layout>
    </Theme>
  );
};

export default App;
