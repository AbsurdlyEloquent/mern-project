import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)

    if (this.props.project) {
      this.state = {
        project: this.props.project
      }
    } else {
      this.state = {
        project: null
      }
    }
  }
  render() {
    if (this.state.project) {
    return (
      <form onSubmit={this.putHandler}>
        {/* Forms are so hard to read, its just a bunch of label, input pairs */}
            <label htmlFor="name">Name:</label>
          <input id="name" type="text" defaultValue={this.state.project.name} />
            <label htmlFor="description">Description:</label>
          <input id="description" type="text" defaultValue={this.state.project.description} />
            <label htmlFor="url">URL:</label>
          <input id="url" type="text" defaultValue={this.state.project.url} />
            <label htmlFor="homepage">Homepage:</label>
          <input id="homepage" type="text" defaultValue={this.state.project.homepage} />
            <label htmlFor="language">Language:</label>
          <input id="language" type="text" defaultValue={this.state.project.language} />
            <label htmlFor="framwork">Framework:</label>
          <input id="framwork" type="text" defaultValue={this.state.project.framwork} />
            <label htmlFor="private">Private:</label>
          <input id="true" className="private" name="private" type="radio" value="true" />
            <label htmlFor="true">True</label>
          <input id="false" className="private" name="private" type="radio" value="false" checked readOnly/>
            <label htmlFor="false">False</label>
          <input type="submit" />
          <input type="reset" />
        </form>
      )
    } else {
      return (
        <form onSubmit={this.putHandler}>
          {/* Forms are so hard to read, its just a bunch of label, input pairs */}
              <label htmlFor="name">Name:</label>
            <input id="name" type="text" />
              <label htmlFor="description">Description:</label>
            <input id="description" type="text" />
              <label htmlFor="url">URL:</label>
            <input id="url" type="text" />
              <label htmlFor="homepage">Homepage:</label>
            <input id="homepage" type="text" />
              <label htmlFor="language">Language:</label>
            <input id="language" type="text" />
              <label htmlFor="framwork">Framework:</label>
            <input id="framwork" type="text" />
              <label htmlFor="private">Private:</label>
            <input id="true" className="private" name="private" type="radio" value="true" />
              <label htmlFor="true">True</label>
            <input id="false" className="private" name="private" type="radio" value="false" checked readOnly/>
              <label htmlFor="false">False</label>
            <input type="submit" />
            <input type="reset" />
          </form>
      )
    }
  }
}
 export default Form
