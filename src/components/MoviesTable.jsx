import React, { Component } from "react";
import Tbodyform from "./Tbodyform.jsx";

class MoviesTable extends Component {
  raiseSort = path => {
    const sortColumn = this.props.sortColumn;

    if (sortColumn.path == path) {
      console.log(sortColumn.order);
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { movies, onLike, onDelete } = this.props;
    return (
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")}>Name</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genres</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Rank</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Date</th>
            <th>Like</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <Tbodyform
            movies={movies}
            mDelete={function(movies) {
              onDelete(movies);
            }}
            mLike={function(movies) {
              onLike(movies);
            }}
          />
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
