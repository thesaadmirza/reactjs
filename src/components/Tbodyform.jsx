import React from "react";
import Like from "./like.jsx";
const Tbodyform = props => {
  const { movies, mLike, mDelete } = props;

  return movies.map(movies => (
    <tr key={movies._id}>
      <td>{movies.title}</td>
      <td>{movies.genre.name}</td>
      <td>{movies.numberInStock}</td>
      <td>{movies.publishDate}</td>
      <td>
        <Like liked={movies.liked} onfit={() => mLike(movies)} />
      </td>
      <td>
        <button onClick={() => mDelete(movies._id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  ));
};

export default Tbodyform;
