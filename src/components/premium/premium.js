import React, { Component } from 'react'

class Premium extends Component {
  render () {
    if (this.props.premiums) {
      const premiumList = this.props.premiums.map((premium, index) => 
        <div className="row" key={index}>
          <div className="col-2">{index + 1}</div>
          <input className="form-control" 
            id={index} value={premium} 
            onChange={this.props.onChange}/>
        </div>
      )
      return (
        <div>
          <h3>Premiums</h3>
          <div>{premiumList}</div>
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