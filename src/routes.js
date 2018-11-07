import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header';
import Home from './components/home';
import Pricing from './components/pricing';
import PageNotFound from './components/page-not-found';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/pricing" component={Pricing} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Routes;