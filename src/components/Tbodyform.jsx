import React from "react";
import Like from "./like.jsx";
import { Link } from "react-router-dom";
const Tbodyform = props => {
  const { movies, mLike, mDelete } = props;

  return movies.map(movies => (
    <tr key={movies._id}>
      <td>
        <Link to={"./moviedetail/" + movies._id}>{movies.title}</Link>
      </td>
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
