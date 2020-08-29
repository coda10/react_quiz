import React, { Component } from 'react';
import Total from './Total';


// state data for 3 counters
const data = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
];

// Counter Component
class Counter extends Component {
  constructor(props){
    super(props)
    this.state= {
      value: props.value,
      total: 0,
      sum : 0
    }
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    console.log(this.state.value)
  }

  onIncrement(){
    this.setState(prevState=>{
            return {value: prevState.value + 1}
        });
  }

  onDecrement(){
    this.setState(prevState=>{
            return {value: prevState.value - 1}
        });
  }

  render() {
    //const { value } = this.props;
    //this.state.sum += this.state.value;
    console.log(this.state.value)
    return (
      <div>
      <div className="counter">
        <b>{this.state.value}</b>
        <div className="counter-controls">
          <button className="button is-danger is-small" onClick={this.onDecrement}>-</button>
          <button className="button is-success is-small" onClick={this.onIncrement}>+</button>
        </div>
      </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
          data : data
    }
  }

  render() {
    
    return (
      <div>
        {data.map((counter) => (
          <Counter key={counter.id} value={counter.value} />
        ))}
        <Total/>
      </div>
    );
  }
}

export default App;
