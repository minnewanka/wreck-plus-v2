import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Music } from "../features";

const routes = [
  {
    name: "Home",
    title: "Home",
    path: "/",
    exact: true,
    component: Home,
  },
  {
    name: "Music",
    title: "Music",
    path: "/music/",
    exact: true,
    component: Music,
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
