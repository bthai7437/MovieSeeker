import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Dashboard from "./components/Dashboard";
import MovieList from "./components/MovieList/MovieList";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearch] = useState("");

  <MovieList movies={movies} />;
  const getMovieRequest = async () => {
    const url = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default App;
