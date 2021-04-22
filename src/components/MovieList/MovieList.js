import React, { useState } from "react";
import MovieItem from "../MovieItem/MovieItem";
const onImageClick = () => {};

const MovieList = (props) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="container flex h-96">
      <img
        className="cursor-pointer"
        src={process.env.REACT_APP_POSTER_PATH + props.items.poster_path}
        alt=""
        onClick={() => {
          setVisible(!isVisible);
        }}
      />

      {isVisible ? <MovieItem movie={props.items} /> : null}
    </div>
  );
};

export default MovieList;
