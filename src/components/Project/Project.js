/* dependencies */
import React from 'react'

const axios = require('axios').default

class Project extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      project: null
    }
  }
  async componentDidMount() {
    try {
      // !! CHANGE TO 'https://projects-absurdlyeloquent.herokuapp.com/projects' BEFORE DEPLOY !!
      const res = await axios.get(`http://lvh.me:3002/projects/${this.state.id}`)
      this.setState({ project: res.data })
    }
    catch (err) {
      console.error(err)
    }
  }
  render() {
    // without this if,
    // the component will throw an error before the promise is finished
    if (this.state.project) {
      return (
        <div className="project-edit">
          <form>
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" defaultValue={this.state.project.name} />
            <label htmlFor="desc">Description:</label>
            <input id="desc" type="text" defaultValue={this.state.project.description} />
            <label htmlFor="url">URL:</label>
            <input id="url" type="text" defaultValue={this.state.project.url} />
          </form>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Project
