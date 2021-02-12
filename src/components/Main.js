import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Categories from './Categories';
import Category from './Category';

export default function Main() {
  return (
    <Router>
      <main>
        <header>
          <Link to="/">гомункул викторина</Link>
        </header>

        <Switch>
          <Route exact path="/" component={Categories} />
          <Route path="/categories/:index" component={Category} />
        </Switch>
      </main>
    </Router>
  );
};
