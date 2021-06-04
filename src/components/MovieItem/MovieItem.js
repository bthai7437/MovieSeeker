import React, { useState } from "react";
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";

const MovieItem = (props) => {
  const [image, setImage] = useState(
    props.movie.backdrop_path
      ? process.env.REACT_APP_POSTER_PATH + props.movie.backdrop_path
      : process.env.PUBLIC_URL + "Images/NoImage.png"
  );
  var imageStyle =
    "absolute bg-center filter brightness-50 max-w-xs inset-x-0 m-auto md:max-w-full";

  if (!props.movie.backdrop_path) {
    imageStyle += " h-1/3 w-full";
  }
  const isIDValid = (id, index) => {
    if (id > 10000) {
      return "";
    }
    if (index > 0) {
      return ", " + props.genres[id];
    }
    return props.genres[id];
  };

  return (
    <div className="absolute z-20 left-0 w-full md:px-6">
      <div className=" relative inset-x-0 h-full">
        <img src={image} className={imageStyle} />
        <button className="pt-2 ml-9 w-7" onClick={props.backClicked}>
          <ArrowCircleLeftIcon className="hidden relative bg-blue-500 hover:bg-blue-700 text-white font-bold md:block lg:py-2 lg:px-4 rounded-full" />
        </button>
        <div className="relative mx-12 text-center text-xl md:text-3xl lg:text-7xl  text-white font-sans ">
          {props.movie.title}
          {props.movie.original_name}
        </div>
        <div className="relative ml-12 pt-2 text-white  md: mr-12 font-sans md:pt-20 md:text-lg lg:text-3xl">
          Release date: {props.movie.release_date}
          {props.movie.first_air_date}
        </div>
        <div className="relative mx-12 pt-1  md:pt-2 md:text-3xl lg:text-3xl  text-white font-sans ">
          Genre:{" "}
          {props.movie.genre_ids.map((id, index) => {
            return <span key={id}>{isIDValid(id, index)}</span>;
          })}
        </div>
      </div>

      <div className="absolute mt-3 mx-6 bg-gray-700 px-3 text-center text-white leading-loose z-20 md:relative md:bg-transparent md:text-xl md:pt-20 lg:pt-50 ">
        {props.movie.overview}
      </div>
    </div>
  );
};

export default MovieItem;
