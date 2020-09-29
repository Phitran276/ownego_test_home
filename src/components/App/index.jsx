import React, { Fragment } from "react";
import Board from "./Board";
import Sidebar from "./Sidebar";
import { Route, Switch, Redirect } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Sidebar />
      <Redirect exact from="/" to="/Ding-tea" />
      <Switch>
        <Route path={`/Ding-tea`} component={Board} />
        <Route
          path={`/Tocotoco`}
          render={() => (
            <h1 style={{ textAlign: "center", marginLeft: "250px" }}>
              Tocotoco (No data)
            </h1>
          )}
        />
        <Route
          path={`/Gongcha`}
          render={() => (
            <h1 style={{ textAlign: "center", marginLeft: "250px" }}>
              Gongcha (No data)
            </h1>
          )}
        />
        <Route
          path={`/LeeTee`}
          render={() => (
            <h1 style={{ textAlign: "center", marginLeft: "250px" }}>
              LeeTee (No data)
            </h1>
          )}
        />
      </Switch>
    </Fragment>
  );
};

export default App;
