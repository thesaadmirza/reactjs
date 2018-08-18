import React, { Component } from "react";
import Tbodyform from "./Tbodyform.jsx";
import TheadForm from "./TheadForm.jsx";

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
          <TheadForm sortColumn={sortColumn} onSort={this.raiseSort} />
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
