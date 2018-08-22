import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import VidlyNavbar from "./VidlyNavbar";
import Movies from "./movies";
import Customers from "./customers";
import Rentals from "./rentals";
import NotFound from "./notfound";
import MovieDetail from "./moviedetail";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import AddMovie from "./addMovie";
import EditMovie from "./EditMovie";
class Main extends Component {
  render() {
    return (
      <main className="container">
        <VidlyNavbar />
        <br /> <br />
        <Switch>
          <Route path="/customers" component={Customers} />
          <Route path="/notfound" component={NotFound} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/addmovie" component={AddMovie} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/EditMovie/:id" component={EditMovie} />
          <Route path="/moviedetail/:id" component={MovieDetail} />
          <Redirect from="/" to="/movies" />
          <Redirect to="/notfound" />
        </Switch>
      </main>
    );
  }
}

export default Main;
