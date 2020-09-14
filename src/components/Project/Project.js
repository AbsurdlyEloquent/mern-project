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
      const project = await axios.get(`http://lvh.me:3002/projects/${this.state.id}`)
      console.log(project)
      this.setState({ project: project })
    }
    catch (err) {
      console.error(err)
    }
  }
  render() {
    return (
      <div></div>
    )
  }
}

export default Project
