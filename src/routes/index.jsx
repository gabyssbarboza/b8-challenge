import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Products } from "../pages/Products";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Products} path="/" exact />
      </Switch>
    </BrowserRouter>
  );
};
