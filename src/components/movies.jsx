import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService.js";
import Like from "./like.jsx";
import Pagination from "./common/pagination.jsx";
class Movies extends Component {
  state = {
    movies: getMovies()
  };
  numberMovies() {
    return this.state.movies.length ? this.state.movies.length : "no";
  }
  deletMovie = id => {
    return deleteMovie(id) ? this.setState(getMovies()) : "Sorry";
  };
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  render() {
    return (
      <main className="container">
        <h1>There are {this.numberMovies()} movies in Database </h1>
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Genres</th>
              <th>Rank</th>
              <th>Date</th>
              <th>Like</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.getcontent()}</tbody>
        </table>
        <Pagination />
      </main>
    );
  }
  getcontent() {
    const bodyarea = this.state.movies.map(movies => (
      <tr key={movies._id}>
        <td>{movies.title}</td>
        <td>{movies.genre.name}</td>
        <td>{movies.numberInStock}</td>
        <td>{movies.publishDate}</td>
        <td>
          <Like liked={movies.liked} onfit={() => this.handleLike(movies)} />
        </td>
        <td>
          <button
            onClick={() => this.deletMovie(movies._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return bodyarea;
  }
}

export default Movies;
