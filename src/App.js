/* Dependencies */
import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
/* Stylesheets */
import './App.css';
/* Components */
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route exact path="/" component="Home" />
          <Route path="/new" component="Create"/>
          <Route path="/project" component="Project" />
          <Route path="/myprojects" component="UserProjects" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
