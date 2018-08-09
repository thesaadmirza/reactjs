import React, { Component } from "react";
class Like extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let clas = "fa fa-heart";
    if (this.props.liked) {
      clas = "fa fa-heart";
    } else {
      clas = "fa fa-heart-o";
    }

    return (
      <div className="text-center">
        <i
          className={clas}
          onClick={this.props.onfit}
          style={{ cursor: "pointer" }}
          aria-hidden="true"
        />
      </div>
    );
  }
}

export default Like;
