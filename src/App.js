/* Dependencies */
import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
/* Stylesheets */
import './App.css';
/* Components */
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home/Home'
import Create from './components/Create/Create'
import Project from './components/Project/Project'

const axios = require('axios').default

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: null
    }
  }
  async componentDidMount() {
    try {
      // !! CHANGE TO 'https://projects-absurdlyeloquent.herokuapp.com/projects' BEFORE DEPLOY !!
      const projects = await axios.get('http://lvh.me:3002/projects')
      this.setState({ projects: projects.data })
    }
    catch (err) {
      console.error(err)
    }
  }
  render() {
    if (this.state.projects) {
    return (
      <Router>
        <div className="App">
          <Sidebar />
          <Switch>
            <Route exact path="/"><Redirect to="/projects" /></Route>
            <Route exact path="/projects" render={()=> (<Home projects={this.state.projects}/>) } />
            <Route path="/projects/:id" component={Project} />
            <Route path="projects/new" component={Create} />
          </Switch>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div> className="App">
          <Sidebar />
        </div>
      </Router>
    )
  }
  }
}

export default App;
