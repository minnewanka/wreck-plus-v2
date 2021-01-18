import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../features";
import DarkConstructor from "../features/Music/Albums/DarkConstructor";
import StarcrossedLovers from "../features/Music/Albums/StarcrossedLovers";
import Spies from "../features/Music/Albums/Spies";
import Riding from "../features/Music/Albums/Riding";

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
];

const Routes = () => (
  <Router>
    <Switch>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  </Router>
);

export default Routes;
