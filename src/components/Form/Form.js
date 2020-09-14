import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)

    if (this.props.project) {
      this.state = {
        project: this.props.project,
        newProject: {}
      }
    } else {
      this.state = {
        project: {},
        newProject: {}
      }
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.resetHandler = this.resetHandler.bind(this)
  }
  render() {
    return (
      <form onReset={this.resetHandler} >
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
        <input id="true" className="private" name="private" type="radio" value="true" />
          <label htmlFor="true">True</label>
        <input id="false" className="private" name="private" type="radio" value="false" checked readOnly />
          <label htmlFor="false">False</label>
        <input type="submit" />
        <input type="reset" />
      </form>
    )
  }
  changeHandler(e) {
    let newProject = this.state.newProject
    newProject[`${e.target.id}`] = e.target.value
    this.setState({ newProject: newProject})
    console.log(this.state.newProject)
  }
  resetHandler() {
    this.setState({ newProject: {} })
    console.log(this.state.newProject)
  }
}
 export default Form
