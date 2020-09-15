/* dependencies */
import React from 'react'
import { Link } from 'react-router-dom'

import './Home.css'

const axios = require('axios')

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
                    <li>Private: {item.private.toString()}</li>
                    <li>Owner: <a href={item.owner.url}>AbsurdlyEloquent</a></li>
                    <li><a href={item.url}>Repository</a></li>
                    <li><a href={item.homepage}>Deployed</a></li>
                    <li>Language: {item.language}</li>
                    <li>Framework: {item.framework}</li>
                    <li><Link to={`projects/${item['_id']}`}>EDIT</Link><Link to={''} onClick={(e)=> this.deleteHandler(e, item._id)}>DELETE</Link></li>
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
  deleteHandler(e, id) {
    e.preventDefault()
    axios.delete(`http://projects-absurdlyeloquent.herokuapp.com/projects/${id}`)
  }
}

export default Home
