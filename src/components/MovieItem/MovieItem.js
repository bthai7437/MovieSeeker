import React from "react";

const MovieItem = (props) => {
  return (
    <>
      <img
        src={process.env.REACT_APP_POSTER_PATH + props.movie.backdrop_path}
        className="flex-1 pl-2 opacity-30"
      />

      <div className="absolute w-7/12 pl-80">
        <div className="h-1/2 text-white text-3xl pl-5 pt-6">
          {props.movie.title}
        </div>
        <div className="text-white text-m pt-7 pl-5">
          {props.movie.overview}
        </div>
      </div>
    </>
  );
};

export default MovieItem;
