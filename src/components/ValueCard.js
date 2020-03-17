import React from 'react';

class ValueCard extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
    }
  }
  
  render() {
    return (
      <div className = "value-card">
        <div className="plan-name">{this.props.plan}</div>
        <div className="percent-rate-container">
          <div className="percent-rate">
            <div className="percent">10%</div>
            <div className="percent-note">All in fee</div>
          </div>
          <div className="percent-rate">
            <div className="percent">1.2%</div>
            <div className="percent-note">High water mark</div>
          </div>
        </div>
         
        <div className="amount"><span className="euro">€</span>{Math.ceil(this.props.costing*111.2/100)}</div>
      </div>
    )
  }
}

export default ValueCard