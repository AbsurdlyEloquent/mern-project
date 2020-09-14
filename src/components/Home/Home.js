/* dependencies */
import React from 'react'
import './Home.css'

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
                <li className="item" key={item['_id']} index={i}>
              {/* this is the css checkbox hack to avoid an event listener */}
                  <label htmlFor={`toggle${i}`} className="label">{item.name}</label>
                  <input type="checkbox" className="toggle" id={`toggle${i}`}/>
                  <ul className='contents'>
                    <li>{item.description}</li>
                    <li>Private: {item.private}</li>
                    <li>Owner: <a href={item.owner.url}>AbsurdlyEloquent</a></li>
                    <li><a href={item.url}>Repository</a></li>
                    <li><a href={item.homepage}>Deployed</a></li>
                    <li>Language: {item.language}</li>
                    <li>Framework: {item.framework}</li>
                    <li><button>EDIT</button><button>DELETE</button></li>
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
}

export default Home
