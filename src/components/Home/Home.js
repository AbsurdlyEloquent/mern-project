/* dependencies */
import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: this.props.projects
    }
  }
  render() {
    return (
      <main className="home">
        <div className="accordion">
          <ul>
          { /* JS */
            this.state.projects.map((item, i) => {
              return (
                <li key={i} index={i}><button onClick={this.expand}>{item.name}</button></li>
              )
            })
            /* JS */ }
          </ul>
        </div>
      </main>
    )
  }
  expand(e) {
    let i = e.target.parentElement.getAttribute('index')
    console.log(i)
  }
}

export default Home
