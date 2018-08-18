import React, { Component } from "react";
class TheadForm extends Component {
  render() {
    const { onSort, sortColumn } = this.props;
    return (
      <tr>
        <th onClick={() => onSort("title")}>
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
        <th onClick={() => onSort("genre.name")}>
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
        <th onClick={() => onSort("numberInStock")}>
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
        <th onClick={() => onSort("dailyRentalRate")}>
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
    );
  }
}

export default TheadForm;
