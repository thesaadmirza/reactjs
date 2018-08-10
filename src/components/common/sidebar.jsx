import React from "react";
import { genres } from "../../services/fakeGenreService.js";

const Sidebar = props => {
  return (
    <div className="list-group" id="list-tab" role="tablist">
      {genres.map(genres => (
        <a
          className={
            props.currentGenre == genres._id
              ? "list-group-item list-group-item-action active"
              : "list-group-item list-group-item-action"
          }
          key={genres._id}
          id={"list-" + genres.name + "-list"}
          style={{ cursor: "pointer" }}
          onClick={() => props.handleGenreChange(genres)}
          data-toggle="list"
          href={"#list-" + genres.name}
          role="tab"
          aria-controls={genres.name}
        >
          {genres.name}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
