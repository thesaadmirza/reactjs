import React, { Component } from "react";
import Tbodyform from "./Tbodyform.jsx";

class MoviesTable extends Component {
  raiseSort = path => {
    const sortColumn = this.props.sortColumn;

    if (sortColumn.path == path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { movies, onLike, onDelete, sortColumn } = this.props;
    return (
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")}>
              Name
              <i
                class={
                  sortColumn.path === "title"
                    ? "fa fa-sort-" + sortColumn.order
                    : "fa fa-sort-desc"
                }
                aria-hidden="true"
              />
            </th>
            <th onClick={() => this.raiseSort("genre.name")}>
              Genres
              <i
                class={
                  sortColumn.path == "genre.name"
                    ? "fa fa-sort-" + sortColumn.order
                    : "fa fa-sort-asc"
                }
                aria-hidden="true"
              />
            </th>
            <th onClick={() => this.raiseSort("numberInStock")}>
              Rank
              <i
                class={
                  sortColumn.path == "numberInStock"
                    ? "fa fa-sort-" + sortColumn.order
                    : "fa fa-sort-asc"
                }
                aria-hidden="true"
              />
            </th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>
              Date
              <i
                class={
                  sortColumn.path == "dailyRentalRate"
                    ? "fa fa-sort-" + sortColumn.order
                    : "fa fa-sort-asc"
                }
                aria-hidden="true"
              />
            </th>
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
