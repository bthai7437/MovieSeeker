import React, { useState } from "react";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";

const MovieItem = (props) => {
  console.log(props);
  return (
    <div className="absolute z-20 left-0 w-full">
      <img
        src={process.env.REACT_APP_POSTER_PATH + props.movie.backdrop_path}
        className="absolute px-6 bg-center filter brightness-50"
      />

      <div className=" relative inset-x-0 w-10/12 pl-14 z-40">
        <button className="pt-5" onClick={props.backClicked}>
          <ArrowCircleLeftIcon className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" />
        </button>
        <div className="h-1/2 text-white pt-6 font-sans text-7xl ">
          {props.movie.title}
          {props.movie.original_name}
        </div>
        <div className="text-white pt-28 font-sans text-3xl leading-loose">
          {props.movie.overview}
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
