import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './top-nav.css'

class TopNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">Maintenance one</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav">
            <NavLink exact className="nav-item nav-link" activeClassName="active" to='/'>Home</NavLink>
            {/* <NavLink exact className="nav-item nav-link" activeClassName="active" to='/product'>Product</NavLink> */}
            <NavLink exact className="nav-item nav-link" activeClassName="active" to='/products'>Products</NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default TopNav