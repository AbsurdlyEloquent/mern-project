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
      let project = this.state.project
      return (
        <div className="project-edit">
          <h4>Edit Project:</h4>
          <form onSubmit={this.putHandler}>
          {/* Forms are so hard to read, its just a bunch of label, input pairs */}
              <label htmlFor="name">Name:</label>
            <input id="name" type="text" defaultValue={project.name} />
              <label htmlFor="description">Description:</label>
            <input id="description" type="text" defaultValue={project.description} />
              <label htmlFor="url">URL:</label>
            <input id="url" type="text" defaultValue={project.url} />
              <label htmlFor="homepage">Homepage:</label>
            <input id="homepage" type="text" defaultValue={project.homepage} />
              <label htmlFor="language">Language:</label>
            <input id="language" type="text" defaultValue={project.language} />
              <label htmlFor="framwork">Framework:</label>
            <input id="framwork" type="text" defaultValue={project.framwork} />
              <label htmlFor="private">Private:</label>
            <input id="true" className="private" name="private" type="radio" value="true" />
              <label htmlFor="true">True</label>
            <input id="false" className="private" name="private" type="radio" value="false" checked readOnly/>
              <label htmlFor="false">False</label>
            <input type="submit" />
            <input type="reset" />
          </form>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
  putHandler(e) {
    console.log(e.target.elements[0].id+`: `+e.target.elements[0].value)
  }
}

export default Project
