import React, { Component } from 'react'
import './benefits.css';

class Benefits extends Component {
  constructor(props) {
    super(props)

    this.doSomething = this.doSomething.bind(this)
  }

  doSomething() {
    console.log('runnung')
  }

  render () {
    if (this.props.benefits) {
      const benefitList = this.props.benefits.map((benefit, index) => 
         <button key={'button' + index} className="btn btn-secondary" onClick={this.doSomething}>{benefit.name}</button>
      )
      return (
        <div>
          <h3>Benefits</h3>
          <div className="buttons form-group">{benefitList}</div>
        </div>
      )
    } else {
      return (
        <span data-testid="loading">Loading benefits...</span>
      )
    }
  }
}

export default Benefits