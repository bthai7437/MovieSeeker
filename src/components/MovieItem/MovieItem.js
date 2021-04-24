import React from "react";
import { Link, Route } from "react-router-dom";
const MovieItem = (props) => {
  return (
    <>
      <img
        src={process.env.REACT_APP_POSTER_PATH + props.movie.backdrop_path}
        className="absolute md:w-auto px-6 right-1 "
      />

      <div className="absolute inset-x-0 w-9/12 pl-14">
        <div className="h-1/2 text-white text-3xl pt-6">
          {props.movie.title}
        </div>
        <div className="text-white text-m pt-7 ">{props.movie.overview}</div>
      </div>
    </>
  );
};

export default MovieItem;
