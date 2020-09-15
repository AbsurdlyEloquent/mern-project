/* dependencies */
import React from 'react'
import Form from '../Form/Form'

class Create extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      redirect: false
    }
  }
  render() {
    return (
      <div className="create-project">
        <h4>Create a project:</h4>
        <Form />
      </div>
    )
  }
}

export default Create
