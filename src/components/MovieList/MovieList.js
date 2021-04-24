import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";
const MovieList = (props) => {
  const [isMovieClicked, setMovieClick] = useState(false);

  return (
    <>
      {props.movies.map((movie) => {
        return (
          <div>
            <Link to={`/${movie.id}`}>
              <img
                className="cursor-pointer h-auto p-2"
                src={process.env.REACT_APP_POSTER_PATH + movie.poster_path}
                alt=""
                onClick={() => {
                  setMovieClick((prevState) => !prevState);
                }}
              />
            </Link>

            <Route
              path={`/${movie.id}`}
              component={() => <MovieItem movie={movie} />}
            />
          </div>
        );
      })}
    </>
  );
};

export default MovieList;
