import React from "react";

import { getMovie } from "../services/fakeMovieService";

const MoviesDetail = props => {
  const movie = getMovie(props.match.params.id);
  return (
    <div>
      <h1>{movie.title}</h1>
      <button
        onClick={() => props.history.push("/movies")}
        className="btn btn-success"
      >
        Save
      </button>
    </div>
  );
};

export default MoviesDetail;
