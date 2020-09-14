/* dependencies */
import React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: this.props.projects
    }
    this.expand = this.expand.bind(this)
  }
  render() {
    return (
      <main className="home">
        <div className="accordion">
          <ul>
          { /* JS */
            this.state.projects.map((item, i) => {
              return (
                <li key={item['_id']} index={i}>
                  <button onClick={this.expand}>{item.name}</button>
                  <ul className='contents'>
                    <li>{item.description}</li>
                    <li>Private: {item.private}</li>
                    <li>Owner: <a href={item.owner.url}>AbsurdlyEloquent</a></li>
                    <li><a href={item.url}>Repository</a></li>
                    <li><a href={item.homepage}>Deployed</a></li>
                    <li>Language: {item.language}</li>
                    <li>Framework: {item.framework}</li>
                  </ul>
                </li>
              )
            })
            /* JS */ }
          </ul>
        </div>
      </main>
    )
  }
  expand(e) {

  }
}

export default Home
