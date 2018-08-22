import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  getMovies,
  deleteMovie,
  getMovie
} from "../services/fakeMovieService.js";
import _ from "lodash";
import Pagination from "./common/pagination.jsx";
import Sidebar from "./common/sidebar.jsx";
import MoviesTable from "./MoviesTable.jsx";
import { paginate, pageinate } from "../utils/paginate.js";
import { genres, getGenres } from "../services/fakeGenreService.js";
class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    currentGenre: 1,
    sortColumn: { path: "title", order: "asc" }
  };

  numberMovies() {
    return this.state.movies.length ? this.state.movies.length : "no";
  }
  deletMovie = id => {
    return deleteMovie(id) ? this.setState({ movies: getMovies() }) : "Sorry";
  };
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleGenreChange = genre => {
    this.setState({ currentGenre: genre._id });
  };
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };
  render() {
    const { length: count } = this.state.movies;
    const onLike = this.handleLike;
    const onDelete = this.deletMovie;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      sortColumn,
      currentGenre
    } = this.state;
    const filtered =
      currentGenre != 1
        ? allMovies.filter(m => m.genre._id === currentGenre)
        : allMovies;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const movies = pageinate(sorted, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
          <Sidebar
            currentGenre={currentGenre}
            handleGenreChange={this.handleGenreChange}
          />
        </div>
        <div className="col-9">
          <Link to="/addMovie" className="btn btn-primary">
            Add Movie
          </Link>
          <h1>There are {this.numberMovies()} movies in Database </h1>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onSort={this.handleSort}
            onDelete={function(movies) {
              onDelete(movies);
            }}
            onLike={function(movies) {
              onLike(movies);
            }}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
