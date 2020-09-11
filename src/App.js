/* Dependencies */
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
/* Stylesheets */
import './App.css';
/* Components */
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
      </div>
    </Router>
  );
}

export default App;
