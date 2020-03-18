import React from 'react';
import Slider from 'react-rangeslider-withkeeptooltip'
import 'react-rangeslider-withkeeptooltip/lib/index.css'
import ValueCard from './ValueCard'

class CostSlider extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      cost: 50000,
    }
  }
 
  handleOnChange = (value) => {
    this.setState({
      cost: value
    })
  }

 
 
  render() {
    let { cost } = this.state
    return (
    <div>
      <p>Anlagebetrag <span className="principal">€{cost}</span></p>
      <div className="slider-container">
        <Slider
          value={cost}
          orientation="horizontal"
          onChange={this.handleOnChange}
          min={35000}
          max={100000}
          keepTooltip={true}
          style={this.sliderStyle}
          step={1000}
        />
      </div>
      <div className="value-card-container">
        <ValueCard costing = {this.state.cost} plan={30}/>
        <ValueCard costing = {this.state.cost} plan={60}/>
        <ValueCard costing = {this.state.cost} plan={100}/>
      </div>
    </div>
    
    )
  }
}

export default CostSlider