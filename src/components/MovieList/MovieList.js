import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";
const MovieList = (props) => {
  const [isMovieClicked, setMovieClick] = useState(false);
  const [movieId, setMovieId] = useState("");
  const [movieGenres, setMovieGenres] = useState();

  const handleMovieClicked = (movieId) => {
    setMovieClick((prevState) => !prevState);
    setMovieId(movieId);
  };

  const getMovieGenres = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    const responseJson = await response.json();
    //Change array to a hash map
    var reducedGenre = responseJson.genres.reduce((map, genre) => {
      map[genre.id] = genre.name;
      return map;
    }, {});
    setMovieGenres(reducedGenre);
  };

  useEffect(() => {
    getMovieGenres();
  }, []);

  const displayPosters = props.movies.map((movie) => {
    return movie.poster_path ? (
      <div key={movie.id}>
        <img
          className={`"relative cursor-pointer  p-2 z-10" + ${
            isMovieClicked ? "opacity-25" : "opacity-100"
          }`}
          src={process.env.REACT_APP_POSTER_PATH + movie.poster_path}
          alt=""
          onClick={() => {
            handleMovieClicked(movie.id);
          }}
        />
        {isMovieClicked && movie.id == movieId ? (
          <MovieItem
            movie={movie}
            genres={movieGenres}
            backClicked={handleMovieClicked}
          />
        ) : null}
      </div>
    ) : null;
  });

  return (
    <div>
      <div className="grid md:grid-cols-2 md:grid-rows-8 lg:grid-cols-4 lg:grid-rows-6 py-6 px-20">
        {displayPosters}
      </div>
    </div>
  );
};

export default MovieList;
