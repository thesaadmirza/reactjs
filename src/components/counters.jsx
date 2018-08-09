import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="btn btn-primary m-4">
          Reset
        </button>
        {this.props.counters.map(counters => (
          <Counter
            key={counters.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            counter={counters}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
