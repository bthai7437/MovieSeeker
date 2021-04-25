import React from "react";
import { Link, Route } from "react-router-dom";
const MovieItem = (props) => {
  return (
    <div className="absolute z-20 left-0 w-full">
      <img
        src={process.env.REACT_APP_POSTER_PATH + props.movie.backdrop_path}
        className="absolute px-6 bg-center"
      />

      <div className=" relative inset-x-0 w-9/12 pl-14 z-40">
        <div className="h-1/2 text-white text-3xl pt-6">
          {props.movie.title}
        </div>
        <div className="text-white text-m pt-7 ">{props.movie.overview}</div>
      </div>
    </div>
  );
};

export default MovieItem;
