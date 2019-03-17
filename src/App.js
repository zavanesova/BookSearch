import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import './App.css';

function App() {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Books} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
