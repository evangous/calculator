import React from 'react';
import './css/Operators.css';

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      operator: '+'
    }
  }
  selectOperator(operator){
    this.setState({
      operator: operator
    })
    this.props.operatorHandler(operator);
  }
  render() {
    const operators = [
      { 'text' : '+ |', 'value' : '+' },
      { 'text' : '- |', 'value' : '-' },
      { 'text' : '÷ |', 'value' : '/' },
      { 'text' : '*', 'value' : '*' }
    ];
    const operatorsdiv = operators.map( (operator, index) =>
      <button type="button" className="Operator-button" onClick={() => this.selectOperator(operator.value)} key={index}>
        {operator.text}
      </button>
    )
    return (
      <div className="Operators-div">
        {operatorsdiv}
      </div>
    );
  }
}

export default Input;
