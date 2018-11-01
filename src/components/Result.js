import React from 'react';
import './css/Result.css';

class Result extends React.Component {
  render() {
    const numberOne = this.props.numbers[0]
    const numberTwo = this.props.numbers[1]
    const operator = this.props.operator
    let result = eval( `${numberOne} ${operator} ${numberTwo}` )
    if (isNaN(result)){
      result = 'error'
    } else if (result % 1 > 0 ){
      result = Math.round(result * 100) / 100
    }
    const className = (result==='error') ? 'error' : ''
    return (
      <div className="Result-div">
        <div className="Result-label">Result</div>
        <div className={className}>
          { numberOne<0 ? `(${numberOne})` : numberOne }
          {operator}
          { numberTwo<0 ? `(${numberTwo})` : numberTwo }
          =
          {result}
        </div>
      </div>
    );
  }
}

export default Result;
