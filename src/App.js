import React from 'react';
import logo from './logo.svg';
import { UserRegister } from './features/user/UserRegister';
import { UserLogin } from './features/user/UserLogin';
import { UserContacs } from './features/user/userContacs';
import { NavBar } from './features/Components/NavBar';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
      <Switch>
        <Route path="/register">
          <UserRegister/>
        </Route>
        <Route path="/contacs">
          <UserContacs/>
        </Route>
        <Route path="/">
          <UserLogin/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
