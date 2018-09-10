import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './top-nav.css'

class TopNav extends Component {
  render() {
    return (
      <div className="top-nav">
        <p>MAINTENANCEone</p>
        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
      </div>
    );
  }
}

export default TopNav