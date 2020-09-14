/* Dependencies */
import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
/* Stylesheets */
import './App.css';
/* Components */
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import Create from './components/Create/Create'
import Project from './components/Project/Project'
import UserProjects from './components/UserProjects/UserProjects'

const axios = require('axios').default

class App extends React.Component {
  async componentDidMount() {
    try {
      // !! CHANGE TO 'https://projects-absurdlyeloquent.herokuapp.com/projects' BEFORE DEPLOY !!
      const projects = await axios.get('http://lvh.me:3002/projects')
      console.log(projects)
    }
    catch (err) {
      console.error(err)
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/new" component={Create} />
            <Route path="/project" component={Project} />
            <Route path="/myprojects" component={UserProjects} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
