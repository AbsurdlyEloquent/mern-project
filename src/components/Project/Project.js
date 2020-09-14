/* dependencies */
import React from 'react'
import Form from '../Form/Form'

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
          <h4>Edit Project:</h4>
          <Form project={this.state.project} />
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
  putHandler(e) {

  }
}

export default Project
