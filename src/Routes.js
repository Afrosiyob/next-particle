import React from "react";
import { Route, Switch } from "react-router-dom";

import Nextparticle from './pages/nextparticle';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
      
        <Route path="/" component={Nextparticle} />

        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
