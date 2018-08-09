import React, { Component } from "react";
class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-dark">{this.props.totalCounter}</span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
