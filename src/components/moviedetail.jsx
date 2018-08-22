import React from "react";

import { getMovie, getMovies } from "../services/fakeMovieService";

const MoviesDetail = props => {
  console.log(getMovies());
  const movie = getMovie(props.match.params.id);
  console.log(movie);
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
