/* dependencies */
import React from 'react'
import { Link } from 'react-router-dom'
/* stylesheets */
import './Sidebar.css'

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <aside className="sidebar">
          <h3>My Projects API</h3>
          <nav>
          <h5>Navigation</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/new">Create</Link></li>
              <li><Link to="/myprojects">My Projects</Link></li>
            </ul>
          </nav>
        </aside>
      </div>
    )
  }
}

export default Sidebar
