import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Categories from './Categories';
import Question from './Question';

import data from '../data/questions.json';
const categories = data.categories;

export default function Main() {
  return (
    <Router>
      <main className="main">
        <header className="header">
          <Link to="/">гомункул викторина</Link>
        </header>

        <Switch>
          <Route
            exact path="/"
            render={(props) => (
              <Categories {...props} categories={categories} />
            )}
          />
          <Route
            exact path="/question/:index"
            render={(props) => (
              <Question {...props} />
            )}
          />
        </Switch>
      </main>
    </Router>
  );
};
