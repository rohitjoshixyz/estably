import React from "react";
import {
  calculateAllInFee,
  calculatePerformanceFee,
  calculateReturnFee,
  getReturnLabel,
} from "./calculatorHelper";

class ValueCard extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    const { plan, costing } = this.props;
    const returnLabel = getReturnLabel(plan);
    const returnValue = calculateReturnFee(costing, plan);
    const allInValue = calculateAllInFee(costing, plan);
    const perfomanceFeeValue = calculatePerformanceFee(costing, plan);

    return (
      <div className="value-card">
        <div className="percent-return-rate">
          <div className="percent f-2">{`${returnLabel}%`}</div>
          <div className="percent-note">Rendite</div>
          <div className="amount f-2">
            <span className="euro">€</span>
            {returnValue}
          </div>
        </div>
        <div className="plan-name">{`Value ${plan}`}</div>
        <div className="percent-rate-container">
          <div className="percent-rate">
            <div className="percent">1.2%</div>
            <div className="percent-note">All-In Fee inkludiert</div>
            <div className="amount f-3">
              <span className="euro">€</span>
              {allInValue}
            </div>
          </div>
          <div className="percent-rate">
            <div className="percent">10%</div>
            <div className="percent-note">Perfomance Fee</div>
            <div className="amount f-2">
              <span className="euro">€</span>
              {perfomanceFeeValue}
            </div>
          </div>
        </div>

        <div className="amount">
          <div className="percent-note">Gesamtkosten</div>
          <span className="euro">€</span>
          {perfomanceFeeValue + allInValue}
        </div>
      </div>
    );
  }
}

export default ValueCard;
