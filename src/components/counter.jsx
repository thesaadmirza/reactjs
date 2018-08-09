import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <span
              className={
                "badge " +
                (this.props.counter.value
                  ? "badge-primary "
                  : "badge-danger ") +
                " m-4"
              }
            >
              {this.props.counter.value ? this.props.counter.value : "Zero"}
            </span>
          </div>
          <div className="col">
            <button
              className="btn btn-secondary m-4"
              onClick={() => this.props.onIncrement(this.props.counter)}
            >
              <i class="fa fa-plus" />
            </button>
            <button
              className="btn btn-secondary m-4"
              onClick={() => this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value == 0 ? "disabled" : ""}
            >
              <i class="fa fa-minus" />
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger m-4"
            >
              <i class="fa fa-times" />
            </button>
          </div>
        </div>
      </div>
    );
  }
  getvalue(value) {
    return;
  }
}

export default Counter;
