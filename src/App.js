import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './index.css';

import Main from './components/Main';

export default function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/">гомункул викторина</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
