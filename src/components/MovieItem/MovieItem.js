import React, { useState } from "react";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";

const MovieItem = (props) => {
  console.log(props);
  return (
    <div className="absolute z-20 left-0 w-full ">
      <img
        src={
          props.movie.backdrop_path
            ? process.env.REACT_APP_POSTER_PATH + props.movie.backdrop_path
            : null
        }
        className="absolute px-6 bg-center filter brightness-50"
      />

      <div className=" relative inset-x-0 h-full z-40">
        <button className="pt-5 ml-9 w-7" onClick={props.backClicked}>
          <ArrowCircleLeftIcon className="bg-blue-500 hover:bg-blue-700 text-white font-bold  lg:py-2 lg:px-4 rounded-full" />
        </button>
        <div className="mx-12 text-center text-2xl md:text-3xl lg:text-7xl  text-white font-sans h-1/2">
          {props.movie.title}
          {props.movie.original_name}
        </div>
        <div className="ml-12 text-white font-sans  md:text-lg lg:text-3xl pt-5">
          {props.movie.release_date}
          {props.movie.first_air_date}
        </div>
      </div>
      <div className="mx-7 bg-gray-700 px-3 pb-4 pt-16  md:relative md:bg-transparent md:text-xl md:pt-20 lg:pt-72 text-center text-white leading-loose ">
        {props.movie.overview}
      </div>
    </div>
  );
};

export default MovieItem;
