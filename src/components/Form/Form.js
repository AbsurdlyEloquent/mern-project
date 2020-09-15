import React from 'react'
import { Redirect } from 'react-router-dom'

class Form extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.project) {
      this.state = {
        project: this.props.project,
        newProject: {_id: this.props.project._id},
        isPrivate: (this.props.project.private === 'true')
      }
    } else {
      this.state = {
        project: {},
        newProject: {},
        isPrivate: false
      }
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.resetHandler = this.resetHandler.bind(this)
    this.radioHandler = this.radioHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }
  render() {
    if (!this.state.redirect) {
      return (
        <form onReset={this.resetHandler} onSubmit={this.submitHandler} >
          {/* Forms are so hard to read, its just a bunch of label, input pairs */}
            <label htmlFor="name">Name:</label>
          <input id="name" type="text" defaultValue={this.state.project.name} onChange={this.changeHandler} />
            <label htmlFor="description">Description:</label>
          <input id="description" type="text" defaultValue={this.state.project.description} onChange={this.changeHandler} />
            <label htmlFor="url">URL:</label>
          <input id="url" type="text" defaultValue={this.state.project.url} onChange={this.changeHandler} />
            <label htmlFor="homepage">Homepage:</label>
          <input id="homepage" type="text" defaultValue={this.state.project.homepage} onChange={this.changeHandler} />
            <label htmlFor="language">Language:</label>
          <input id="language" type="text" defaultValue={this.state.project.language} onChange={this.changeHandler} />
            <label htmlFor="framwork">Framework:</label>
          <input id="framwork" type="text" defaultValue={this.state.project.framwork} onChange={this.changeHandler} />
            <label htmlFor="private">Private:</label>
          <input id="true" className="private" type="radio" value={true} name="private" onChange={this.radioHandler} defaultChecked={this.state.isPrivate} />
            <label htmlFor="true">True</label>
          <input id="false" className="private" type="radio" value={false} name="private" onChange={this.radioHandler} defaultChecked={!this.state.isPrivate} />
            <label htmlFor="false">False</label>
          <input type="submit" />
          <input type="reset" />
        </form>
      )
    } else {
      return (
        <Redirect to="/projects" />
      )
    }
  }
  changeHandler(e) {
    let newProject = this.state.newProject
    newProject[`${e.target.id}`] = e.target.value
    this.setState({ newProject: newProject})
  }
  resetHandler() {
    this.setState({ newProject: {} })
  }
  radioHandler(e) {
    let newProject = this.state.newProject
    newProject.private = e.target.value
    this.setState({ newProject: newProject, isPrivate: e.target.value })
  }
  async submitHandler(e) {
    e.preventDefault()
    try {
      this.setState({ redirect: await this.props.request(this.props.method, this.state.newProject) })
    } catch (err) {
      console.error(err)
    }
  }
}

export default Form
