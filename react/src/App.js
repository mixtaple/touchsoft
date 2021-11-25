import React, { Component } from 'react';
import './App.css';


class Counter extends Component {
    state = { count: 0,
              even : true
  };

  countUp = () => {
    this.setState({
      count: this.state.count + 1
    });
    this.checkEven();
  };

  countDown = () => {
    if (this.state.count > 0){
      this.setState({
        count: this.state.count - 1
      });
      this.checkEven();
    }
  };

  countReset = () => {
    if (this.state.count > 0){
      this.setState({
        count: 0,
        even: true
      });

    }
  };

  checkEven = () => {
    if (this.state.count % 2 === 0){
      this.setState({
        even: false
      });
    } else {
      this.setState({
        even: true
      });
    }
  }

  render() {
    return (
      <div className='counter'>
        <div className='counter__count'>{this.state.count}</div>
        {(this.state.even) ? <div className='counter__state isEven'>Is even</div> :
         <div className='counter__state notEven'>Not even</div>}
        <div className='counter__buttons'>
        <button onClick={this.countDown}>-</button>
        <button onClick={this.countReset}>Reset</button>
        <button onClick={this.countUp}>+</button>
        </div>
      </div>
    )
  }
}

export default Counter;
