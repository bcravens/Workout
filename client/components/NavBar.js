import React from 'react'
import { Link } from 'react-router'

class NavBar extends React.Component {
  render() {
    return (
      <div className="navBarContainer">
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}

export default NavBar
