import React from "react";
import { getMovie, saveMovie, getMovies } from "../services/fakeMovieService";
import Joi from "joi-browser";
import randomstring from "random-string";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
class EditMovie extends Form {
  schema = {
    _id: Joi.required(),
    title: Joi.string()
      .required()
      .label("Title"),
    genre: Joi.required().label("Genre"),
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
    data.genreId = data.genre._id;
    delete data.genre;
    const result = saveMovie(data);
    const ti = getMovies();
    this.props.history.push("/movies");
  }
  render() {
    return (
      <div className="col-6 mx-auto">
        <h1>Update Movie</h1>
        <form onSubmit={this.handlesubmit}>
          {this.renderInput("title", "Title", "text")}
          {this.renderSelect("genre", "Genre", getGenres())}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Daily Rental Rate", "text")}
          <div>{this.renderButton("Submit")}</div>
        </form>
      </div>
    );
  }
}

export default EditMovie;
