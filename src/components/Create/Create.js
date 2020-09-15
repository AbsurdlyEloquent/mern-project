/* dependencies */
import React from 'react'
import Form from '../Form/Form'

class Create extends React.Component {
  render() {
    return (
      <div className="create-project">
        <h4>Create a project:</h4>
        <Form request={this.props.request} method={'post'} />
      </div>
    )
  }
}

export default Create
