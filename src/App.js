import React, {Component} from 'react';

class Counter extends Component{
  constructor() {
    super();
    this.state = {
      count: 0,
      doubleCount: false,
      i: 1,
    };
  }

  //this is where our methods go
  increment = () => {
    if(this.state.count < 20){
    this.setState ({
      count: this.state.count + this.state.i,
    })
  }
  }

  decrement = () => {
    if(this.state.count > 0){
    this.setState ({
      count: this.state.count - this.state.i,
    })
  }
}

  clear = () => {
    this.setState ({
      count: this.state.count = 0,
    })
  }

  double = () => {
    if(this.state.doubleCount){
      this.setState({
        doubleCount: false,
        i: 1,
      })
    } else{
      this.setState({
        doubleCount: true,
        i: 2,
      })
    }
  }

  render() {
    return (
      <div className="container">
        <div className="navbar">Counter</div>
        <div className="counter">
          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.increment}>Increment</button>
          <button type="button" onClick={this.decrement}>Decrement</button>
          <button type="button" onClick={this.clear}>Clear</button>
          <button type="button" onClick={this.double}>{this.state.doubleCount ? "Double Count" : "Single Count"}</button>
        </div>
      </div>
    );
  };
};

export default Counter;
