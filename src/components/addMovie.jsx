import React from "react";
import Joi from "joi-browser";
import randomstring from "random-string";
import Form from "./common/form";
import { saveMovie, getMovies } from "../services/fakeMovieService.js";
import { getGenres } from "../services/fakeGenreService";

class AddMovie extends Form {
  schema = {
    name: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.number()
      .positive()
      .min(0)
      .max(100)
      .required(),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
  };
  doSubmit() {
    const data = this.state.data;
    data._id = randomstring({
      length: 15,
      numeric: true,
      letters: true,
      special: false,
      exclude: ["a", "b", "1"]
    });
    const result = saveMovie(data);
    const ti = getMovies();
    this.props.history.push("/movies");
  }
  render() {
    return (
      <div className="col-6 mx-auto">
        <h1>Add Movie</h1>
        <form onSubmit={this.handlesubmit}>
          {this.renderInput("name", "Title")}
          {this.renderSelect("genreId", "Genre", getGenres())}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Daily Rental Rate")}
          <div>{this.renderButton("Submit")}</div>
        </form>
      </div>
    );
  }
}

export default AddMovie;
