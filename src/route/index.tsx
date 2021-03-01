import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../features";
import { Layout, ScrollToTop } from "../components";
import DarkConstructor from "../features/Music/Albums/DarkConstructor";
import StarcrossedLovers from "../features/Music/Albums/StarcrossedLovers";
import Spies from "../features/Music/Albums/Spies";
import Riding from "../features/Music/Albums/Riding";
import Roars from "../features/Music/Albums/Roars";

const routes = [
  {
    name: "Home",
    title: "Home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    name: "DarkConstructor",
    path: "/albums/dark-constructor",
    exact: true,
    component: DarkConstructor,
  },
  {
    name: "StarcrossedLovers",
    path: "/albums/starcrossed-lovers",
    exact: true,
    component: StarcrossedLovers,
  },
  {
    name: "Spies",
    path: "/albums/spies",
    exact: true,
    component: Spies,
  },
  {
    name: "Riding",
    path: "/albums/riding",
    exact: true,
    component: Riding,
  },
  {
    name: "Roars",
    path: "/albums/roars",
    exact: true,
    component: Roars,
  },
];

const Routes = () => (
  <Router>
    <ScrollToTop>
      <Switch>
        <Layout>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Layout>
      </Switch>
    </ScrollToTop>
  </Router>
);

export default Routes;
