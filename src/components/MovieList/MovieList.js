import React, { useState, useRef } from "react";
import { Route, Link } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";
const MovieList = (props) => {
  const [isMovieClicked, setMovieClick] = useState(false);
  const [movieId, setMovieId] = useState("");

  /*let showMovie = props.movies.map((movie) => {
    if (isMovieClicked && movieId == movie.id) {
      return <MovieItem movie={movie} />;
    }
  });*/
  let showMovie = (movie) => {
    if (isMovieClicked && movieId == movie.id) {
      return <MovieItem movie={movie} />;
    } else {
      return null;
    }
  };

  const displayPosters = props.movies.map((movie) => {
    return (
      <div>
        <img
          className={`"relative cursor-pointer  p-2 z-10" + ${
            isMovieClicked ? "opacity-25" : "opacity-100"
          }`}
          src={process.env.REACT_APP_POSTER_PATH + movie.poster_path}
          alt=""
          onClick={() => {
            setMovieClick((prevState) => !prevState);
            setMovieId(movie.id);
          }}
        />
        {isMovieClicked && movie.id == movieId ? (
          <MovieItem movie={movie} />
        ) : null}
      </div>
    );
  });

  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-6 py-6 px-20 ">
        {displayPosters}
      </div>

      {/*<div className="absolute w-3/4 mx-1/2">{showMovie}</div>*/}
    </div>
  );
};

export default MovieList;
