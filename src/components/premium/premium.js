import React, { Component } from 'react'

class Premium extends Component {
  render () {
    if (this.props.premiums) {
      const premiumList = this.props.premiums.map((premium, index) => 
        <div className="row align-items-center" key={index}>
          <label className="col-1" htmlFor={index}>{index + 1}</label>
          <input className="col-2 form-control" 
            id={index} value={premium} 
            onChange={this.props.onChange}/>
        </div>
      )
      return (
        <div data-testid="premiums">
          <h3>Premiums</h3>
          <div className="form-group">{premiumList}</div>
        </div>
      )
    } else {
      return (
        <span data-testid="loading">Loading...</span>
      )
    }
  }
}

export default Premium