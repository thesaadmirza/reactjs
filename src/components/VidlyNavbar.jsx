import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class VidlyNavbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink class="navbar-brand" to="./">
          Vidly
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink class="nav-link" to="./">
                Home <span class="sr-only" />
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="./customers">
                Customer
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="./rentals">
                Rentals
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink class="nav-link" to="./login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default VidlyNavbar;
